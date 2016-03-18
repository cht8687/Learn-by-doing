import React from 'react';
import styles from 'styles/topbar.styl';

export default class SearchBar extends React.Component {


  render() {
    return (
      <div className={styles.searchBar}>
        <input className={styles.inputbox} />
      </div>
    );
  }
}
