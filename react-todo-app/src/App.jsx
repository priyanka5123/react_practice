import './App.css'
import Header from './Header'
import Footer from './Footer'
import WelcomeMessage from './WelcomeMessage'

function App() {

  return (
    <>
      <div>
        <Header/>
        {/* <h1>My First React App 🎉</h1> */}
        <WelcomeMessage/>
        <p>Tasks will go here....</p>
        <Footer/>
      </div>
    </>
  )
}

export default App
