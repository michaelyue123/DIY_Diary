
const validEmailRegex =
    RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const validUsernameRegex = RegExp(/^[A-Z][A-Za-z]+( [A-Za-z]+)+$/);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 &&
            (valid = false)
    );
    return valid;
}

export { validEmailRegex, validateForm, validUsernameRegex };