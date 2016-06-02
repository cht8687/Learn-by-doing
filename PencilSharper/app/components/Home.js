import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>PencilSharper V0.01</h2>
          <Link to="/counter" className={styles.Link}>Authorities & Scripts</Link>
          <Link to="/counter">Authorities & Scripts</Link>
          <Link to="/counter">Authorities & Scripts</Link>
        </div>
      </div>
    );
  }
}
