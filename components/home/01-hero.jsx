import React from 'react'

import { DiscordIcon } from '../svg/discord-icon'
import { LogoHero } from '../svg/logo-hero'

import { baseUrlPng } from '../../utils/base-url';

import {
  hero,
  heroContent,
  sectionHeader,
  blurb,
  ctaButton,
  scrollBtn,
  text,
  arrow,
  heroImg
} from '../../styles/home/hero.module.scss'
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroContent}>
        <div className={sectionHeader}>
          <LogoHero />
        </div>
        <p className={blurb}>
          An exclusive NFT-METAVERSE collection where each
          token doubles as its holders IRL event and
          metaverse entry pass. A Goombah is a unique 3D
          evolving Goodfella-avatar that garners its rarity
          based off rank within the organization. The Social
          Club is the first of many build out and event
          venues for not only The Goombahs but the world.
          {/* Weclome to The Goombahs, the NFT project that
          works as a skeleton key in the metaverse. At the
          heart of it all enter Club Goombah the NFT social
          club where joining the family starts it all.
          Taking that sacred oath to the Omerta opens the
          doors and covers your back. Every Goodfella
          recieves access to the Club and what seems to be
          an unlimited number of perks. */}
          <br />
          <br />
          Community engagement, experience, and education
          are the teams focal principals. Each being offered
          and updated as our family and metaverse grows.
          Minting is available, get your hands on a Goombah
          and enables the first of many instant rewards. The
          Infinite Goombah Giveaway Campaign. Now its time
          to meet The Family.
          <br />
          <br />
          Ah salute.
          {/* After minting one of the 7500 unique 3d avatars
          you&apos;ll be a part of members only areas, as
          well as every and any builds from outside the
          family. No need for an invite or tickets to any
          virtual or live shows we are affiliated with, as
          well as entry to the “Infinite Goombah Giveaway”
          which is filled with exclusive merchandise ,
          Goombah airdrops(watch your gangster evolve), IRL
          vacations, and any new Goombah related drops. */}
        </p>
        <div className={ctaButton}>
          <button className='btn btn__primary'>
            <a href='https://discord.com/invite/yXmRQy6s6Q'>
              JOIN DISCORD
            </a>{' '}
            <DiscordIcon />
          </button>
          <button className='btn btn__secondary'>
            <Link href='/mint'>
              <a>Mint Now →</a>
            </Link>
          </button>
        </div>
      </div>
      <div className={heroImg}>
        <img
          src={baseUrlPng(`hero-gooms_q5grxs`)}
          alt='goombahs'
        />
      </div>
      <Link href='/#story'>
        <a className={scrollBtn}>
          <span className={text}>SCROLL DOWN</span>
          <span className={arrow}>→</span>
        </a>
      </Link>
    </section>
  )
}
