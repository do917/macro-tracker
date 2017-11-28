import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from './actions';
import './logger.css';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  Well,
} from 'react-bootstrap';

class LoggerModule extends React.Component {

  render() {
    const { updateLogger, loggerData } = this.props;
    return (
      <div className="module logger-module">
        <h3>LOG FOOD</h3>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" onChange={(e) => updateLogger('name', e.target.value, loggerData)} />
        </FormGroup>
        <div className="macros">
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
              {loggerData.calories}
            </div>
          </div>
        </div>
        <Button bsStyle="primary" block>
          Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggerData: state.logger,
});

const mapDispatchToProps = (dispatch) => ({
  updateLogger: (type, text, loggerData) => dispatch(actions.updateLogger(type, text, loggerData)),
});

LoggerModule.propTypes = {
  updateLogger: PropTypes.func.isRequired,
};

const Logger = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoggerModule);

export default Logger;
