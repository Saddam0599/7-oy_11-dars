const initialState = {
    token: localStorage.getItem("Token") ? localStorage.getItem("Token") : null,
};

const authReducer = (state = initialState, action) => {
    if (action.type == "login") {
        return {
            ...state,
            token: action.payload,
        };
    } else if (action.type == "logout") {
        return {
            ...state,
            token: null,
        };
    }
    return state;
};

export default authReducer;
