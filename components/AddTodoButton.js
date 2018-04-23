import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { Icon, Fab } from 'native-base';
import COLORS from '../constants/Colors';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

// renders the add todo floating button
class AddTodoButton extends React.Component {
  handlePress = () => {
    console.log('Pressed');
  } 

  render = () => {
    return <Button
      onPress={this.props.onPress}
      title="Add Todo Item"
      color="#841584"
    />
  }
};

AddTodoButton.propTypes = propTypes;

export default AddTodoButton;