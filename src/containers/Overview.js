import React from 'react';
import PropTypes from 'prop-types';
import modules from '../modules';

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
      <div>
        this is overview
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
