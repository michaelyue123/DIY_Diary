
const fakeAuth = {
    isAuthenticated: false,

    login(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 500)
    },
    logout(cb) {
        this.authenticated = false
        setTimeout(cb, 500)
    }
}

export default fakeAuth;