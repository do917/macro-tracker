import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RcCalendar from 'rc-calendar';
import moment from 'moment';
import 'rc-calendar/assets/index.css';
import './calendar.css';
import actions from './actions';


class CalendarModule extends React.Component {
  componentDidMount() {
    const { updateSelectedDate } = this.props;
    updateSelectedDate(moment().format('YYYY-MM-DD'));
  }

  render() {
    const { updateSelectedDate } = this.props;

    return (
      <div className="module calendar-module">
        <h3>Select Date</h3>
        <RcCalendar
          showDateInput={false}
          onSelect={(d) => {
            updateSelectedDate(d.format('YYYY-MM-DD'));
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedDate: state.calendar.selectedDate,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedDate: (date) => dispatch(actions.updateSelectedDate(date)),
});

CalendarModule.propTypes = {
  updateSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
};

const Calendar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarModule);


export default Calendar;
