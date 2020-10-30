const initState = {
    projects: [
        {id: '1', title: 'What do you wanna do in life?', content: 'Become a top developer'},
        {id: '2', title: 'What is your dream location?', content: 'Orlando, Florida'},
        {id: '3', title: 'Will you ever keep a pet?', content: 'Ofc, I would love to.'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer