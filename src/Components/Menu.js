import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Nav extends Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
      const { activeItem } = this.state
      return (
        <Menu>
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
              //as={Home} to='/home'
            >
              Home
            </Menu.Item>
            
    
            <Menu.Item
              name='Favorites'
              active={activeItem === 'Favorites'}
              onClick={this.handleItemClick}
              //as={Favorites} to='favorites'
            >
              Favorites
            </Menu.Item>
        </Menu>
      )
    }
  }