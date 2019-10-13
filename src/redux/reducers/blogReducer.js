import {GET_BLOG_SUCCEED} from "../actions/types";

const initialState = {
    data: [],
};

export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BLOG_SUCCEED:
            return { ...state, data: action.data };
        default:
            return state;
    }
}
