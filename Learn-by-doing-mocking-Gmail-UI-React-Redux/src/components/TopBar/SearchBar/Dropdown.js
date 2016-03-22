import React from 'react';
import styles from 'styles/Topbar/topbar.styl';


export default class DropDown extends React.Component {

  render() {
    return (
      <div 
      	className={styles.dropDown}
      	onClick={this.handleDropDownClick.bind(this)}
      >
      </div>
    );
  }
  
  handleDropDownClick() {
  	// I need the dispatcher here....
  	// I am going to connect the dispatcher tommorrow
  	
  }
}
