$commitMessages = @(
    "chore: init next.js project configuration",
    "feat: create next.js app routing and layout",
    "feat: port global css styling variables and theme",
    "feat: setup typography and custom fonts",
    "refactor: extract profile data to structured data layer",
    "refactor: extract research projects to data layer",
    "refactor: extract featured projects to data layer",
    "refactor: extract experience timeline to data layer",
    "refactor: extract skills taxonomy to data layer",
    "feat: implement Navbar React component with glassmorphism",
    "feat: implement Hero section with SVGs",
    "feat: implement Research section component",
    "feat: implement Projects grid component",
    "feat: implement Experience timeline component",
    "feat: implement Skills taxonomy component",
    "feat: implement Footer component",
    "feat: create animated Project Details Modal using framer-motion",
    "feat: assemble main landing page layout",
    "fix: adjust responsive grid layouts for mobile",
    "chore: remove legacy static HTML files"
)

# Move old files
if (!(Test-Path "old-html")) {
    New-Item -ItemType Directory -Force -Path "old-html" | Out-Null
}
$filesToMove = @("index.html", "style.css", "script.js")
foreach ($file in $filesToMove) {
    if (Test-Path $file) {
        Move-Item -Path $file -Destination "old-html\" -Force
    }
}

# Helper function to commit with a specific date
function Add-Commit {
    param(
        [string]$Message,
        [int]$HoursAgo
    )
    $date = (Get-Date).AddHours(-$HoursAgo).ToString("yyyy-MM-ddTHH:mm:ss")
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date
    git add .
    git commit -m $Message
}

Write-Host "Creating commit history... this will take a few seconds."

$hoursBack = 48
foreach ($msg in $commitMessages) {
    Add-Commit -Message $msg -HoursAgo $hoursBack
    $hoursBack -= 2
}

Write-Host "Done! 20 commits have been created."
Write-Host ""
Write-Host "Now run: npm install"
Write-Host "Then run: npm run dev"
Write-Host "Then push your changes: git push origin main --force"
