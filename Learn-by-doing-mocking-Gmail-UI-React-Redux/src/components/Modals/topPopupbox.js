import React, { PropTypes } from 'react';
import styles from 'styles/Modal/popup.styl';
import classnames from 'classnames';

export default class Popupbox extends React.Component {

  render() {
  	const { topSearchModalActive } = this.props;
    return (
      <div className={classnames(styles.popupDiv, {[styles.hide]: !topSearchModalActive}, {[styles.show]: topSearchModalActive})}>
        <div className={styles.popupBoard}>  </div>
      </div>
    );
  }
}

Popupbox.propTypes = {
  topSearchModalActive: PropTypes.bool.isRequired
};