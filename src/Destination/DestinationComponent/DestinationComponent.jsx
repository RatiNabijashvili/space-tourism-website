import React, { useState } from 'react'
import MoonImg from '../img/image-moon.png'
import MarsImg from '../img/image-mars.png'
import EuropaImg from '../img/image-europa.png'
import TitanImg from '../img/image-titan.png'
import Styles from '../DestinationComponent/Component.module.css'

const DestinationComponent = () => {
  const [index, setIndex] = useState(0)
  const destintationInfo = [
    {
      name: 'Moon',
      info: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come\n back refreshed. While you’re there, take in some history\n by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travelTime: '3 days',
      img: MoonImg,
    },
    {
      name: 'Mars',
      info: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 MIL. km',
      travelTime: '9 months',
      img: MarsImg,
    },
    {
      name: 'Europa',
      info: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 MIL. km',
      travelTime: '3 years',
      img: EuropaImg,
    },
    {
      name: 'Titan',
      info: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 BIL. km',
      travelTime: '7 years',
      img: TitanImg,
    },
  ]

  return (
    <div className={Styles['main-container']}>
      <img
        src={destintationInfo[index].img}
        alt='planet-img'
        className={Styles.img}
      />
      <div className={Styles['text-container']}>
        <ul className={Styles['planet-nav-container']}>
          {destintationInfo.map((item, i) => {
            return (
              <li
                key={item.name}
                onClick={() => setIndex(i)}
                className={
                  index === i
                    ? `${Styles['active-planet-nav']} ${Styles['basic-planet-nav']}`
                    : `${Styles['planet-nav']} ${Styles['basic-planet-nav']}`
                }
              >
                {item.name}
              </li>
            )
          })}
        </ul>
        <h2 className={Styles['planet-name']}>
          {destintationInfo[index].name}
        </h2>
        <p className={Styles['planet-info']}>{destintationInfo[index].info}</p>
        <div className={Styles.decoration} />
        <div className={Styles['main-planet-advance-container']}>
          <div className={Styles['planet-advance-container']}>
            <h2 className={Styles.travel}>avg. distance</h2>
            <h2 className={Styles['travel-time-text']}>
              {destintationInfo[index].distance}
            </h2>
          </div>
          <div className={Styles['planet-advance-container']}>
            <h2 className={Styles.travel}>Est. travel time</h2>
            <h2 className={Styles['travel-time-text']}>
              {destintationInfo[index].travelTime}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationComponent
