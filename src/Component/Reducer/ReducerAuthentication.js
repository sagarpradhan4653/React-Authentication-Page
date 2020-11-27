

export default function ReducerAuthentication(state = {}, action) {
    switch (action.type) {
        case 'AUTH_SUCCES': {
            const { idToken, expiresIn } = action.payload
            const authDetails = {
                tokenKey: idToken,
                expireTime: new Date((new Date().getTime() + (expiresIn * 1000)))

            }
            localStorage.setItem('TokenKey', authDetails.tokenKey)
            localStorage.setItem('ExpireDate', authDetails.expireTime)
            return authDetails
        }

        case 'AUTH_START': {
            const authState = { tokenKey: null, expireTime: '' }
            authState.tokenKey = localStorage.getItem('TokenKey') ? localStorage.getItem('TokenKey') : null
            authState.expireTime = localStorage.getItem('ExpireDate') ? new Date(localStorage.getItem('ExpireDate')) : ''
            if (authState.expireTime != '') {
                const currDate = new Date()
                if (currDate < authState.expireTime) {
                    return authState
                } else {
                    localStorage.clear()
                    return { tokenKey: null, expireTime: '' }
                }
            }
            return authState
        }



        case 'DONE_LOGOUT': {
            return { tokenKey: null, expireTime: '' }
        }
        default: {
            return state
        }

    }

} 