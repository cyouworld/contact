import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import GroupIcon from 'material-ui-icons/Group';
import ExploreIcon from 'material-ui-icons/Explore';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import BrushIcon from 'material-ui-icons/Brush';
import Avatar from '../Avatar';
import {hashHistory } from 'react-router';

function VisitPage(value) {
  hashHistory.push('/'+value)
}

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <Avatar />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem onClick={()=>VisitPage('home')} button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="首页" />
    </ListItem>
    <ListItem onClick={()=>VisitPage('group')} button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="小组" />
    </ListItem>
    <ListItem onClick={()=>VisitPage('explore')} button>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="发现" />
    </ListItem>
    <ListItem onClick={()=>VisitPage('article')} button>
      <ListItemIcon>
        <BrushIcon />
      </ListItemIcon>
      <ListItemText primary="文章" />
    </ListItem>
  </div>
);