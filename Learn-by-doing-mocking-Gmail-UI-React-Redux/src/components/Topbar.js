import React from 'react';
import styles from '../styles/topbar.styl';
//import Image from './common/Image';

export default class Topbar extends React.Component {

  render() {
    return (
       //logo  -------- Searchbar --------- Menus buttons
      <div className={styles.app}>
        <span  className={styles.logo} />
      </div>
    );
  }
}
