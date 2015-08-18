Utils = {
	// returns 'white' if color represented by hexstring is less than half of the value between 0 and 0xFFFFFF, returns 'black' otherwise
	colorConstrast: function(hexstring) {
		return (parseInt(hexstring, 16) < 0xFFFFFF / 2) ? '#FFFFFF' : '#000000';
	}
}
