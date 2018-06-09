import React from 'react';

const Repository = ({repository}) => (
  <div>
    <dl>
      <dt>Name</dt>
      <dd>{repository.name}</dd>
      <dt>Owner</dt>
      <dd>{repository.owner.login}</dd>
    </dl>
  </div>
)

export default Repository;