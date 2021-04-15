import DragPage from './examples/drag/index'
import Head from 'next/head'
import React from 'react'
import ScrollPage from './examples/scroll/index'
import Toolbar from './Toolbar'
import styles from '../styles/Home.module.css'
class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {    
    return (
      <div className={styles.container}>
        <Head>
          <title>Melo Experience Platform</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
  
        <main className={styles.main}>
            <Toolbar />
            <DragPage />
            <ScrollPage />
        </main>
      </div>
    )
  }
}

export default Layout;
