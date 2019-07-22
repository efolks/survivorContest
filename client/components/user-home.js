import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor() {
    super()
    this.state = {
      userMemberships: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/users/memberships')
    this.setState({userMemberships: data})
    console.log('STATE:', this.state)
  }

  render() {
    const email = this.props.email
    return (
      <div>
        <h3>Welcome, {email}</h3>
        {}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
