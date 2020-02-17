
// const { $ } = window;
const themeWrapper = document.querySelector('body');

function updateTheme(oldKeyArray, newValue) {
    oldKeyArray.forEach(prop => {
        themeWrapper.style.setProperty(prop, newValue);
    });
}

function init() {
    const colorsToUpdate = ['--cardColor', '--navBackground'];
    const colorsToUpdateMiddle = ['--navSubBackground', '--gray'];
    // eslint-disable-next-line camelcase
    const colorsToUpdateMiddle_hover = ['--green'];
    const colorsToUpdateInverted = ['--navColor'];


    console.log('init');
    $('.dropdown-item', '.js_theme').on('click', function (e) {
        if ($(this).index() === 0) {
            updateTheme(colorsToUpdate, 'var(--blue)');
            updateTheme(colorsToUpdateInverted, 'var(--white)');
            updateTheme(colorsToUpdateMiddle, 'var(--cyan)');
        }

        if ($(this).index() === 1) {
            updateTheme(colorsToUpdate, 'var(--orange)');
            updateTheme(colorsToUpdateInverted, 'var(--dark)');
            updateTheme(colorsToUpdateMiddle, 'var(--yellow)');
            updateTheme(colorsToUpdateMiddle_hover, 'var(--styckyHeading_hover)');
        }

        if ($(this).index() === 2) {
            updateTheme(colorsToUpdate, 'var(--gray-dark)');
            updateTheme(colorsToUpdateInverted, 'var(--primary)');
            updateTheme(colorsToUpdateMiddle, 'var(--gray)');
        }

    });
}

export default component => {
    init();
};
