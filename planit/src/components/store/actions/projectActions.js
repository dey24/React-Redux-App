export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Cj',
            authorLastName: 'Dey',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type : 'CREATE_PROJECT'});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR'}, err);
        });
        
    }
};

export default createProject