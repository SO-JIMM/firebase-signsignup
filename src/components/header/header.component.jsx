import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { auth } from '../../firebase/firestore'

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="link-container">
        {currentUser ? (
          <div onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>
  )
}

export default connect(mapState)(Header)
