import React, { useState } from "react";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchResults from '../components/SearchResults';



export default function Home() {


  return (
    <div>
      <Head>
        <title>Seald Sweet</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div>
          <Box textAlign='center'>
          <Typography className={styles.subtitle}>
            Welcome to your container/Vessel/Lot search hub!
          </Typography>
          <Typography className={styles.text}>
            Here you can search for any container number or vessel name and you will find every document that includes it.  
            You can use the date filters to search documents issued between the selected dates.
            </Typography>
          </Box>
          
          <SearchResults/>
                          
        </div>
      </main>

    </div>
  )
}

