import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  CLEAR_SEARCH
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  loading: true,
  hits:[],
  numbPages: '',
  page:0,
  query:''
}

const AppContext = React.createContext()





const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const fetchData = async(url) => {
   dispatch({type: SET_LOADING});
   try {
     const response = await fetch(url);
     const data = await response.json();
     console.log(data);
     dispatch({type:SET_STORIES, payload: {hits: data.hits, numbPages: data.nbPages, page: data.page }})
   } catch (error) {
     console.log(error);
   }
  }

  const hideStory = id => dispatch({type: REMOVE_STORY, payload: id});
  const handleSearch = query => dispatch({type: HANDLE_SEARCH, payload:query});
  const clearSearch = () => dispatch({type: CLEAR_SEARCH});
  const handlePage = nextPageNumb => dispatch({type: HANDLE_PAGE, payload: nextPageNumb});
  
   
  useEffect(()=>{
    fetchData(`${API_ENDPOINT}query=${state.query}&hitsPerPage=8&page=${state.page}`);
  },[state.query, state.page]);


  return <AppContext.Provider value={{...state, hideStory, handleSearch, clearSearch, handlePage}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
