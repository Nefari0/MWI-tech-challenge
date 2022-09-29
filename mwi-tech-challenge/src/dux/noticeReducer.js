const initialState = {
    notice:null
};

const SEND_NOTICE = 'SEND_NOTICE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export function setMessage(msg) {
    return {
        type:SEND_NOTICE,
        payload:msg
    }
};

export function clearMessage() {
    return {
        type:CLEAR_MESSAGE,
        payload:null
    }
}

export default function noticeReducter(state = initialState, action) {
    switch (action.type) {
        case SEND_NOTICE:
            return {
                ...state,
                notice:action.payload
            };
        case CLEAR_MESSAGE:
            return {
                ...state,
                notice:action.payload
            };
        default:
            return state;
    };
};