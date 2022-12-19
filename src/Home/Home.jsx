import React, { useContext } from 'react'
import Nav from '../Nav/Nav'
import Styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'

const Home = () => {
  const { setIndex } = useContext(Context)
  const navigate = useNavigate()
  return (
    <div className={Styles['home-container']}>
      <Nav />
      <div className={Styles['hero-container']}>
        <div className={Styles['text-container']}>
          <h2 className={Styles['hero-text']}>So, you want to travel to</h2>
          <h2 className={Styles['space-text']}>Space</h2>
          <p className={Styles['hero-paragraph']}>
            Let’s face it; if you want to go to space, you might as well
            <br />
            genuinely go to outer space and not hover kind of on the <br /> edge
            of it. Well sit back, and relax because we’ll give you a <br />{' '}
            truly out of this world experience!
          </p>
        </div>
        <div
          className={Styles['explore-btn-div']}
          onClick={() => {
            setIndex(1)
            navigate('/space-tourism-website/destination')
          }}
        >
          <div className={Styles['explore-btn-background']} />
          <button className={Styles['explore-btn']}>Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Home
