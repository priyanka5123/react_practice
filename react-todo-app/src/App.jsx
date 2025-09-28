import './App.css'
import Header from './Header'
import Footer from './Footer'
import WelcomeMessage from './WelcomeMessage'
import TodoList from './Todoitem'
import UserCard from './UserCard'
import Counter from './Counter'
function App() {

  return (
    <>
      <div>
        <Header/>
        <WelcomeMessage/>
        
        <p>Tasks will go here....</p>
        <TodoList />
        <p>
          <UserCard name="Sara" role="Teacher" />
        </p>
        <Counter />
        <Footer/>
      </div>
    </>
  )
}

export default App
