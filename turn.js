function turn (dom, change, width, speed) {
	var _dom = dom,
		_change = change,
		_left = _dom.css('left'),
		_width = _dom.css('width');
	if (_dom) {
		if (_change) {
			_change.on('click')
		}
		if (_left && _width) {
			if (_left == _width - width) {
				_dom.css('left',0);
			}else{
				_dom.css('left',_left - 1);
			}
		}
	}
	setTimeout(turn, speed);
}
