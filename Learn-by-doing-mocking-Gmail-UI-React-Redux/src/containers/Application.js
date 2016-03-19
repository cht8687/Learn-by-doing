import React, { Component } from 'react';
import Topbar from 'components/Topbar/Topbar';
import TopPopupbox from 'components/Modals/TopPopupbox';
import { connect } from 'react-redux';

export default class Application extends Component {

  render() {
    return (
      <div>
        <Topbar />
        <TopPopupbox />
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

