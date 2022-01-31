import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from '../../public/icon.png'
import menu from '../../public/menu.png'
import styles from '../../styles/Navbar.module.scss'
import styles2 from '../../styles/Home.module.scss'

// FIX: Image Overlay on Navbar & Change Icon

function Layout ({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)

  return (
        <div className={styles.back}>
            <header className={styles2.header}>
                <nav className={styles.navbar}>
                    <div className={styles.navlogo}>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>

                    <ul
                        className={
                            isOpen === false
                              ? styles.navmenu
                              : styles.navmenu + ' ' + styles.active
                        }
                    >
                        <li className={styles.navitem}>
                            <Link href="/">
                                <a
                                    className={
                                        isOpen === false
                                          ? styles.navlink
                                          : styles.navlink +
                                            ' ' +
                                            styles.active
                                    }
                                    onClick={openMenu}
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link href="/pallete">
                                <a
                                    className={
                                        isOpen === false
                                          ? styles.navlink
                                          : styles.navlink +
                                            ' ' +
                                            styles.active
                                    }
                                    onClick={openMenu}
                                >
                                    Palette
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link href="/ports">
                                <a
                                    className={
                                        isOpen === false
                                          ? styles.navlink
                                          : styles.navlink +
                                            ' ' +
                                            styles.active
                                    }
                                    onClick={openMenu}
                                >
                                    Ports
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <button
                        className={
                            isOpen === false
                              ? styles.catppuccin
                              : styles.catppuccin + ' ' + styles.active
                        }
                        onClick={openMenu}
                    >
        <Image className={styles.menu_btn} src={menu}/>
                    </button>
                </nav>
            </header>
            {children}
            {/* {footer} */}
            <div className={styles2.container}>
                <footer className={styles.footer}>
      {/*
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.logo}
                        />
          </a> */}
                </footer>
            </div>
        </div>
  )
}

export default Layout
