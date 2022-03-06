import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
    CLEAR_SEARCH,
    IS_RESULTS,
} from "./actions";

export const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    loading: true,
    hits: [],
    numbPages: "",
    page: 0,
    query: "",
    isResults: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async (url) => {
        dispatch({ type: SET_LOADING });
        try {
            const response = await fetch(url);
            const data = await response.json();
            const filteredData = data.hits.filter((story) => {
                return story.title && story.url;
            });
            if (filteredData.length === 0) {
                dispatch({ type: IS_RESULTS, payload: false });
            } else {
                dispatch({
                    type: SET_STORIES,
                    payload: {
                        hits: data.hits,
                        numbPages: data.nbPages,
                        page: data.page,
                    },
                });
                dispatch({ type: IS_RESULTS, payload: true });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const hideStory = (id) => dispatch({ type: REMOVE_STORY, payload: id });
    const handleSearch = (query) =>
        dispatch({ type: HANDLE_SEARCH, payload: query });
    const clearSearch = () => dispatch({ type: CLEAR_SEARCH });
    const handlePage = (nextPageNumb) =>
        dispatch({ type: HANDLE_PAGE, payload: nextPageNumb });

    useEffect(() => {
        fetchData(
            `${API_ENDPOINT}query=${state.query}&hitsPerPage=8&page=${state.page}`
        );
    }, [state.query, state.page]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                hideStory,
                handleSearch,
                clearSearch,
                handlePage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
