import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';

const Repository = ({repository}) => (
  <Card>
    <CardContent>
      <Typography variant="headline" component="h2">
        {repository.owner.login} / {repository.name}
      </Typography>
      <Typography component="p" color={repository.description ? "default" : "textSecondary"}>
        {repository.description || "(No description provided.)"}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color="primary" onClick={() => {window.location = `https://github.com/${repository.owner.login}/${repository.name}`}}>
        Go to repository
      </Button>
      <Button variant="contained" color="primary">
        <Icon>star</Icon>
        {repository.stargazers.totalCount} Stars
      </Button>
    </CardActions>
  </Card>
)

export default Repository;