const initState = {
    projects: [
        {id: '1', title: 'RexAffects', content: 'ECommerce platform for original art prints and crypto.'},
        {id: '2', title: 'Ozark Pepper Co', content: 'Ecommerce and promotional site for local pepper company.'},
        {id: '3', title: 'Jonteal', content: 'Promotional site for musician, ecommerce, tour dates, and merch.'}
    ] 
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default: 
            return state;
    }
}

export default projectReducer;