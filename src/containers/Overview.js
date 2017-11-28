import React from 'react';
import PropTypes from 'prop-types';
import modules from '../modules';
import './overview.css';

const {
  logger,
  summary,
  calendar,
} = modules;

const { Logger } = logger;
const { Summary } = summary;
const { Calendar } = calendar;

class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <div className="calendar center">
          <Calendar />
        </div>
        <div className="logger center">
          <Logger />
        </div>
        <div className="summary center">
          <Summary />
        </div>
      </div>
    );
  }
}

Overview.propTypes = {

};

export default Overview;
