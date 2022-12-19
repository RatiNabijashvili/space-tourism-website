import React from 'react'
import Nav from '../Nav/Nav'
import Styles from './Destination.module.css'
import DestinationComponent from './DestinationComponent/DestinationComponent'

const Destination = () => {
  return (
    <div className={Styles['destination-container']}>
      <Nav />
      <div className={Styles['main-container']}>
        <div className={Styles['main-text-container']}>
          <h2 className={Styles.number}>01</h2>
          <h2 className={Styles.text}>Pick your destination</h2>
        </div>
        <div className={Styles['component-container']}>
          <DestinationComponent />
        </div>
      </div>
    </div>
  )
}

export default Destination
