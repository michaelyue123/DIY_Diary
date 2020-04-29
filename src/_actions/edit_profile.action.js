import { userConstants } from '../_constants';

// Action creator for profile editing
export const changeName = (name) => {
    return {
        type: userConstants.NAME,
        name
    }
}

export const changeEmail = (email) => {
    return {
        type: userConstants.EMAIL,
        email
    }
}

export const changeAddress = (street, suburb, postcode, state) => {
    return {
        type: userConstants.ADDRESS,
        street,
        suburb,
        postcode,
        state
    }
}