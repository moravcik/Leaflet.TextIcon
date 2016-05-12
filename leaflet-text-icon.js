(function () {

	L.TextIcon = L.Icon.extend({
		options: L.extend({
			className: 'leaflet-div-icon',
			getIconUrl: function(color) {
				//if (L.Browser.retina) - use 2x version
				return '/images/marker-hole-'+ (color || 'blue') +'.svg' 
			}
		}, new L.Icon.Default().options),

	 	initialize: function(options) {
	 		L.extend(options, {
	 			shadowUrl: L.Icon.Default.imagePath + '/marker-shadow.png'
	 		});
	 		L.setOptions(this, options);
	 		var iconUrl = this.options.getIconUrl(this.options.color);
	 		this._iconImg = this._createImg(iconUrl);
	 	},
		createIcon: function() {
			var textDiv = document.createElement('div');
			textDiv.className = 'icon-text';
			textDiv.innerHTML = this.options.text || '';

			var div = document.createElement('div');
			div.appendChild(this._iconImg);
			div.appendChild(textDiv);

			this._setIconStyles(div, 'icon');
			this._textDiv = textDiv;
			return div;
		},
		setColor: function(color) {
			this._iconImg.src = this.options.getIconUrl(color);
		},
		setText: function(text) {
			this._textDiv.innerHTML = text || '';
		}
	});

}());
