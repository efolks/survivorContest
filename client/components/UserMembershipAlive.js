import React from 'react'
import Link from 'react-router-dom'

const UserMembershipAlive = props => {
  const {membership} = props
  const {survivorPick, survivorContest} = membership
  const {pick, opponent} = survivorPick

  return (
    <div>
      <h3>You're still alive!</h3>
      {survivorPick ? (
        <div>
          <h4>
            You've got the {pick.home} {pick.name} over the {opponent.home}{' '}
            {opponent.name}
          </h4>
          {/* <Link>Change your pick</Link> */}
        </div>
      ) : (
        <div />
        // <Link>You still have to make your pick for this week!</Link>
      )}
    </div>
  )
}

export default UserMembershipAlive
