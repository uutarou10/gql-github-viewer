import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Loading from './loading'
import Repository from './Repository';

class App extends Component {
  render() {
    const { repositories } = this.props;
    console.log(repositories)
    return (
      <div>
        {repositories.loading ? (
          <Loading />
        ) : (
          <div>
            {repositories.viewer.starredRepositories.nodes.map(repository => (
              <Repository repository={repository} key={repository.owner.login + repository.name} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const query = gql`
  {
    viewer {
      starredRepositories(first: 10) {
        nodes {
          name
          owner {
            login
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`

// export default App;
export default graphql(query, { name: 'repositories' })(App)
