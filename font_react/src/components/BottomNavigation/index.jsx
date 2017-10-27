import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import GroupIcon from 'material-ui-icons/Group';
import ExploreIcon from 'material-ui-icons/Explore';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import TVIcon from 'material-ui-icons/TV';
import {hashHistory } from 'react-router';


const styles = {
  root: {
    width: "100%",
    position:"fixed",
    bottom:0 
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  VisitPage = (value) => {
    hashHistory.push('/'+value)
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationButton onClick={()=>this.VisitPage('home')} label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationButton onClick={()=>this.VisitPage('videoList')} label="VideoList" value="group" icon={<TVIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LabelBottomNavigation);