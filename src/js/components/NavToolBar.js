import React from 'react';

class NavToolBar extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="_navtoolbar">
        <ul>
          <li><i className="fa fa-sign-in"></i></li>
        </ul>
      </div>
    );
  }
}

export default NavToolBar;
