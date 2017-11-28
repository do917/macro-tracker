import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Button,
  MenuItem,
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel,
  DropdownButton,
  ButtonToolbar,
} from 'react-bootstrap';
import actions from './actions';
import summary from '../summary';
import './logger.css';

class LoggerModule extends React.Component {
  render() {
    const {
      addFood,
      summaries,
      loggerData,
      resetLogger,
      updateLogger,
      selectedDate,
    } = this.props;
    const {
      fat,
      name,
      meal,
      carbs,
      protein,
      calories,
    } = loggerData;
    const meals = ['breakfast', 'lunch', 'dinner', 'snacks'];
    return (
      <div className="module">
        <h3>LOG FOOD</h3>
        <div className="row-1">
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={name}
              style={{ width: 240 }}
              onChange={(e) => {
                if (e.target.value.length < 20) {
                  updateLogger('name', e.target.value, loggerData);
                }
              }}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Meal</ControlLabel>
            <ButtonToolbar>
              <DropdownButton title={_.capitalize(meal)} id="dropdown-size-medium" style={{ width: '100%'}}>
                {meals.map((m) => {
                  return (
                    <MenuItem key={m} onClick={() => updateLogger('meal', m, loggerData)}>
                      {_.capitalize(m)}
                    </MenuItem>
                  );
                })}
              </DropdownButton>
            </ButtonToolbar>
          </FormGroup>
        </div>
        <div className="row-2">
          {['fat', 'carbs', 'protein'].map((macro) => (
            <div className="macro" key={macro}>
              <FormGroup>
                <ControlLabel>{_.capitalize(macro)}</ControlLabel>
                <InputGroup>
                  <FormControl
                    type="text"
                    value={loggerData[macro]}
                    onChange={(e) => {
                      const inputs = e.target.value.split('');
                      const onlyNums = inputs.reduce((bool, input) => {
                        return '0123456789'.indexOf(input) === -1 ? false : bool;
                      }, true);
                      if (onlyNums && inputs.length < 4) {
                        const num = parseInt(e.target.value, 10) || 0;
                        updateLogger(macro, num, loggerData);
                      }
                    }}
                  />
                  <InputGroup.Addon>g</InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </div>
          ))}
          <div className="calories macro">
            <ControlLabel>Calories</ControlLabel>
            <div className="calories-text">
              {calories}
            </div>
          </div>
        </div>
        <Button
          block
          bsStyle="primary"
          onClick={() => {
            if (name.length > 0) {
              addFood({
                fat,
                name,
                carbs,
                protein,
                calories,
              }, selectedDate, meal, summaries);
              resetLogger();
            }
          }}
        >
          Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggerData: state.logger,
  summaries: state.summary.data,
  selectedDate: state.calendar.selectedDate,
});

const mapDispatchToProps = (dispatch) => ({
  resetLogger: () => dispatch(actions.resetLogger()),
  updateLogger: (type, text, loggerData) => dispatch(actions.updateLogger(type, text, loggerData)),
  addFood: (newFood, date, meal, summaries) => dispatch(summary.actions.addFood(newFood, date, meal, summaries)),
});

LoggerModule.propTypes = {
  addFood: PropTypes.func.isRequired,
  summaries: PropTypes.object.isRequired,
  resetLogger: PropTypes.func.isRequired,
  updateLogger: PropTypes.func.isRequired,
  loggerData: PropTypes.object.isRequired,
  selectedDate: PropTypes.string.isRequired,
};

const Logger = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoggerModule);

export default Logger;
