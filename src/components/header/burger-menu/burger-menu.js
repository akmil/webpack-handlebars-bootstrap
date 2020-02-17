
const selectorsEl = {
    leftMenu: {
        hamburgerButtonCls: '#aside_mobile__button',
        hamburgerMenuCls: '.aside-burger-menu',
        hamburgerMenuOpenedClass: 'burger-menu--closed',
        hamburgerButtonCloseClass: 'burger-menu__button--close'
    },
    // eslint-disable-next-line camelcase
    leftMenu_v2: {
        hamburgerButtonCls: '.js_collapse-sidebar',
        hamburgerMenuCls: '.aside-burger-menu',
        hamburgerMenuOpenedClass: 'burger-menu--closed',
        hamburgerButtonCloseClass: 'collapse-sidebar__button--close'
    },
    sidebarHeading: {
        hamburgerButtonCls: '.sidebar-heading',
        hamburgerMenuCls: '.js_sidebar-heading-list',
        hamburgerMenuOpenedClass: 'sidebar-heading-list--closed',
        hamburgerButtonCloseClass: 'sidebar-heading__button--close'
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
    const {
        hamburgerMenuCls, hamburgerButtonCls, hamburgerButtonCloseClass, hamburgerMenuOpenedClass
    } = selectorsEl[menuName];
    $(hamburgerButtonCls).toggleClass(hamburgerButtonCloseClass);
    $(hamburgerMenuCls).toggleClass(hamburgerMenuOpenedClass);

    console.log(selectorsEl[menuName]);
    if ($(hamburgerButtonCls).hasClass(hamburgerButtonCloseClass)) {
        $('[data-toggle="tooltip"]').tooltip({ container: 'html' });
    }
}

function init(component) {
    const leftMenu = 'leftMenu';
    const rightMenu = 'rightMenu';
    const subHeader = 'subHeader';
    const plusBtn = 'sidebarHeading'; // todo: move in separate component, right '+' button is bugged

    $(selectorsEl[leftMenu].hamburgerButtonCls, component).on('click', toggleHamburgerMenu.bind(this, leftMenu));
    $(selectorsEl[rightMenu].hamburgerButtonCls, component).on('click', toggleHamburgerMenu.bind(this, rightMenu));
    $(selectorsEl[subHeader].hamburgerButtonCls, component).on('click', toggleHamburgerMenu.bind(this, subHeader));

    // todo: move in separate component
    $(selectorsEl[plusBtn].hamburgerButtonCls).on('click', toggleHamburgerMenu.bind(this, plusBtn));
    $(selectorsEl.leftMenu_v2.hamburgerButtonCls).on('click', e => {
        toggleHamburgerMenu('leftMenu_v2');
    });
}

export default component => {
    console.log('HamburgerMenu', component);
    init(component);
};
