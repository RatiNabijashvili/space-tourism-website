import React from 'react'
import Nav from '../Nav/Nav'
import Styles from './Crew.module.css'
import CrewComponent from './CrewComponent/CrewComponent'

const Crew = () => {
  return (
    <div className={Styles['crew-container']}>
      <Nav />
      <div className={Styles['main-container']}>
        <div className={Styles['main-text-container']}>
          <h2 className={Styles.number}>02</h2>
          <h2 className={Styles.text}>Meet your crew</h2>
        </div>
        <div className={Styles['component-container']}>
          <CrewComponent />
        </div>
      </div>
    </div>
  )
}

export default Crew
