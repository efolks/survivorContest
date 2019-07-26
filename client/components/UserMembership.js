import React from 'react'
import UserMembershipAlive from './UserMembershipAlive'

const UserMembership = props => {
  const {membership} = props
  const {survivorPick, survivorContest} = membership
  const {pick, opponent} = survivorPick
  return (
    <div>
      <h3>{survivorContest.name}</h3>
      {membership.alive ? (
        <UserMembershipAlive membership={membership} />
      ) : (
        <h2>You bit the dust</h2>
      )}
    </div>
  )
}

export default UserMembership
