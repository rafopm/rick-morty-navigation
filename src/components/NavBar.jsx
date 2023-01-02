import React from 'react'
import SearchBar from './SearchBar'
import Styles from '../styles/NavBar.module.css'
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className={Styles.nav}>
      <div className={Styles.bttn}>
        <Link to="/home">
          <button>Home</button>
        </Link>

      </div>
      <div className={Styles.bttn}>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div className={Styles.bttn}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  )
}
