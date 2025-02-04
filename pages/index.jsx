import React, { useState, useEffect } from 'react';
;

import Head from 'next/head'

import { Hero } from '../components/home/01-hero'
import { Story } from '../components/home/02-story'
import { Administration } from '../components/home/03-administration'
import { Crew } from '../components/home/04-crew'
import { Roadmap } from '../components/home/06-roadmap'
import { Contact } from '../components/home/05-contact'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    }
  }, []);
  

  return (
    <>
      <Head>
        <title>The Goombahs | NFT Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Story/>
        <Administration />
        <Crew />
        <Roadmap />
        <Contact />
      </main>
    </>
  )
}
