import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.color.primary};
  /* border: 1px solid ${(props) => props.theme.color.tertiary}; */
`;

const ListItem = ({ title, url, selftext }) => {
  return (
    <StyledListItem>
      <a onClick={() => linkHandler(url)} href={url}>
        <h2>{title}</h2>
        <p>{selftext}</p>
      </a>
    </StyledListItem>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  selftext: PropTypes.string,
};

export default ListItem;
