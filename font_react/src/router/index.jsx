import React from 'react'

import AppBar from '../components/AppBar/index'
import Avatar from '../components/Avatar/index'
import Drawer from '../components/Drawers/index'
import Buttom from '../components/ButtomNavigation/index'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class BasicExample extends React.Component{
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  handleClick(e) {
    this.setState({ liked: !this.state.liked });
  }
  render(){
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    );
    const OpenDrawer = () => (
      <div>
        <Drawer value={true}/>
      </div>
    );
    return(
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/appbar">AppBar</Link></li>
              <li><Link to="/avatar">Avatar</Link></li>
              <li><Link to="/buttom">Buttom</Link></li>
              <li><Link to="/drawer">Drawer</Link></li>
              <li><Link to="/openDrawer" onClick={this.handleClick.bind(this)}>打开</Link></li>
            </ul>
          
            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/appbar" component={AppBar}/>
            <Route path="/avatar" component={Avatar}/>
            <Route path="/buttom" component={Buttom}/>
            <Route path="/drawer" component={Drawer}/>
            <Route path="/openDrawer" component={OpenDrawer}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default BasicExample