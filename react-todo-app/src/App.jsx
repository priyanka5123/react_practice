import './App.css'
import Header from './Header'
import Footer from './Footer'
import WelcomeMessage from './WelcomeMessage'
import TodoItem from './Todoitem'
import UserCard from './UserCard'
function App() {

  return (
    <>
      <div>
        <Header/>
        <WelcomeMessage/>
        
        <p>Tasks will go here....</p>
        <ul>
          <TodoItem text="Learn React" completed={false}  priority="(priority: high)"/>
          <TodoItem text="Practice ES6" completed={true} priority="(priority: medium)"/>
        </ul>
        
        <p>
          <UserCard name="Sara" role="Teacher" />
        </p>
        <Footer/>
      </div>
    </>
  )
}

export default App
