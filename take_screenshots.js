const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('📸 Starting automated multi-tab screenshot tool...');
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 800});
  
  const takeScreenshots = async (name, url, loginDetails = null) => {
    console.log(`\nNavigating to ${name}...`);
    try {
      await page.goto(url, {waitUntil: 'networkidle2', timeout: 30000});
      
      if (loginDetails) {
        console.log(`  -> Logging in to ${name}...`);
        await page.waitForSelector('input[type="email"]', {timeout: 5000});
        await page.type('input[type="email"]', loginDetails.email);
        await page.type('input[type="password"]', loginDetails.password);
        await page.keyboard.press('Enter');
        await new Promise(r => setTimeout(r, 4000)); // wait for dashboard
      }

      // 1. Take Main Screenshot
      const mainPath = path.join(__dirname, `public/projects/${name}.png`);
      await page.screenshot({path: mainPath});
      console.log(`  ✅ Saved MAIN screenshot: ${name}.png`);

      // Find internal links for tabs/pages
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a'))
          .map(a => a.href)
          .filter(href => href && href.startsWith(window.location.origin) && href !== window.location.href);
      });
      
      // Get unique links
      const uniqueLinks = [...new Set(links)];
      const tabsToVisit = uniqueLinks.slice(0, 3); // Take up to 3 different tabs

      for (let i = 0; i < tabsToVisit.length; i++) {
        console.log(`  -> Navigating to tab ${i + 1}: ${tabsToVisit[i]}`);
        try {
          await page.goto(tabsToVisit[i], {waitUntil: 'networkidle2', timeout: 15000});
          await new Promise(r => setTimeout(r, 2000)); // wait for animations
          const tabPath = path.join(__dirname, `public/projects/${name}-preview-${i + 1}.png`);
          await page.screenshot({path: tabPath});
          console.log(`  ✅ Saved PREVIEW screenshot: ${name}-preview-${i + 1}.png`);
        } catch (e) {
          console.log(`  ❌ Skipped tab ${i + 1}`);
        }
      }

    } catch (e) {
      console.log(`❌ Failed to process ${name}: ${e.message}`);
    }
  };

  await takeScreenshots('cinema', 'https://cinema-time-black.vercel.app/');
  await takeScreenshots('repo', 'https://github-runner-kappa.vercel.app/');
  await takeScreenshots('atom', 'http://192.168.0.106:3001/', {email: 'sathveek@gamil.com', password: 'Sathveek'});
  await takeScreenshots('iot', 'http://127.0.0.1:3002/', {email: 'admin@example.com', password: 'password'});

  await browser.close();
  console.log('\n🎉 All multi-tab screenshots updated!');
})();
