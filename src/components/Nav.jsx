import React, { useState } from 'react'

// Components
import DarkMode from '../components/DarkMode'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { CgBee } from 'react-icons/cg'
import { BsBoundingBoxCircles, BsGrid3X3 } from 'react-icons/bs'

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <>
      <div id="humburger">
        <nav className="navBar">
          <button
            className="hamburger-button"
            aria-label="menu"
            onClick={handleToggle}
          >
            {navbarOpen ? (
              <MdClose style={{ width: '40px', height: '40px' }} />
            ) : (
              <FiMenu style={{ width: '40px', height: '40px' }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
            <li>&nbsp;</li>
            <li>
              <a
                href="https://wordle-solving-helper.netlify.app/"
                rel="noreferrer"
                target="_blank"
                aria-label="wordle helper"
                onClick={() => closeMenu()}
              >
                {<BsGrid3X3 />} &nbsp;Wordle Helper
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://spelling-bee-word-puzzle-solver.netlify.app/"
                rel="noreferrer"
                target="_blank"
                aria-label="spelling bee puzzle solver"
                onClick={() => closeMenu()}
              >
                {<CgBee />} &nbsp;Spelling Bee Solver
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://letter-boxed-solver.netlify.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="letter boxed solver"
                onClick={() => closeMenu()}
              >
                {<BsBoundingBoxCircles />} &nbsp;Letter Boxed Solver
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="nav-bar">
        <nav className="nav-bar">
          <a
            className="button "
            href="https://wordle-solving-helper.netlify.app/"
            rel="noreferrer"
            target="_blank"
            aria-label="wordle helper"
          >
            <span>Wordle Helper</span>
          </a>
          <a
            className="button "
            href="https://spelling-bee-word-puzzle-solver.netlify.app/"
            rel="noreferrer"
            target="_blank"
            aria-label="spelling bee puzzle solver"
          >
            <span>Spelling Bee Solver</span>
          </a>
          <a
            className="button "
            href="https://letter-boxed-solver.netlify.app/"
            rel="noreferrer"
            target="_blank"
            aria-label="letter boxed solver"
          >
            <span>Letter Boxed Solver</span>
          </a>
        </nav>
      </div>
      <DarkMode />
    </>
  )
}

export default Nav
