// loads all dynamic modules on the page
export default async function dynamicModuleLoader(modules) {
    const attributeName = 'data-controller';

    const elements = Array.from(
        document.querySelectorAll(`[${attributeName}]`)
    );

    elements.forEach((element, index, arr) => {
        const chunkName = element.getAttribute(attributeName);

        if (modules[chunkName]) {
            modules[chunkName]()
                .then(module => {
                    module.default(element, index, arr.length);
                })
                .catch(err => console.log(err));
        } else {
            console.error('chunk name:', chunkName, 'was not found');
        }
    });
}
