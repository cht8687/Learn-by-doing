import React from 'react';
<<<<<<< HEAD
import '../styles/topbar.css';
=======
import styles from '../styles/topbar.css';
>>>>>>> dcc7c96b43afd6a15ed05f9fe7f2e64984ba9c4e

export default class Topbar extends React.Component {

  render() {
<<<<<<< HEAD

    return (
      <div className="app">
=======
  	console.log(styles.app);
    return (
      <div className={styles.app}>
>>>>>>> dcc7c96b43afd6a15ed05f9fe7f2e64984ba9c4e
        <h1>I am the top bar </h1>
      </div>
      //logo  -------- Searchbar --------- Menus buttons
    );
  }
}
