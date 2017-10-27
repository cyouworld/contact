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
function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <List>
          <ListItem button
          onClick={()=>props.onclickFun(props.itemId)}
          >  
            <CardContent className={classes.content}>
              <Typography type="headline" component="h2">
                {props.itemTitle}
              </Typography>
              <Typography component="p">
                {props.itemTxt}
              </Typography>
              <CardActions>
                <Button dense color="primary">
                  详细...
                </Button>
              </CardActions>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={props.itemImg}
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