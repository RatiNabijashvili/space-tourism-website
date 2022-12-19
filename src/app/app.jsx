import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Context } from '../Context'
import Home from '../Home/Home'
import Destination from '../Destination/Destination'
import Crew from '../Crew/Crew'
import Technology from '../Technology/Technology'

const App = () => {
  const [index, setIndex] = useState(localStorage.getItem('index'))
  const [isMobile, setIsmobile] = useState()

  useEffect(() => {
    if (window.location.pathname === '/space-tourism-website/') {
      setIndex('0')
    } else if (
      window.location.pathname === '/space-tourism-website/destination'
    ) {
      setIndex('1')
    } else if (window.location.pathname === '/space-tourism-website/crew') {
      setIndex('2')
    } else if (
      window.location.pathname === '/space-tourism-website/technology'
    ) {
      setIndex('3')
    }
    window.localStorage.setItem('index', index)
  }, [index])

  const handleWidth = () => {
    if (window.innerWidth < 610) {
      setIsmobile(true)
      console.log('width:', window.innerWidth, 'isMobile')
    } else {
      setIsmobile(false)
      console.log('width:', window.innerWidth, 'isNotMobile')
    }
  }

  useEffect(() => {
    handleWidth()
    window.addEventListener('resize', handleWidth)
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  })

  return (
    <Context.Provider value={{ index, setIndex, isMobile }}>
      <div>
        <Routes>
          <Route path='/space-tourism-website' element={<Home />} />
          <Route
            path='/space-tourism-website/destination'
            element={<Destination />}
          />
          <Route path='/space-tourism-website/crew' element={<Crew />} />
          <Route
            path='/space-tourism-website/technology'
            element={<Technology />}
          />
        </Routes>
      </div>
    </Context.Provider>
  )
}

export default App
