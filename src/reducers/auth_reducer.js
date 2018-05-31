import { LOAD_AUTH, CHECK_AUTH } from "../actions";
const initialState = null;

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_AUTH:
            return action.auth;

        case CHECK_AUTH:
            return action.auth;

        default:
            return state;
    }
}

export default auth;