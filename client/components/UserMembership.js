import React from 'react'

const UserMembership = props => {
  const {membership} = props
  const {survivorPick, survivorContest} = membership
  const {pick, opponent} = survivorPick
  return (
    <div>
      <h3>{survivorContest.name}</h3>
      {membership.alive ? (
        <h2>You're still alive!</h2>
      ) : (
        <h2>You bit the dust</h2>
      )}
      {survivorPick ? (
        <div>
          <h4>
            You've got the {pick.home} {pick.name} over the {opponent.home}{' '}
            {opponent.name}
          </h4>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

export default UserMembership
