import React from 'react'
import UserMembership from './UserMembership'

const allUserMemberships = props => {
  const {memberships} = props

  return (
    <div>
      {memberships.map(membership => {
        return <UserMembership key={membership.id} membership={membership} />
      })}
    </div>
  )
}

export default allUserMemberships
