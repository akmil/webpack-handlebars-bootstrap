const themeWrapper = document.querySelector('body');

$('.dropdown-item', '.js_theme').on('click', function(e){
	// const elBtn = $(this);

	if ($(this).index() === 0) {
		console.log('Theme 2');
		const blueColor = 'var(--blue)';
		themeWrapper.style.setProperty('--cardColor', blueColor);
		themeWrapper.style.setProperty('--navBackground', blueColor);
	}

	if ($(this).index() === 1) {
		const orangeColor = 'var(--orange)';
		themeWrapper.style.setProperty('--cardColor', orangeColor);
		themeWrapper.style.setProperty('--navBackground', orangeColor);
	}

	if ($(this).index() === 2) {
		const greenColor = 'var(--green)';
		themeWrapper.style.setProperty('--cardColor', greenColor);
		themeWrapper.style.setProperty('--navBackground', greenColor);
	}

});
