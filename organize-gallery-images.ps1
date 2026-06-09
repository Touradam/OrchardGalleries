# Organize Gallery Images Script
# Maps WhatsApp images to descriptive gallery filenames

param(
    [switch]$Overwrite,
    [string]$DateFilter = "2026-06-09"
)

$imagesDir = "images"
$allWhatsAppImages = Get-ChildItem "$imagesDir\WhatsApp*.jpeg"
$images = $allWhatsAppImages |
    Where-Object { $_.Name -like "*$DateFilter*" } |
    Sort-Object Name

Write-Host "Found $($images.Count) images to organize (filter: $DateFilter)"
Write-Host ""

# Define image mapping (matches gallery.js and site pages)
$imageMap = @(
    @{new="hero-main.jpg"; desc="Gallery hero"},
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
    @{new="event-opening.jpg"; desc="Opening reception"},
    @{new="event-artist-talk.jpg"; desc="Artist talk"},
    @{new="event-gallery-tour.jpg"; desc="Gallery tour"},
    @{new="event-workshop.jpg"; desc="Workshop"},
    @{new="event-panel.jpg"; desc="Panel discussion"},
    @{new="event-family-day.jpg"; desc="Family day"},
    @{new="event-first-friday.jpg"; desc="First Friday"},
    @{new="event-open-studio.jpg"; desc="Open studio"},
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
    @{new="gallery-space.jpg"; desc="Gallery space interior"},
    @{new="gallery-interior-1.jpg"; desc="Gallery interior 1"},
    @{new="gallery-showroom.jpg"; desc="Empty exhibition showroom"}
)

# Explicit source overrides for images that should not follow sort order
$sourceOverrides = @{
    "hero-main.jpg" = "WhatsApp Image 2026-06-06 at 6.19.07 PM (2).jpeg"
    "gallery-showroom.jpg" = "WhatsApp Image 2026-06-09 at 12.59.58 PM (1).jpeg"
}

# Copy and rename images
$count = 0
$usedSources = @{}
foreach ($source in $sourceOverrides.Values) {
    $usedSources[$source] = $true
}

foreach ($mapping in $imageMap) {
    $newName = $mapping.new
    $newPath = Join-Path $imagesDir $newName
    $desc = $mapping.desc

    if ($sourceOverrides.ContainsKey($newName)) {
        $sourceName = $sourceOverrides[$newName]
        $sourceFile = $allWhatsAppImages | Where-Object { $_.Name -eq $sourceName } | Select-Object -First 1
        if (-not $sourceFile) {
            Write-Host "MISSING: source override not found for $newName ($sourceName)" -ForegroundColor Red
            continue
        }
        $oldPath = $sourceFile.FullName
    } else {
        while ($count -lt $images.Count -and $usedSources.ContainsKey($images[$count].Name)) {
            $count++
        }
        if ($count -ge $images.Count) { break }
        $oldPath = $images[$count].FullName
        $usedSources[$images[$count].Name] = $true
        $count++
    }

    if ((Test-Path $newPath) -and -not $Overwrite) {
        Write-Host "SKIP: $newName already exists" -ForegroundColor Yellow
    } else {
        try {
            Copy-Item $oldPath $newPath -Force
            Write-Host "COPIED: $(Split-Path $oldPath -Leaf) -> $newName ($desc)" -ForegroundColor Green
        } catch {
            Write-Host "ERROR copying: $_" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "===== ORGANIZATION COMPLETE ====="
Write-Host "Organized $count images with descriptive names"
Write-Host "Original WhatsApp images remain in folder"
