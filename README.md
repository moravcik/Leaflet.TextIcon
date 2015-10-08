# leaflet-text-icon
Custom icon for Leaflet with dynamic text

Adapted from: https://gist.github.com/comp615/2288108

## Usage

Install with bower: `bower install Leaflet.TextIcon`

Link script and css into html (or use wiredep):

```
<link rel="stylesheet" href="bower_components/Leaflet.TextIcon/leaflet-text-icon.css" />
<script src="bower_components/Leaflet.TextIcon/leaflet-text-icon.js"></script>
```

Create marker with `L.TextIcon`:

```
var icon = new L.TextIcon({ text: '12', color: 'red' });
var marker = L.marker([lat, lng], { icon: icon }).addTo(map);
```

### Options

- **color** base color of icon; available values: `blue` (default), `green`, `red`
- **text** text to display inside marker icon; alhough not restricted, should not be longer than 2 characters
- other leaflet icon options; icon and shadow URLs are ignored
 
### Methods

- **setColor(color)** change icon base color; one of `blue`, `green`, `red`
- **setText(text)** change icon text

```
marker.options.icon.setColor('green');
marker.options.icon.setText('21');
```

## [Demo](http://moravcik.github.io/Leaflet.TextIcon/)
