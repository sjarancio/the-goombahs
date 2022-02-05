import React from 'react'
import Link from 'next/link'

import { DiscordIcon } from '../svg/discord-icon'
import { FBIcon } from '../svg/fb-icon'
import { TwitterIcon } from '../svg/twitter-icon'

import {
  footerContainer,
  logo,
  navLinks,
  navLink,
  socialBlock,
  icon,
  meta
} from '../../styles/layout/footer.module.scss'

const pageLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'NFTs',
    path: '/',
  },
  {
    name: 'Utility',
    path: '/',
  },
  {
    name: 'Partners',
    path: '/',
  },
  {
    name: 'Analytics',
    path: '/',
  },
  {
    name: 'Roadmap',
    path: '/',
  },
]

export const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={logo}>GOOMBAHS</div>
      <div className={meta}>
        <span>© 2022 The Goombahs</span>
        <span><Link href='/terms-conditions'><a>Terms & Conditions</a></Link></span>
      </div>
      <div className={navLinks}>
        {pageLinks.map((lnk, idx) => {
          return (
            <Link href={lnk.path} key={lnk.name}>
              <a className={`${navLink}`}>{lnk.name}</a>
            </Link>
          )
        })}
      </div>
      <div className={socialBlock}>
        <span className={icon}>
          <DiscordIcon />
        </span>
        <span className={icon}>
          <TwitterIcon />
        </span>
        <span className={icon}>
          <FBIcon />
        </span>
      </div>
    </footer>
  )
}
