import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { auth, createUserProfileDocument } from './firebase/firestore'
import { setCurrentUser } from './redux/user/user.slice'
import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.page'

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatch = { setCurrentUser }

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
          })
        })
      }
      setCurrentUser(null)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="app">
        <Header />
        <div className="page-container">
          <Switch>
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? (
                  <Redirect to="/" component={HomePage} />
                ) : (
                  <SignInSignUpPage />
                )
              }
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
