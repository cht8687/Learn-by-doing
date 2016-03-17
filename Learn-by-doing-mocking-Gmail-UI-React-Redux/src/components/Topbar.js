import React from 'react';
import styles from '../styles/topbar.css';

export default class Topbar extends React.Component {

  render() {
  	console.log(styles.app);
    return (
      <div className={styles.app}>
        <h1>I am the top bar </h1>
      </div>
      //logo  -------- Searchbar --------- Menus buttons
    );
  }
}
