import React from 'react';
import styles from '../styles/topbar.styl';

export default class Topbar extends React.Component {

  render() {

    console.log(styles.wrapper);

    return (
      <div className={styles.wrapper}>
        <h1>I am the top bar {styles.wrapper} </h1>
      </div>
      //logo  -------- Searchbar --------- Menus buttons
    );
  }
}
