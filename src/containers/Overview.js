import React from 'react';
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

const Overview = () => (
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

export default Overview;
