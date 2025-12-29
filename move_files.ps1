$source = "src\app"
$dest = "src\app\(site)"
$exclude = @("(site)", "studio", "layout.tsx", "globals.css", "favicon.ico", "not-found.tsx", "loading.tsx", "error.tsx", "global-error.tsx", "route.ts", "icon.tsx", "apple-icon.tsx", "opengraph-image.tsx", "twitter-image.tsx", "sitemap.ts", "robots.ts")

Get-ChildItem -Path $source | Where-Object { 
    $_.Name -notin $exclude 
} | ForEach-Object {
    Write-Host "Moving $($_.Name) to $dest"
    Move-Item -Path $_.FullName -Destination $dest -Force
}
