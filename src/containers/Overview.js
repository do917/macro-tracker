import React from 'react';
import PropTypes from 'prop-types';
import modules from '../modules';
import './overview.css';

const {
  calendar,
  logger,
  summary,
} = modules;

const { Calendar } = calendar;
const { Logger } = logger;
const { Summary } = summary;

class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <Calendar />
        <Logger />
        <Summary />
      </div>
    );
  }
}

Overview.propTypes = {

};

export default Overview;
