import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import { useEffect } from 'react'

function App() {
  const [{basket}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      //any cleanup operations go here
      unsubscribe()
    }
  }, [])

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/checkout' 
            element={
              <>
                <Header />
                <Checkout />
              </>
          } />
          <Route path='/login' element={<Login />}/>
          <Route path='/' 
            element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App