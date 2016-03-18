import React from 'react';
import styles from 'styles/topbar.styl';
import SearchBar from './SearchBar/SearchBar';

export default class Topbar extends React.Component {

  render() {
    return (
       //logo  -------- Searchbar --------- Menus buttons
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <span className={styles.logo} />
        </div>
        <div className={styles.middleDiv}>
          <SearchBar />
        </div>
        <div className={styles.rightDiv}>
        </div>
      </div>
    );
  }
}
