import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { H2 } from '../heading/index';

const A = styled.a`
  text-decoration: none;
`;

const StyledListItem = styled.li`
  list-style: none;
  background-color: ${props => props.theme.color.background};
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.color.tertiary};
`;

const ListItem = ({ title, url, selftext }) => {
  const linkHandler = () => console.log('hello');
  return (
    <StyledListItem>
      <A onClick={() => linkHandler()} href={url}>
        <H2>{title}</H2>
        <p>{selftext}</p>
      </A>
    </StyledListItem>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  selftext: PropTypes.string
};

export default ListItem;
