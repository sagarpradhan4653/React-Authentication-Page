import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dashData: []
        }
    }

    componentDidMount() {
        if (!this.props.sendToAuth) {
            this.props.history.push('/Auth')

        } else {
            axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
                .then(response => {
                    this.setState({ dashData: response.data })
                })
        }
    }

    render() {
        return (
            <div>
                User Details:
                <ul>
                    {this.state.dashData.map((item, index) => {
                        return <li key={index}>{item.email}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sendToAuth: state.userDetails.tokenKey != null ? true : false
    }
}


export default connect(mapStateToProps)(Dashboard)
