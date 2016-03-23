import React from 'react';
import styles from 'styles/Topbar/topbar.styl';
import { connect } from 'react-redux';
import { toggleTopSearchModal } from '../../actions/TopbarActions';

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
    
    dispatch(toggleTopSearchModal());
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: () => {
      dispatch(toggleTopSearchModal())
    }
  }
}

export default connect(mapDispatchToProps)(DropDown);