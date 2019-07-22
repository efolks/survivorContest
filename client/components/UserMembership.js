import React from 'react'

const UserMembership = props => {
  const {membership} = props
  const {survivorPick, survivorContest} = props.membership
  return (
    <div>
      <h3>{survivorContest.name}</h3>
    </div>
  )
}

export default UserMembership
