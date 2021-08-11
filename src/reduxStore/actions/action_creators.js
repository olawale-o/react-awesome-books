import { ADD_BOOK } from "./action_types"

export const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload,    
  }
};