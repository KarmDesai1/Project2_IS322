import React from 'react';

import '../Style/NavBar.css'

class NavBar extends React.Component {

  isActive(navPage) {
    return (navPage === this.props.currentView) ? 'nav-link active' : 'nav-link';
  }

  onBrandClick(event,navPage ) {
    event.preventDefault();
    this.props.onViewChange(navPage);
  }

  render () {
    return (
      <ul className='navbar'>
        <li className='nav-item'>
          <a className={this.isActive('listView')}
             onClick={(e) => this.onBrandClick(e, 'listView')}>
            List View
          </a>
        </li>
        <li className='nav-item'>
          <a className={this.isActive('taskgridView')}
             onClick={(e) => this.onBrandClick(e, 'taskgridView')}>
            Grid View
          </a>
        </li>
        <li className='nav-item'>
          <a className={this.isActive('addTask')}
             onClick={(e) => this.onBrandClick(e, 'addTask')}>
            Add Task
          </a>
        </li>
      </ul>
    )
  }

};

export default NavBar;