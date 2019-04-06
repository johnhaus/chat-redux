import React { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectedChannel, fetchMessages } from '../actions/index';

class ChannelList extend Component {
  componentWillRecieveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectedChannel(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        onClick={() => this.handleClick(channel)}
        role="presentation"
      >
        #{channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
