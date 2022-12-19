import React, { useContext, useState } from 'react'
import Logo from './img/logo.svg'
import Styles from './Nav.module.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import HamburgerMenu from './img/icon-hamburger.svg'
import CloseIcon from './img/icon-close.svg'

const Nav = () => {
  const { index, setIndex, isMobile } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      className={Styles[isMobile ? 'nav-container-mobile' : 'nav-container']}
      style={{
        display: isMobile && isOpen ? 'grid' : 'flex',
        alignItems: isOpen ? 'baseline' : 'center',
      }}
    >
      <img
        src={Logo}
        alt='logo'
        onClick={() => {
          setIndex('0')
          setIsOpen(false)
          navigate('/space-tourism-website')
        }}
        className={Styles.logo}
      />
      <div className={Styles['nav-decoration']} />
      <div>
        <img
          src={HamburgerMenu}
          style={{ display: isMobile ? (isOpen ? 'none' : 'block') : 'none' }}
          onClick={() => setIsOpen(isOpen ? false : true)}
          alt='hamburgerMenu'
        />

        <ul
          className={Styles[isMobile ? 'nav-ul-mobile' : 'nav-ul']}
          style={{ display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex' }}
        >
          <div>
            <img
              src={CloseIcon}
              onClick={() => setIsOpen(false)}
              style={{
                display: isMobile ? (isOpen ? 'block' : 'none') : 'none',
              }}
              alt='closeIcon'
              className={Styles['close-icon']}
            />
          </div>
          <NavComponent
            number='00'
            name='Home'
            style={
              Styles[
                index === '0'
                  ? isMobile
                    ? 'navComponent-list-active-mobile'
                    : 'navComponent-list-active'
                  : 'navComponent-list'
              ]
            }
            click={() => {
              setIndex('0')
              navigate('/space-tourism-website')
            }}
          />
          <NavComponent
            number='01'
            name='Destination'
            style={
              Styles[
                index === '1'
                  ? isMobile
                    ? 'navComponent-list-active-mobile'
                    : 'navComponent-list-active'
                  : 'navComponent-list'
              ]
            }
            click={() => {
              setIndex('1')
              navigate('/space-tourism-website/destination')
            }}
          />
          <NavComponent
            number='02'
            name='Crew'
            style={
              Styles[
                index === '2'
                  ? isMobile
                    ? 'navComponent-list-active-mobile'
                    : 'navComponent-list-active'
                  : 'navComponent-list'
              ]
            }
            click={() => {
              setIndex('2')
              navigate('/space-tourism-website/crew')
            }}
          />
          <NavComponent
            number='03'
            name='Technology'
            style={
              Styles[
                index === '3'
                  ? isMobile
                    ? 'navComponent-list-active-mobile'
                    : 'navComponent-list-active'
                  : 'navComponent-list'
              ]
            }
            click={() => {
              setIndex('3')
              navigate('/space-tourism-website/technology')
            }}
          />
        </ul>
      </div>
    </div>
  )
}

const NavComponent = (props) => {
  return (
    <li className={props.style} onClick={props.click}>
      <span className={Styles['navComponent-list-number']}>{props.number}</span>
      <span className={Styles['navComponent-list-name']}> {props.name}</span>
    </li>
  )
}

export default Nav
