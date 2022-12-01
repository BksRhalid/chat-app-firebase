import React from 'react'
import Navbar from './components/Navbar'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 

const style = {
  appContainer:`max-w-[780px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
  button:`bg-gray-200 px-4 py-2 hover:bg-gray-100`,
}

function App() {
  const [user] =useAuthState(auth)
  // console.log([user])


  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}> 
      
      {/* Navbar */}
      <Navbar/>
      {/* <Chat/> */}
      
      </section>
    </div>
  );
}

export default App;
