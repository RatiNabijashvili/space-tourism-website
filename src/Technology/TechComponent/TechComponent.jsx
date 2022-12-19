import React, { useState, useRef, useEffect } from 'react'
import LaunchImg from '../img/image-launch-vehicle-portrait.jpg'
import SpaceportImg from '../img/image-spaceport-portrait.jpg'
import SpaceCapsuleImg from '../img/image-space-capsule-portrait.jpg'
import MobileLaunchImg from '../img/image-launch-vehicle-landscape.jpg'
import MobileSpaceportImg from '../img/image-spaceport-landscape.jpg'
import MobileSpaceCapsuleImg from '../img/image-space-capsule-landscape.jpg'
import Styles from './Component.module.css'

const TechComponent = () => {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const counter = useRef(0)
  const technology = [
    {
      name: 'Launch vehicle',
      info: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
      img: isMobile ? MobileLaunchImg : LaunchImg,
    },
    {
      name: 'Spaceport',
      info: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      img: isMobile ? MobileSpaceportImg : SpaceportImg,
    },
    {
      name: 'Space capsule',
      info: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
      img: isMobile ? MobileSpaceCapsuleImg : SpaceCapsuleImg,
    },
  ]

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    if (counter.current < 3) {
      counter.current += 1
      if (index === 2) {
        counter.current = 0
        const timer = setTimeout(() => setIndex(0), 2000)
        return () => clearTimeout(timer)
      }
      const timer = setTimeout(() => setIndex(index + 1), 2000)
      handleResize()
      return () => clearTimeout(timer)
    }
  }, [index])

  return (
    <div className={Styles['main-container']}>
      <div className={Styles['main-div']}>
        <ul className={Styles['technology-nav-container']}>
          {technology.map((item, i) => {
            return (
              <li
                key={item.name}
                onClick={() => setIndex(i)}
                className={
                  index === i
                    ? `${Styles['active-technology-nav']} ${Styles['basic-technology-nav']}`
                    : `${Styles['inActive-technology-nav']} ${Styles['basic-technology-nav']}`
                }
              >
                {i + 1}
              </li>
            )
          })}
        </ul>
        <div className={Styles['text-container']}>
          <h2 className={Styles['main-text']}>The terminology…</h2>
          <h2 className={Styles['name-text']}>{technology[index].name}</h2>
          <p className={Styles['info-text']}>{technology[index].info}</p>
        </div>
      </div>

      <div>
        <img
          src={technology[index].img}
          alt='technology-img'
          className={Styles.img}
        />
      </div>
    </div>
  )
}

export default TechComponent
