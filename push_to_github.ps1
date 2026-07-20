# Add the new changes to Navbar and CSS
git add src/components/layout/Navbar.tsx
git add src/app/globals.css

# Make a commit for these changes
git commit -m "style: update header branding to normal bold text and remove right tabs"

Write-Host "Pushing to GitHub..."
git push origin main --force

Write-Host "Done! Your changes are live on GitHub."
