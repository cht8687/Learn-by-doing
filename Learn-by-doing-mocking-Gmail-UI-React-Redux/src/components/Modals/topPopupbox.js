import React from 'react';
import styles from 'styles/Modal/popup.styl';

export default class Popupbox extends React.Component {

  render() {
    return (
      <div className={styles.popupDiv}>
        <div className={styles.popupBoard}> Reserved area </div>
      </div>
    );
  }
}
