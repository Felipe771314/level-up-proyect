const componentType = {
    ATOMS: 'atoms',
    MOLESCULES: 'molecules'
}

const componentFolder = {
    [componentType.ATOMS]: 'atoms',
    [componentType.MOLESCULES]: 'molecules'
}

const storyPath = {
    [componentType.ATOMS]: 'Atoms',
    [componentType.MOLESCULES]: 'Molecules'
}

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Enter the component name',
            },
            {
                type: 'list',
                choices: Object.values(componentType),
                name: 'componentType',
                message: 'Enter the type of the component'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/ui/{{componentFolder componentType}}/{{name}}',
                templateFiles: 'plop-templates/component',
                base: 'plop-templates/component/*hbs'
            }
        ]
    })
    plop.setHelper('componentFolder', componentType => componentFolder[componentType]);
    plop.setHelper('storyPath', componentType => storyPath[componentType]);
};
