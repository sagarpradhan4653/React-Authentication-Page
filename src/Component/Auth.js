import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'



class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUp: true
        }

    }
    componentDidMount() {
        if (this.props.sendToAuth) {
            this.props.history.push('/dashboard')
        }
    }



    // get the email and password through input box
    passEmailAndPassword = evt => {
        evt.preventDefault()
        const authUrl = this.state.signUp ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQOrzUzk3Y6A6Ccmwskm4g9tnxWwOAP_E' : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQOrzUzk3Y6A6Ccmwskm4g9tnxWwOAP_E'
        const credentials = {
            email: evt.currentTarget['email'].value,
            password: evt.currentTarget['pass'].value,
            returnSecureToken: true
        }
        axios.post(authUrl, credentials)
            .then(res => {
                this.props.moveState(res.data)
                this.props.history.push('/Dashboard')
            })
    }





    render() {
        console.log(this.props.state, 'details');
        return (
            <>

                <h2>{this.state.signUp ? 'SignUp' : 'SignIn'}</h2>
                <button onClick={() => { this.setState({ signUp: true }) }}>SignUp</button>
                <button onClick={() => { this.setState({ signUp: false }) }}>SignIn</button>
                <form onSubmit={this.passEmailAndPassword}>
                    <input name="email" type="text" placeholder="Email"></input>
                    <input name="pass" type="password" placeholder="Password"></input>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        state,
        sendToAuth: state.userDetails.tokenKey != null ? true : false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveState: (val) => dispatch({ type: 'AUTH_SUCCES', payload: val })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)