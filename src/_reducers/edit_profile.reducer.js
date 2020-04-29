import { userConstants } from "../_constants";

export const editProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.NAME:
          return {
            user: action.user
        };
        case userConstants.EMAIL:
          return {
            user: action.user
        };
        case userConstants.ADDRESS:
          return {
            user: action.user,
        };
        default:
          return state
    }
}