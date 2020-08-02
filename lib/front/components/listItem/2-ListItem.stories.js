import React from "react";
import { action } from "@storybook/addon-actions";

import ListItem from "./ListItem";

export default {
  title: "List Item",
  component: ListItem,
};

export const Text = () =>
  <ListItem onClick={action("clicked")}>Hello Button</ListItem>;

Text.story = {
  parameters: {
    notes: "This is a short text sample",
  },
};
