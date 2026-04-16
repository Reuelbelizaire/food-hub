import './App.css'

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
       
      <div className="Subject-Box">
         
      </div>


      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
