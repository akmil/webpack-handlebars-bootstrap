// set import functions for all dynamic modules
const basics = {
    // formDropdown: () => import(
    //     /* webpackChunkName: "FormDropdown" */ "../../../components/00-white-label/01-basics/form-dropdown/form-dropdown.js"
    // ),
    // formPassword: () => import(
    //     /* webpackChunkName: "FormPassword" */ "../../../components/00-white-label/01-basics/form-password/form-password.js"
    // ),
    // formSearchField: () => import(
    //     /* webpackChunkName: "FormSearchField" */ "../../../components/00-white-label/01-basics/form-search-field/form-search-field.js"
    // ),
    // formDatepicker: () => import(
    //     /* webpackChunkName: "FormDatepicker" */ "../../../components/00-white-label/01-basics/form-datepicker/form-datepicker.js"
    // ),
    // formTelInput: () => import(
    //     /* webpackChunkName: "FormTelInput" */ "../../../components/00-white-label/01-basics/form-tel-input/form-tel-input.js"
    // ),
    // buttonThemed: () => import(
    //     /* webpackChunkName: "ButtonThemed" */ "../../../components/00-white-label/01-basics/button-themed/button-themed.js"
    // )
};

const elements = {
    // sortBy: () => import(
    //     /* webpackChunkName: "SortBy" */ "../../../components/00-white-label/02-elements/sort-by/sort-by.js"
    // ),
    // productTile: () => import(
    //     /* webpackChunkName: "ProductTile" */ "../../../components/00-white-label/02-elements/product-tile/product-tile.js"
    // ),
};

const components = {
    header: () => import(
        /* webpackChunkName: "Header" */ '../../components/header/header.js'
    ),
    burgerMenu: () => import(
        /* webpackChunkName: "BurgerMenu" */ '../../components/header/burger-menu/burger-menu.js'
    ),
    // badges: () => import(
    //     /* webpackChunkName: "Badges" */ "../../../components/00-white-label/03-modules/badges/badges.js"
    // ),
    // modal: () => import(
    //     /* webpackChunkName: "Modal" */ "../../../components/00-white-label/03-modules/modal/modal.js"
    // ),
    // carouselContainer: () => import(
    //     /* webpackChunkName: "CarouselContainer" */ "../../../components/00-white-label/03-modules/carousel-container/carousel-container.js"
    // ),
    // cookieBanner: () => import(
    //     /* webpackChunkName: "CookieBanner" */ "../../../components/01-dewalt/03-modules/cookie-banner/cookie-banner.js"
    // ),
    // uploadButton: () => import(
    //     /* webpackChunkName: "UploadButton" */ "../../../components/00-white-label/01-basics/upload-button/upload-button.js"
    // ),
    // stepperContainer: () => import(
    //     /* webpackChunkName: "StepperContainer" */ "../../../components/00-white-label/03-modules/stepper-container/stepper-container.js"
    // ),
    // filterList: () => import(
    //     /* webpackChunkName: "FilterList" */ "../../../components/00-white-label/03-modules/filter-list/filter-list.js"
    // ),
    // productVariants: () => import(
    //     /* webpackChunkName: "ProductVariants" */ "../../../components/00-white-label/03-modules/product-variants/product-variants.js"
    // ),
    // tabContainer: () => import(
    //     /* webpackChunkName: "TabContainer" */ "../../../components/00-white-label/03-modules/tab-container/tab-container.js"
    // ),
    // gallery: () => import(
    //     /* webpackChunkName: "Gallery" */ "../../../components/00-white-label/03-modules/gallery/gallery.js"
    // ),
    // responsiveTable: () => import(
    //     /* webpackChunkName: "ResponsiveTable" */ "../../../components/00-white-label/03-modules/responsive-table/responsive-table.js"
    // ),
    // accordionContainer: () => import(
    //     /* webpackChunkName: "AccordionContainer" */ "../../../components/00-white-label/03-modules/accordion-container/accordion-container.js"
    // ),
    // promotionalBanner: () => import(
    //     /* webpackChunkName: "PromotionalBanner" */ "../../../components/00-white-label/03-modules/promotional-banner/promotional-banner.js"
    // ),
    // footer: () => import(
    //     /* webpackChunkName: "Footer" */ "../../../components/00-white-label/03-modules/footer/footer.js"
    // ),
    // megaMenu: () => import(
    //     /* webpackChunkName: "MegaMenu" */ "../../../components/00-white-label/03-modules/mega-menu/mega-menu.js"
    // ),
    // globalLanguageSelection: () => import(
    //     /* webpackChunkName: "GlobalLanguageSelection" */ "../../../components/00-white-label/03-modules/global-language-selection/global-language-selection.js"
    // ),
    // findRetailer: () => import(
    //     /* webpackChunkName: "FindRetailer" */ "../../../components/00-white-label/03-modules/find-retailer/find-retailer.js"
    // )
};

const someThirdParty = {
};

const basicLib = {
    ...basics, ...elements, ...components, ...someThirdParty
};

export default basicLib;
