import React from 'react';

import ListItem from './ListItem';

export default {
  title: 'List Item',
  component: ListItem,
};

const test = {
  title: 'Hello',
  url: 'https://what.com',
  selftext: 'what is this?',
};
export const Text = () => <ListItem {...test}>Hello Button</ListItem>;

Text.story = {
  parameters: {
    notes: 'This is a short text sample',
  },
};
