import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './logger.css';

class LoggerModule extends React.Component {

  render() {
    return (
      <div className="module logger-module">
        <h3>LOG FOOD</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

LoggerModule.propTypes = {
};

const Logger = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoggerModule);

export default Logger;
