import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default () => (
  <div style={style}>
    <CircularProgress />
    <p>Please wait! Loading...</p>
  </div>
);

