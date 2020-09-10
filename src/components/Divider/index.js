import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDividerList,
  StyledDividerInset,
  StyledDividerSubheader,
  StyledDividerMiddle,
  StyledDividerSubheaderList,
  StyledDividerSubheaderInset,
} from './styles';

import Typography from './../Typography/index';

const Divider = ({ variant, type, subheader }) => {
  if (variant === 'list') {
    if (type === 'subheader') {
      return (
        <StyledDividerSubheader>
          <StyledDividerSubheaderList>
            <Typography variant="caption">{subheader}</Typography>
          </StyledDividerSubheaderList>
        </StyledDividerSubheader>
      );
    } else {
      return <StyledDividerList></StyledDividerList>;
    }
  } else if (variant === 'inset') {
    if (type === 'subheader') {
      return (
        <StyledDividerInset>
          <StyledDividerSubheaderInset>
            <Typography variant="caption">{subheader}</Typography>
          </StyledDividerSubheaderInset>
        </StyledDividerInset>
      );
    } else {
      return <StyledDividerInset></StyledDividerInset>;
    }
  } else if (variant === 'middle') {
    return <StyledDividerMiddle></StyledDividerMiddle>;
  } else {
    return <StyledDividerList></StyledDividerList>;
  }
};

Divider.propTypes = {
  variant: PropTypes.string,
  subheader: PropTypes.string,
  type: PropTypes.string,
};

Divider.defaultProps = {
  variant: 'list',
};

export default Divider;
