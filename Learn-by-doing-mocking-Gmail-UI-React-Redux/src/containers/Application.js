import React, { PropTypes, Component } from 'react';
import Topbar from 'components/Topbar/Topbar';
import TopPopupbox from 'components/Modals/TopPopupbox';
import { connect } from 'react-redux';

export default class Application extends Component {

  render() {

    const { topSearchModalActive } = this.props;

    return (
      <div>
        <Topbar />
        <TopPopupbox topSearchModalActive={topSearchModalActive} />
      </div>
    );
  }
}

Application.propTypes = {
  topSearchModalActive: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    showLoading: state.message.showLoading,
    topSearchModalActive: state.topbar.topSearchModalActive
  };
}

export default connect(mapStateToProps)(Application)

