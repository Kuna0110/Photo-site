import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Header extends Component {
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
          >
            Home
          </Menu.Item>
          
  
          <Menu.Item
            name='Favorites'
            active={activeItem === 'Favorites'}
            onClick={this.handleItemClick}
          >
            Favorites
          </Menu.Item>
        </Menu>
      )
    }
  }