const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('📸 Updating targeted Atom screenshots...');
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 800});
  
  const name = 'atom';
  const url = 'http://localhost:30011/auth';
  
  try {
    await page.goto(url, {waitUntil: 'networkidle2', timeout: 30000});
    
    console.log(`  -> Waiting for login page to render...`);
    await page.waitForSelector('input[type="email"]', {timeout: 15000});
    await page.type('input[type="email"]', 'sathveek@gmail.com');
    
    // Some React forms require the password input to be focused properly
    const pwd = await page.$('input[type="password"]');
    if(pwd) {
      await pwd.click();
      await pwd.type('Sathveek');
    }

    console.log(`  -> Submitting login form...`);
    await page.keyboard.press('Enter');
    
    try {
        await page.click('button[type="submit"]');
    } catch(e) {}

    // Wait 15 seconds for the Next.js dev server to compile the dashboard!
    console.log(`  -> Waiting 15 seconds for the dashboard to load/compile...`);
    await new Promise(r => setTimeout(r, 15000));

    // Check if we are still on the auth page
    const currentUrl = page.url();
    if (currentUrl.includes('/auth')) {
        console.log(`  ❌ WARNING: Still on the /auth page. Login might have failed or is taking too long!`);
    }

    // 1. Take Main Screenshot (Dashboard)
    await page.screenshot({path: path.join(__dirname, `public/projects/${name}.png`)});
    console.log(`  ✅ Saved MAIN screenshot: ${name}.png`);

    // 2. Find internal links matching the user's exact requested tabs
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a'))
        .filter(a => {
            const text = a.innerText.toLowerCase();
            return text.includes('memory') || text.includes('graph') || 
                   text.includes('curriculum') || text.includes('exam') || 
                   text.includes('strateg') || text.includes('session');
        })
        .map(a => a.href)
        .filter(href => href.startsWith(window.location.origin) && href !== window.location.href);
    });
    
    // Get unique links, fallback to any random links if specific keywords aren't found in the navbar
    let uniqueLinks = [...new Set(links)];
    if (uniqueLinks.length === 0) {
        console.log("  ⚠️ Could not find links with exact text (Memory/Curriculum), grabbing any available navigation tabs instead...");
        const allLinks = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a'))
              .map(a => a.href)
              .filter(href => href && href.startsWith(window.location.origin) && href !== window.location.href);
        });
        uniqueLinks = [...new Set(allLinks)];
    }
    
    // Take exactly 3 tabs
    const tabsToVisit = uniqueLinks.slice(0, 3);

    for (let i = 0; i < tabsToVisit.length; i++) {
      console.log(`  -> Clicking tab ${i + 1}: ${tabsToVisit[i]}`);
      try {
        // Click the link via client-side routing instead of a hard reload to preserve session
        await page.evaluate((href) => {
            const relHref = href.replace(window.location.origin, '');
            const el = document.querySelector(`a[href="${relHref}"]`) || document.querySelector(`a[href="${href}"]`);
            if (el) el.click();
        }, tabsToVisit[i]);
        
        // Wait for page transition and graphs to load
        await new Promise(r => setTimeout(r, 5000));
        await page.screenshot({path: path.join(__dirname, `public/projects/${name}-preview-${i + 1}.png`)});
        console.log(`  ✅ Saved PREVIEW screenshot: ${name}-preview-${i + 1}.png`);
      } catch (e) {
        console.log(`  ❌ Skipped tab ${i + 1}: ${e.message}`);
      }
    }
  } catch (e) {
    console.log(`❌ Failed to process Atom: ${e.message}`);
  }

  await browser.close();
  console.log('\n🎉 Atom screenshots successfully updated!');
})();
