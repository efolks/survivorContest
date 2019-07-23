import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'
import AllUserMemberships from './AllUserMemberships'

const UserHome = props => {
  const [userMemberships, setUserMemberships] = useState([])

  useEffect(() => {
    const fetchMemberships = async () => {
      const {data} = await axios.get('/api/users/memberships')
      setUserMemberships(data)
    }
    fetchMemberships()
  }, [])

  const email = props.email

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <AllUserMemberships memberships={userMemberships} />
    </div>
  )
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
