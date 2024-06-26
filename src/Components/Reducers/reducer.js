export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]};
        case 'GET_LIST':
            return {...state, data: action.payload};
        case 'GET_SELECTED':
            return {...state, doctorSelected: action.payload};
        case 'CHANGE_THEME':
            return {...state, theme: action.payload}
    }
}