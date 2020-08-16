import React from 'react';

import { H1, H2, H3, H4, H5 } from './index';

export const Overview = () => (
  <>
    <H1>Hello world 1</H1>
    <H2>Hello world 2</H2>
    <H3>Hello world 3</H3>
    <H4>Hello world 4</H4>
    <H5>Hello world 5</H5>
  </>
);
export const HeadingOne = () => <H1>Hello world 1</H1>;
export const HeadingTwo = () => <H2>Hello world 2</H2>;
export const HeadingThree = () => <H3>Hello world 3</H3>;
export const HeadingFour = () => <H4>Hello world 4</H4>;
export const HeadingFive = () => <H5>Hello world 5</H5>;

export default {
  title: 'Headings',
  component: Overview,
};

HeadingOne.story = {
  parameters: {
    notes: 'This is a short text sample',
  },
};
