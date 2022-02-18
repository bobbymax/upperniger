export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token && token.token) {
        return {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token.token,
        }
    } else {
        return {}
    }
}