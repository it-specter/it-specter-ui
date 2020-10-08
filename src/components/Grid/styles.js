import styled from 'styled-components';

const gridSpacing = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.grid.spacing) return '0px';
  // If no variant is specified, return the Grid Spacing in our theme
  if (!props.spacing) return props.theme.grid.spacing;
  // Dynamically determine the Grid Spacing based on props
  let spacing;
  switch (props.spacing) {
    case '0':
      spacing = '0px';
      break;
    case '1':
      spacing = '4px';
      break;
    case '2':
      spacing = '8px';
      break;
    case '3':
      spacing = '12px';
      break;
    case '4':
      spacing = '16px';
      break;
    case '5':
      spacing = '20px';
      break;
    case '6':
      spacing = '24px';
      break;
    case '7':
      spacing = '28px';
      break;
    case '8':
      spacing = '32px';
      break;
    case '9':
      spacing = '36px';
      break;
    case '10':
      spacing = '40px';
      break;
    case '11':
      spacing = '44px';
      break;
    case '12':
      spacing = '48px';
      break;
    default:
      spacing = '0px';
      break;
  }
  return spacing;
};

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width: ${width}%;`;
}

const StyledGrid = styled.div`
  display: flex;
  padding: ${(props) => gridSpacing(props)};
`;

const StyledGridFlexContainer = styled.div`
  display: flex;
  padding: ${(props) => gridSpacing(props)};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  align-items: ${(props) => props.alignitems};
  align-content: ${(props) => props.aligncontent};
`;

const StyledGridFlexItem = styled.div`
  padding-top: ${(props) => gridSpacing(props)};
  padding-left: ${(props) => gridSpacing(props)};
  padding-right: 0px;
  padding-bottom: 0px;
  :last-child {
    padding-top: ${(props) => gridSpacing(props)};
    padding-left: ${(props) => gridSpacing(props)};
    padding-right: ${(props) => gridSpacing(props)};
    padding-bottom: 0px;
  }
  order: ${(props) => props.order};
  flex-grow: ${(props) => props.grow};
  flex-shrink: ${(props) => props.shrink};
  align-self: ${(props) => props.alignself};
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

export { StyledGrid, StyledGridFlexContainer, StyledGridFlexItem };
