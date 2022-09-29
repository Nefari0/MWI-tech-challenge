const initialState = {
    isLoading:false
};

const SET_SPINNER = 'SET_SPINNER';

export function setSpinner(param) {
    return {
        type:SET_SPINNER,
        payload:param
    }
};

export default function isLoadingReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SPINNER:
            return {
                ...state,
                isLoading:action.payload
            };
        default:
            return state;
    }
}