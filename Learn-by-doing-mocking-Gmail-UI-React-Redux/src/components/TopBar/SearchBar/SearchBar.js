import React from 'react';
import styles from 'styles/topbar.styl';
import Button from 'components/common/Button';
import buttonStyles from 'styles/button.styl';
import Dropdown from './Dropdown';

export default class SearchBar extends React.Component {

  render() {
    return (
      <div className={styles.searchBar}>
        <input className={styles.inputbox} />
        <Dropdown />
        <div className={styles.buttonDiv}>
          <Button btn={buttonStyles.topSearchButton} label={buttonStyles.topSearchLabel} />
        </div>
      </div>
    );
  }
}
