import React, { Component } from 'react';
import Topbar from '../components/Topbar';

export default class Application extends Component {

  render() {
    return (
      <div>
        <Topbar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showLoading: state.message.showLoading
  };
}

export default connect(mapStateToProps)(Application)

