import { userConstants } from '../_constants';

const initialState = {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        user: action.user
      };
    case userConstants.REGISTER_REQUEST:
      return {
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        user: action.user,
        role: action.role
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        user: action.user,
        role: action.role
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}