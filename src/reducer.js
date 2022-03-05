import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
    CLEAR_SEARCH,
    IS_RESULTS,
} from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: true };

        case SET_STORIES:
            return {
                ...state,
                loading: false,
                hits: action.payload.hits,
                numbPages: action.payload.numbPages,
            };

        case REMOVE_STORY:
            let newStories = state.hits.filter(
                (item) => item.objectID !== action.payload
            );
            return { ...state, hits: newStories };

        case HANDLE_SEARCH:
            return { ...state, page: 0, query: action.payload };

        case CLEAR_SEARCH:
            return { ...state, query: "" };

        case HANDLE_PAGE:
            return { ...state, page: action.payload };

        case IS_RESULTS:
            return { ...state, isResults: action.payload };

        default:
            throw new Error(`'${action.type}' is not a valid action type`);
    }
};
export default reducer;
