import React from 'react'
import Nav from '../Nav/Nav'
import Styles from './Technology.module.css'
import TechComponent from './TechComponent/TechComponent'

const Technology = () => {
  return (
    <div className={Styles['technology-container']}>
      <Nav />
      <div className={Styles['main-container']}>
        <div className={Styles['main-text-container']}>
          <h2 className={Styles.number}>03</h2>
          <h2 className={Styles.text}>Space Launch 101</h2>
        </div>
        <div className={Styles['component-container']}>
          <TechComponent />
        </div>
      </div>
    </div>
  )
}

export default Technology
