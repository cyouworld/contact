import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import GroupIcon from 'material-ui-icons/Group';
import ExploreIcon from 'material-ui-icons/Explore';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import BrushIcon from 'material-ui-icons/Brush';
import Avatar from '../Avatar';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <Avatar />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="首页" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="小组" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="发现" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BrushIcon />
      </ListItemIcon>
      <ListItemText primary="文章" />
    </ListItem>
  </div>
);