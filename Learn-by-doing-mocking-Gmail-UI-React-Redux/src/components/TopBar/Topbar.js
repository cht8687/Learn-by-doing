import React from 'react';
import styles from 'styles/TopBar/topbar.styl';
import SearchBar from './SearchBar/SearchBar';
// import { connect } from 'react-redux';
// import classnames from 'classnames';

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

// Topbar.propTypes = {
//   topSearchModalActive: PropTypes.bool.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     topSearchModalActive: state.topbar.topSearchModalActive,
//   };
// }

// export default connect(mapStateToProps)(Topbar)

