# Organize Gallery Images Script
# Maps WhatsApp images to descriptive gallery filenames

$imagesDir = "images"
$images = Get-ChildItem "$imagesDir\WhatsApp*.jpeg" | Sort-Object Name

Write-Host "Found $($images.Count) images to organize"
Write-Host ""

# Define image mapping (strategic placement)
$imageMap = @(
    # Exhibitions (12 images)
    @{new="exhibition-featured.jpg"; desc="Featured exhibition"},
    @{new="exhibition-current-1.jpg"; desc="Current exhibition 1"},
    @{new="exhibition-current-2.jpg"; desc="Current exhibition 2"},
    @{new="exhibition-current-3.jpg"; desc="Current exhibition 3"},
    @{new="exhibition-upcoming-1.jpg"; desc="Upcoming exhibition 1"},
    @{new="exhibition-upcoming-2.jpg"; desc="Upcoming exhibition 2"},
    @{new="exhibition-upcoming-3.jpg"; desc="Upcoming exhibition 3"},
    @{new="exhibition-past-1.jpg"; desc="Past exhibition 1"},
    @{new="exhibition-past-2.jpg"; desc="Past exhibition 2"},
    @{new="exhibition-past-3.jpg"; desc="Past exhibition 3"},
    @{new="exhibition-past-4.jpg"; desc="Past exhibition 4"},
    @{new="exhibition-past-5.jpg"; desc="Past exhibition 5"},
    
    # Events (8 images)
    @{new="event-opening.jpg"; desc="Opening reception"},
    @{new="event-artist-talk.jpg"; desc="Artist talk"},
    @{new="event-gallery-tour.jpg"; desc="Gallery tour"},
    @{new="event-workshop.jpg"; desc="Workshop"},
    @{new="event-panel.jpg"; desc="Panel discussion"},
    @{new="event-family-day.jpg"; desc="Family day"},
    @{new="event-first-friday.jpg"; desc="First Friday"},
    @{new="event-open-studio.jpg"; desc="Open studio"},
    
    # Artists/Artworks (20 images - portraits and artworks)
    @{new="artist-portrait-1.jpg"; desc="Artist portrait 1"},
    @{new="artist-portrait-2.jpg"; desc="Artist portrait 2"},
    @{new="artist-portrait-3.jpg"; desc="Artist portrait 3"},
    @{new="artist-portrait-4.jpg"; desc="Artist portrait 4"},
    @{new="artist-portrait-5.jpg"; desc="Artist portrait 5"},
    @{new="artist-portrait-6.jpg"; desc="Artist portrait 6"},
    @{new="artist-portrait-7.jpg"; desc="Artist portrait 7"},
    @{new="artist-portrait-8.jpg"; desc="Artist portrait 8"},
    @{new="artist-portrait-9.jpg"; desc="Artist portrait 9"},
    @{new="artist-portrait-10.jpg"; desc="Artist portrait 10"},
    @{new="artist-portrait-11.jpg"; desc="Artist portrait 11"},
    @{new="artist-portrait-12.jpg"; desc="Artist portrait 12"},
    @{new="artwork-1.jpg"; desc="Artwork 1"},
    @{new="artwork-2.jpg"; desc="Artwork 2"},
    @{new="artwork-3.jpg"; desc="Artwork 3"},
    @{new="artwork-4.jpg"; desc="Artwork 4"},
    @{new="artwork-5.jpg"; desc="Artwork 5"},
    @{new="artwork-6.jpg"; desc="Artwork 6"},
    @{new="artwork-7.jpg"; desc="Artwork 7"},
    @{new="artwork-8.jpg"; desc="Artwork 8"},
    
    # About/Gallery Space (5 images)
    @{new="gallery-space.jpg"; desc="Gallery space interior"},
    @{new="team-director.jpg"; desc="Director portrait"},
    @{new="team-curator.jpg"; desc="Curator portrait"},
    @{new="team-education.jpg"; desc="Education director portrait"},
    @{new="team-programs.jpg"; desc="Programs coordinator portrait"}
)

# Copy and rename images
$count = 0
foreach ($mapping in $imageMap) {
    if ($count -lt $images.Count) {
        $oldPath = $images[$count].FullName
        $newName = $mapping.new
        $newPath = Join-Path $imagesDir $newName
        $desc = $mapping.desc
        
        if (Test-Path $newPath) {
            Write-Host "SKIP: $newName already exists" -ForegroundColor Yellow
        } else {
            try {
                Copy-Item $oldPath $newPath
                Write-Host "COPIED: $($images[$count].Name) -> $newName ($desc)" -ForegroundColor Green
            } catch {
                Write-Host "ERROR copying: $_" -ForegroundColor Red
            }
        }
        $count++
    }
}

Write-Host ""
Write-Host "===== ORGANIZATION COMPLETE ====="
Write-Host "Organized $count images with descriptive names"
Write-Host "Original WhatsApp images remain in folder"
