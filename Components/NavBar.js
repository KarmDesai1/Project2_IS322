import React from 'react';

class NavBar extends React.Component {

  isActive(navPage) {
    return (navPage === this.props.currentView) ? 'nav-link active' : 'nav-link';
  }

  onBrandClick(event,navPage ) {
    event.preventDefault();
    this.props.onPageChange(navPage);
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
          <a className={this.isActive('gridView')}
             onClick={(e) => this.onBrandClick(e, 'gridView')}>
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