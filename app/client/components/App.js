import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';

export default class App extends Component {
  render() {
    return (
    	<div className={css(styles.red)}>
    		<h1>World</h1>
    	</div>
    )
  }
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red'
  },

  blue: {
    backgroundColor: 'blue'
  },

  hover: {
    ':hover': {
      backgroundColor: 'red'
    }
  },

  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    }
  }
});