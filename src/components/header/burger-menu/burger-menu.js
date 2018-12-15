import $ from 'jquery';

window.j$ = $;

// const hamburgerButtonCls = '#aside_mobile__button';
// const hamburgerMenuCls = '.aside-burger-menu';
// const hamburgerMenuOpenedClass = 'burger-menu--closed';
// const hamburgerButtonCloseClass = 'burger-menu__button--close';
const selectorsEl = {
    leftMenu: {
        hamburgerButtonCls: '#aside_mobile__button',
        hamburgerMenuCls: '.aside-burger-menu',
        hamburgerMenuOpenedClass: 'burger-menu--closed',
        hamburgerButtonCloseClass: 'burger-menu__button--close'
    },
		leftMenu_v2: {
			hamburgerButtonCls: '.js_collapse-sidebar',
			hamburgerMenuCls: '.aside-burger-menu',
			hamburgerMenuOpenedClass: 'burger-menu--closed',
			hamburgerButtonCloseClass: 'collapse-sidebar__button--close'
		},
    rightMenu: {
        hamburgerButtonCls: '#header_mobile_toggler',
        hamburgerMenuCls: '.r-side-burger-menu',
        hamburgerMenuOpenedClass: 'r-side-burger-menu--open',
        hamburgerButtonCloseClass: 'burger-menu-right__button--close'
    },
    subHeader: {
        hamburgerButtonCls: '#header_mobile_topbar_toggler',
        hamburgerMenuCls: '.sub-header',
        hamburgerMenuOpenedClass: 'sub-header--open',
        hamburgerButtonCloseClass: 'sub-header-button--close'
    }
};

/**
 * Toggle hamburger menu popover
 */
function toggleHamburgerMenu(menuName) {
    const {hamburgerMenuCls, hamburgerButtonCls, hamburgerButtonCloseClass, hamburgerMenuOpenedClass} = selectorsEl[menuName];
    $(hamburgerButtonCls).toggleClass(hamburgerButtonCloseClass);
    $(hamburgerMenuCls).toggleClass(hamburgerMenuOpenedClass);

    if($(hamburgerButtonCls).hasClass(hamburgerButtonCloseClass)){
			$('[data-toggle="tooltip"]').tooltip({container: 'html'});
		}
}

/**
 * Init hamburger menu
 */
export function init() {
    const leftMenu = 'leftMenu';
    const rightMenu = 'rightMenu';
    const subHeader = 'subHeader';

    $(selectorsEl[leftMenu].hamburgerButtonCls).on('click', toggleHamburgerMenu.bind(this, leftMenu));
    $(selectorsEl[rightMenu].hamburgerButtonCls).on('click', toggleHamburgerMenu.bind(this, rightMenu));
    $(selectorsEl[subHeader].hamburgerButtonCls).on('click', toggleHamburgerMenu.bind(this, subHeader));

		$(selectorsEl['leftMenu_v2'].hamburgerButtonCls).on('click', function(e){
			toggleHamburgerMenu('leftMenu_v2');
		});

		//initialize all tooltips on a page
		// $('[data-toggle="tooltip"]').tooltip();
}
