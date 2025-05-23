import React, { Component } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext'

import { Container } from './styles';

function HOC(ComponenteHeader) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(value) => (
            <ComponenteHeader { ...value } />
          )}
        </ThemeContext.Consumer>
      );
    }
  }
}

class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme) {
      console.log('theme changed');
    }
  }

  render() {
    return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={this.props.handleToggleTheme}>
        {this.props.theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </Container>
    );
  }
}

export default HOC(Header);
