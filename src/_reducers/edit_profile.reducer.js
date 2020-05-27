import { userConstants } from "../_constants";

const initialState = {
    target_user:{
      id: '',
      name: '',
      email: '',
      password: '',
      phone: '',
      addressStreet: '',
      addressSurburb: '',
      addressPostcode: '',
      addressState: ''
    }
  };

export const editProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.DETAIL:
          return {
            target_user: action.user
        };
        default:
          return state
    }
}