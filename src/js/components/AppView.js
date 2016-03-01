import React from 'react';
import NavBar from './NavBar'
import Welcome from './Welcome';

class AppView extends React.Component {
    constructor(props){
      super(props);
      this.state = this.props;
    }
    render(){
        let Route;
        switch (this.props.route) {
          case 'welcome': Route = Welcome; break;
          default: Route = Welcome;
        }
        return (
          <div id="pagehost">
           <NavBar pages={this.state.pages} route={this.state.route} />
           <Route />
          </div>
        );
    }
}


export default AppView;
