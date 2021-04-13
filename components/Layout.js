import React, {Component} from 'react'

import Head from 'next/head'
import Toolbar from './Toolbar'
import { experiences } from '../examples'
import styles from '../styles/Home.module.css'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (key) => {  
    if(this.state.currentIndex > experiences.length) {
      this.setState({currentIndex: 0})
    }

    if(key = 'prev'){
      this.setState({currentIndex: this.state.currentIndex -1})
    } else if('next'){
      this.setState({currentIndex: this.state.currentIndex +1})
    }
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
          <Toolbar
            experiences={experiences} 
            experience={experiences[this.state.currentIndex]} 
            currentIndex={this.state.currentIndex}
            handleClick={this.handleClick} />
            { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout;
