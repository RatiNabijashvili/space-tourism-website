import React, { useState, useEffect, useRef } from 'react'
import DougloasImg from '../img/image-douglas-hurley.png'
import MarkImg from '../img/image-mark-shuttleworth.png'
import VictorImg from '../img/image-victor-glover.png'
import AnoushehImg from '../img/image-anousheh-ansari.png'
import Styles from './Component.module.css'

const CrewComponent = () => {
  const [index, setIndex] = useState(0)
  const counter = useRef(0)

  const crew = [
    {
      role: 'Commander ',
      name: 'Douglas Hurley',
      info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img: DougloasImg,
    },
    {
      role: 'Mission Specialist ',
      name: 'Mark Shuttleworth',
      info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      img: MarkImg,
    },
    {
      role: 'Pilot',
      name: 'Victor Glover',
      info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
      img: VictorImg,
    },
    {
      role: 'Flight Engineer',
      name: 'Anousheh Ansari',
      info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
      img: AnoushehImg,
    },
  ]

  useEffect(() => {
    if (counter.current < 4) {
      counter.current += 1
      if (index === 3) {
        counter.current = 0
        const timer = setTimeout(() => setIndex(0), 2000)
        return () => clearTimeout(timer)
      }
      const timer = setTimeout(() => setIndex(index + 1), 2000)
      return () => clearTimeout(timer)
    }
  }, [index])

  return (
    <div className={Styles['main-container']}>
      <div className={Styles['text-container']}>
        <h2 className={Styles.role}>{crew[index].role}</h2>
        <h2 className={Styles.name}>{crew[index].name}</h2>
        <p className={Styles.info}>{crew[index].info}</p>
        <ul className={Styles['person-nav-container']}>
          {crew.map((item, i) => {
            return (
              <li
                key={item.role}
                onClick={() => setIndex(i)}
                className={
                  index === i
                    ? `${Styles['active-person-nav']} ${Styles['basic-person-nav']}`
                    : `${Styles['inActive-person-nav']} ${Styles['basic-person-nav']}`
                }
              />
            )
          })}
        </ul>
      </div>
      <div>
        <img
          src={crew[index].img}
          alt='person-img'
          className={Styles['person-img']}
        />
      </div>
    </div>
  )
}

export default CrewComponent
