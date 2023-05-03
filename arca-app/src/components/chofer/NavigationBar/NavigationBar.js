import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement';
import styles from './NavigationBar.module.css'

function NavigationBar() {

  const id = useParams();

  return (
    <div className={styles.navBarBox}>


      <nav> 
        <ul>
          <li>
            <NavLink exact='true' to={`/landing-chofer/${id.id}`} activeclassName={styles.active}>
              <FontAwesomeIcon icon={faHome} />
              <div className="active-icon"></div>
            </NavLink>
          </li>
          <li>
            <NavLink exact='true' to="/about">
              <FontAwesomeIcon icon={faUser} />
              <div className="active-icon"></div>
            </NavLink>
          </li>
          <li>
            <NavLink exact='true' to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="active-icon"></div>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/products" activeStyle>
            Products
          </MenuLink>
          <MenuLink to="/blog" activeStyle>
            Blog
          </MenuLink>
        </Menu>
      </PrimaryNav> */}
    </div>
  )
}

export default NavigationBar