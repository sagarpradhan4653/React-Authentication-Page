import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const customStyle = {
    marginLeft: {
        marginLeft: '80%'
    },
    padMe: {
        padding: '5px'
    }

}

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div style={customStyle.marginLeft}>
                    {!this.props.haveAuth && < Link style={customStyle.padMe} to="/Auth">Authentication</Link>}
                    {<Link style={customStyle.padMe} to="/Dashboard">Dashboard</Link>}
                    {this.props.haveAuth && <Link style={customStyle.padMe} to="/Logout">Logout</Link>}

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        haveAuth: state.userDetails.tokenKey != null ? true : false
    }
}

export default connect(mapStateToProps)(withRouter(Header))
