import { userConstants } from '../_constants';

const initialState = true?{
  user:{
    id: 'c0020',
    name: 'Test',
    email: 'test@gmail.com',
    password: '',
    phone: '0410506744',
    addressStreet: '555 Swanston St',
    addressSurburb: 'Carlton',
    addressPostcode: '3053',
    addressState: 'Victoria'
  }
}:{};

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
    case userConstants.NAME:
      return {
        name: action.name
    };
    case userConstants.EMAIL:
      return {
        email: action.email
    };
    case userConstants.ADDRESS:
      return {
        street: action.street, 
        suburb: action.suburb, 
        postcode: action.postcode,
        state: action.state
    };
    default:
      return state
  }
}