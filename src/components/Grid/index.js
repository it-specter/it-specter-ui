import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledGrid,
  StyledGridFlexContainer,
  StyledGridFlexItem,
} from './styles';

// Breakpoints
// Spacing
// Flex Container
//   display
//   flex-direction
//   flex-wrap
//   justify-content
//   align-items
// Flex Item
//   order
//   grow
//   shrink
//   align-self
// GridContainer
// GridItems

const Grid = ({
  variant,
  spacing,
  direction,
  justify,
  alignitems,
  aligncontent,
  wrap,
  order,
  grow,
  shrink,
  alignself,
  xs,
  sm,
  md,
  lg,
  children,
}) => {
  if (variant === 'Grid') {
    return <StyledGrid spacing={spacing}>{children}</StyledGrid>;
  } else if (variant === 'FlexContainer') {
    return (
      <StyledGridFlexContainer
        spacing={spacing}
        direction={direction}
        justify={justify}
        alignitems={alignitems}
        aligncontent={aligncontent}
        wrap={wrap}
      >
        {children}
      </StyledGridFlexContainer>
    );
  } else if (variant === 'FlexItems') {
    return (
      <StyledGridFlexItem
        spacing={spacing}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        order={order}
        grow={grow}
        shrink={shrink}
        alignself={alignself}
      >
        {children}
      </StyledGridFlexItem>
    );
  } else {
    return <StyledGrid spacing={spacing}>{children}</StyledGrid>;
  }
};

// Expected prop values
Grid.propTypes = {
  variant: PropTypes.string,
  spacing: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignitems: PropTypes.string,
  wrap: PropTypes.string,
  order: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string,
  children: PropTypes.node.isRequired,
};

//Default prop values
Grid.defaultProps = {
  children: 'Grid',
  variant: 'Grid',
  spacing: '0',
};

export default Grid;
