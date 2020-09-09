import styled from 'styled-components';

const typographyFontSize = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.typograph.fontSize) return '2rem';
  // If no variant is specified, return the Typography Size in our theme
  if (!props.variant) return props.theme.typograph.fontSize;
  // Dynamically determine the Typography Size based on props
  let fontSize;
  switch (props.variant) {
    case 'headline_1':
      fontSize = props.theme.typograph.headline_1.fontSize;
      break;
    case 'headline_2':
      fontSize = props.theme.typograph.headline_2.fontSize;
      break;
    case 'headline_3':
      fontSize = props.theme.typograph.headline_3.fontSize;
      break;
    case 'headline_4':
      fontSize = props.theme.typograph.headline_4.fontSize;
      break;
    case 'headline_5':
      fontSize = props.theme.typograph.headline_5.fontSize;
      break;
    case 'headline_6':
      fontSize = props.theme.typograph.headline_6.fontSize;
      break;
    case 'subtitle_1':
      fontSize = props.theme.typograph.subtitle_1.fontSize;
      break;
    case 'subtitle_2':
      fontSize = props.theme.typograph.subtitle_2.fontSize;
      break;
    case 'body_1':
      fontSize = props.theme.typograph.body_1.fontSize;
      break;
    case 'body_2':
      fontSize = props.theme.typograph.body_2.fontSize;
      break;
    case 'caption':
      fontSize = props.theme.typograph.caption.fontSize;
      break;
    case 'overline':
      fontSize = props.theme.typograph.overline.fontSize;
      break;
    default:
      fontSize = props.theme.typograph.fontSize;
      break;
  }
  return fontSize;
};
const typographyFontWeight = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.typograph.fontWeight)
    return 'normal';
  // If no variant is specified, return the Typography Size in our theme
  if (!props.variant) return props.theme.typograph.fontWeight;
  // Dynamically determine the Typography Size based on props
  let fontWeight;
  switch (props.variant) {
    case 'headline_1':
      fontWeight = props.theme.typograph.headline_1.fontWeight;
      break;
    case 'headline_2':
      fontWeight = props.theme.typograph.headline_2.fontWeight;
      break;
    case 'headline_3':
      fontWeight = props.theme.typograph.headline_3.fontWeight;
      break;
    case 'headline_4':
      fontWeight = props.theme.typograph.headline_4.fontWeight;
      break;
    case 'headline_5':
      fontWeight = props.theme.typograph.headline_5.fontWeight;
      break;
    case 'headline_6':
      fontWeight = props.theme.typograph.headline_6.fontWeight;
      break;
    case 'subtitle_1':
      fontWeight = props.theme.typograph.subtitle_1.fontWeight;
      break;
    case 'subtitle_2':
      fontWeight = props.theme.typograph.subtitle_2.fontWeight;
      break;
    case 'body_1':
      fontWeight = props.theme.typograph.body_1.fontWeight;
      break;
    case 'body_2':
      fontWeight = props.theme.typograph.body_2.fontWeight;
      break;
    case 'caption':
      fontWeight = props.theme.typograph.caption.fontWeight;
      break;
    case 'overline':
      fontWeight = props.theme.typograph.overline.fontWeight;
      break;
    default:
      fontWeight = props.theme.typograph.fontWeight;
      break;
  }
  return fontWeight;
};
const typographyLetterSpacing = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.typograph.letterSpacing)
    return 'normal';
  // If no variant is specified, return the Typography Size in our theme
  if (!props.variant) return props.theme.typograph.letterSpacing;
  // Dynamically determine the Typography Size based on props
  let letterSpacing;
  switch (props.variant) {
    case 'headline_1':
      letterSpacing = props.theme.typograph.headline_1.letterSpacing;
      break;
    case 'headline_2':
      letterSpacing = props.theme.typograph.headline_2.letterSpacing;
      break;
    case 'headline_3':
      letterSpacing = props.theme.typograph.headline_3.letterSpacing;
      break;
    case 'headline_4':
      letterSpacing = props.theme.typograph.headline_4.letterSpacing;
      break;
    case 'headline_5':
      letterSpacing = props.theme.typograph.headline_5.letterSpacing;
      break;
    case 'headline_6':
      letterSpacing = props.theme.typograph.headline_6.letterSpacing;
      break;
    case 'subtitle_1':
      letterSpacing = props.theme.typograph.subtitle_1.letterSpacing;
      break;
    case 'subtitle_2':
      letterSpacing = props.theme.typograph.subtitle_2.letterSpacing;
      break;
    case 'body_1':
      letterSpacing = props.theme.typograph.body_1.letterSpacing;
      break;
    case 'body_2':
      letterSpacing = props.theme.typograph.body_2.letterSpacing;
      break;
    case 'caption':
      letterSpacing = props.theme.typograph.caption.letterSpacing;
      break;
    case 'overline':
      letterSpacing = props.theme.typograph.overline.letterSpacing;
      break;
    default:
      letterSpacing = props.theme.typograph.letterSpacing;
      break;
  }
  return letterSpacing;
};

const StyledTypography = styled.div`
  color: ${(props) =>
    props.color ? props.color : props.theme.typograph.colorDark};
  font-size: ${(props) => typographyFontSize(props)};
  font-weight: ${(props) => typographyFontWeight(props)};
  letter-spacing: ${(props) => typographyLetterSpacing(props)};
  font-family: ${(props) => props.theme.typograph.fontFamily};
`;

export { StyledTypography };
