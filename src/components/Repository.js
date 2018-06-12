import React from 'react';
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles';
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
      <Typography color="secondary">
        <Icon>star</Icon>{repository.stargazers.totalCount} Stars
      </Typography>
    </CardContent>
  </Card>
)

export default Repository;