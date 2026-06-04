# Image Renaming Script for Orchard Galleries
# This script helps rename WhatsApp images to match the website's expected filenames

$photosDir = "Photos"

# Get all WhatsApp images
$images = Get-ChildItem "$photosDir\WhatsApp*.jpeg" | Sort-Object Name

Write-Host "Found $($images.Count) images to rename"
Write-Host ""

# Define the mapping for required images
$imageMap = @(
    # Hero Images (3 images)
    @{new="hero-1.jpg"; desc="Main exhibition space or featured artwork"},
    @{new="hero-2.jpg"; desc="Gallery interior with visitors"},
    @{new="hero-3.jpg"; desc="Art installation view"},
    
    # Featured Exhibition (1 image)
    @{new="exhibition-featured.jpg"; desc="Featured exhibition artwork"},
    
    # Events (8 images)
    @{new="event-opening.jpg"; desc="Opening reception scene"},
    @{new="event-artist-talk.jpg"; desc="Artist speaking at event"},
    @{new="event-workshop.jpg"; desc="Workshop in progress"},
    @{new="event-panel.jpg"; desc="Panel discussion"},
    @{new="event-gallery-tour.jpg"; desc="Gallery tour"},
    @{new="event-family-day.jpg"; desc="Family-friendly event"},
    @{new="event-first-friday.jpg"; desc="First Friday celebration"},
    @{new="event-open-studio.jpg"; desc="Open studio event"},
    
    # Exhibitions (9 images)
    @{new="exhibition-1.jpg"; desc="Current exhibition 1"},
    @{new="exhibition-2.jpg"; desc="Current exhibition 2"},
    @{new="exhibition-3.jpg"; desc="Current exhibition 3"},
    @{new="exhibition-4.jpg"; desc="Upcoming exhibition 1"},
    @{new="exhibition-5.jpg"; desc="Upcoming exhibition 2"},
    @{new="exhibition-6.jpg"; desc="Upcoming exhibition 3"},
    @{new="exhibition-past-1.jpg"; desc="Past exhibition"},
    @{new="exhibition-past-2.jpg"; desc="Past exhibition"},
    @{new="exhibition-past-3.jpg"; desc="Past exhibition"},
    @{new="exhibition-past-4.jpg"; desc="Past exhibition"},
    @{new="exhibition-past-5.jpg"; desc="Past exhibition"},
    @{new="exhibition-past-6.jpg"; desc="Past exhibition"},
    
    # Artists (12 portraits)
    @{new="artist-sarah-chen.jpg"; desc="Portrait of Sarah Chen"},
    @{new="artist-marcus-williams.jpg"; desc="Portrait of Marcus Williams"},
    @{new="artist-elena-rodriguez.jpg"; desc="Portrait of Elena Rodriguez"},
    @{new="artist-david-park.jpg"; desc="Portrait of David Park"},
    @{new="artist-kenji-tanaka.jpg"; desc="Portrait of Kenji Tanaka"},
    @{new="artist-jennifer-liu.jpg"; desc="Portrait of Jennifer Liu"},
    @{new="artist-antonio-ramirez.jpg"; desc="Portrait of Antonio Ramirez"},
    @{new="artist-kimberly-washington.jpg"; desc="Portrait of Kimberly Washington"},
    @{new="artist-thomas-nguyen.jpg"; desc="Portrait of Thomas Nguyen"},
    @{new="artist-maria-santos.jpg"; desc="Portrait of Maria Santos"},
    @{new="artist-rachel-kim.jpg"; desc="Portrait of Rachel Kim"},
    @{new="artist-omar-hassan.jpg"; desc="Portrait of Omar Hassan"},
    
    # Artworks (3 images)
    @{new="artwork-chen-1.jpg"; desc="Artwork by Sarah Chen"},
    @{new="artwork-chen-2.jpg"; desc="Artwork by Sarah Chen"},
    @{new="artwork-chen-3.jpg"; desc="Artwork by Sarah Chen"},
    
    # About Page (1 image)
    @{new="about-gallery-space.jpg"; desc="Historic or current gallery space"},
    
    # Team Members (4 images)
    @{new="team-rebecca-martinez.jpg"; desc="Portrait of Rebecca Martinez"},
    @{new="team-james-thompson.jpg"; desc="Portrait of James Thompson"},
    @{new="team-lisa-chen.jpg"; desc="Portrait of Lisa Chen"},
    @{new="team-michael-johnson.jpg"; desc="Portrait of Michael Johnson"}
)

Write-Host "===== AUTOMATIC RENAMING (first $($imageMap.Count) images) ====="
Write-Host ""

# Automatically rename the first N images to match the map
for ($i = 0; $i -lt [Math]::Min($images.Count, $imageMap.Count); $i++) {
    $oldPath = $images[$i].FullName
    $newName = $imageMap[$i].new
    $newPath = Join-Path $photosDir $newName
    $desc = $imageMap[$i].desc
    
    if (Test-Path $newPath) {
        Write-Host "SKIP: $newName already exists" -ForegroundColor Yellow
    } else {
        try {
            Copy-Item $oldPath $newPath
            Write-Host "COPIED: $($images[$i].Name) -> $newName ($desc)" -ForegroundColor Green
        } catch {
            Write-Host "ERROR copying $($images[$i].Name): $_" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "===== RENAMING COMPLETE ====="
Write-Host ""
Write-Host "Total required images: $($imageMap.Count)"
Write-Host "Total WhatsApp images available: $($images.Count)"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Review the renamed images in the Photos folder"
Write-Host "2. Delete the original WhatsApp images if everything looks good"
Write-Host "3. Make adjustments if needed"
