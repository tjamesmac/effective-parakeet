import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/index.tsx';

import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = async (operation, variables) => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });

  return response.json();
};

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <QueryRenderer
      environment={modernEnvironment}
      query={graphql`
        query appQuery($userId: String) {
          name(id: $userId) {
          }
        }
      `}
      variables={
        {
          // Mock authenticated ID that matches database
          // userId: 'me'
        }
      }
      render={({ error, props }) => {
        if (props) {
          return <App />;
        } else if (error) {
          return <div>{error.message}</div>;
        }

        return <div>Loading</div>;
      }}
    />,
    rootElement
  );
}
