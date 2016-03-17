import React from 'react';
import styles from '../styles/topbar.styl';

export default class Topbar extends React.Component {

  render() {
    return (
      <div className={styles.app}>
        <h1>I am the top bar </h1>
      </div>
      //logo  -------- Searchbar --------- Menus buttons
    );
  }
}
