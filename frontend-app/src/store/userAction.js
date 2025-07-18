import { loginSuccess, setUser, updateUserName } from '../store/userSlice';

export const getProfile = (token) => async (dispatch) => {
    const profileResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    const profileData = await profileResponse.json();

    if (!profileResponse.ok) {
        throw new Error(profileData.message || 'Failed to fetch profile');
    }

    dispatch(setUser(profileData.body));
}
export const authenticated = (username, password) => async (dispatch) => {
    const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: username,
            password: password,
        }),
    });

    const loginData = await loginResponse.json();

    if (!loginResponse.ok) {
        throw new Error(loginData.message || 'Login failed');
    }

    const token = loginData.body.token;
    dispatch(loginSuccess({ token }));
    return token
}

export const updateUser = (newUserName, token) => async (dispatch) => {
    console.log(token)
    const loginResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            userName: newUserName,
        }),
    });
    dispatch(updateUserName(newUserName));
}