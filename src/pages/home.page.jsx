import React from 'react'
import NewTodo from '../components/newTodo.component'
import GetTodos from '../components/getTodos'

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <NewTodo />
        <GetTodos />
      </div>
    )
  }
}

export default HomePage
