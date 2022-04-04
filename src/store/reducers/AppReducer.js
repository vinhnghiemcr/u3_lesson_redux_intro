const initialState = {
    apploading: false
}

const AppReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'TOGGLE_APP_LOADING':
            return {...state, apploading: action.payload}
        default:
        return {...state}
    }
}

export default AppReducer