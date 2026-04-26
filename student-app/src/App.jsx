import './App.css'
import { Card } from './Components/Card'

function App() {
  return (
    <>
      <section id="navigation">
        <nav className='navbar'>
          <div className='logo'>Student App</div>
          <ul className='nav-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/AboutMe">About</a></li>
            <li><a href="/Subject">Subjects!</a></li>
           </ul> 
        </nav> 
        <div>
          <h1>Your all in one study lab</h1>
          <p className='description'>
            Welcome to a project designed to help students excel in their studies.
            This application provides a comprehensive platform for students to access study materials, and 
            track their progress. Whether you're looking for resources, study tips, my app has you covered. Join us on this educational journey and unlock your full potential!
          </p>
        </div>
      </section>
      <section id="subject">
        <h2>Subjects</h2>
        <p>Explore our comprehensive list of subjects!</p>
        <div className="App">
          <Card 
            imgsrc=""
            imgalt=""
            title="Math!"
            description="Click here to learn more about Math."
            link="/AboutMe"
          />
             <Card 
            imgsrc=""
            imgalt=""
            title="Science!"
            description="Click here to learn more about Science."
            link="/AboutMe"
          />
      </div>
      
      </section>
    
      <div className="App"> </div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
