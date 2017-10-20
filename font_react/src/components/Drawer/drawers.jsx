import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );
    return (
      <div>
        <Drawer open={this.props.value} onRequestClose={this.props.onClick}>
        <div
            tabIndex={0}
            role="button"
            onClick={this.props.onClick}
            onKeyDown={this.props.onClick}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}
TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TemporaryDrawer);