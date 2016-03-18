import React from 'react';
import styles from 'styles/topbar.styl';
import Button from 'components/common/Button';

export default class SearchBar extends React.Component {

  render() {
    return (
      <div className={styles.searchBar}>
        <input className={styles.inputbox} />
        <div className={styles.buttonDiv}>
          <Button />
        </div>
      </div>
    );
  }
}
