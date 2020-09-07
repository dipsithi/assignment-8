import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Post = (props) => {
    const {title, body, id} = props.user;
    const classes = useStyles();

    return (
        <div>
            <Card style={{backgroundColor:'lightwhite'}} className={classes.root}>

              <CardContent>
                <Typography variant="h5" component="h2">
                      {title}
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                      {body}
                </Typography>
            </CardContent>

                <CardActions>
                    <Link to={`/post/${id}`}>
                      <button style={{backgroundColor:'tomato', border: 'raadius 5px solid', color:'white', fontWeight:'bold'}}>
                        Learn more of Id: {id} </button>
                    </Link>
                </CardActions>

            </Card>
                
        </div>
    );
};

export default Post;