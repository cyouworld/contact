import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {hashHistory } from 'react-router';

const styles = {
  card: {
    maxWidth: 732,
    marginTop:20
  },
   content: {
    width: "60%",
  },
  media: {
    height: 160,
    width : "30%",
  },
};

function read(){
  hashHistory.push('/article')
}

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <List>
          <ListItem button
          onClick={()=>read()}
          >
            
            <CardContent className={classes.content}>
              <Typography type="headline" component="h2">
                {props.txtTitle}
              </Typography>
              <Typography component="p">
                {props.txt}
              </Typography>
              <CardActions>
                <Button dense color="primary">
                  分享
                </Button>
                <Button dense color="primary">
                  阅读
                </Button>
              </CardActions>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={props.img}
              title="Contemplative Reptile"
            />
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);