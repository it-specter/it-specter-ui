export const flexboxContainerDisplay = (props) => {
  // Fallback value if we can't get access to props
  if (!props) return 'flex';
  // Dynamically determine the Flexbox Container Display based on props
  let display;
  switch (props.display) {
    case 'flex':
      display = 'flex';
      break;
    case 'inline-flex':
      display = 'inline-flex';
      break;
    default:
      display = 'flex';
      break;
  }
  return display;
};
export const flexboxContainerDirection = (props) => {
  // Fallback value if we can't get access to props
  if (!props) return 'row';
  // Dynamically determine the Flexbox Container Direction based on props
  let direction;
  switch (props.direction) {
    case 'row':
      direction = 'row';
      break;
    case 'row-reverse':
      direction = 'row-reverse';
      break;
    case 'column':
      direction = 'column';
      break;
    case 'column-reverse':
      direction = 'column-reverse';
      break;
    default:
      direction = 'row';
      break;
  }
  return direction;
};
export const flexboxContainerJustifyContent = (props) => {
  // Fallback value if we can't get access to props
  if (!props) return 'flex-start';
  // Dynamically determine the Flexbox Container Justify-Content based on props
  let justify;
  switch (props.justify) {
    case 'flex-start':
      justify = 'flex-start';
      break;
    case 'flex-end':
      justify = 'flex-end';
      break;
    case 'center':
      justify = 'center';
      break;
    case 'space-between':
      justify = 'space-between';
      break;
    case 'space-around':
      justify = 'space-around';
      break;
    case 'space-evenly':
      justify = 'space-evenly';
      break;
    default:
      justify = 'flex-start';
      break;
  }
  return justify;
};
export const flexboxContainerWrap = (props) => {
  // Fallback value if we can't get access to props
  if (!props) return 'nowrap';
  // Dynamically determine the Flexbox Container Wrap based on props
  let wrap;
  switch (props.wrap) {
    case 'nowrap ':
      wrap = 'nowrap ';
      break;
    case 'wrap':
      wrap = 'inline-flex';
      break;
    case 'wrap-reverse':
      wrap = 'wrap-reverse';
      break;
    default:
      wrap = 'nowrap';
      break;
  }
  return wrap;
};
export const flexboxContainerAlignItems = (props) => {
  // Fallback value if we can't get access to props
  if (!props) return 'flex-start';
  // Dynamically determine the Flexbox Container Align-Items based on props
  let alignitems;
  switch (props.alignitems) {
    case 'stretch':
      alignitems = 'stretch';
      break;
    case 'flex-start':
      alignitems = 'flex-start';
      break;
    case 'center':
      alignitems = 'center';
      break;
    case 'flex-end':
      alignitems = 'flex-end';
      break;
    case 'baseline':
      alignitems = 'baseline';
      break;
    default:
      alignitems = 'flex-start';
      break;
  }
  return alignitems;
};
export const flexboxContainerAlignContent = (props) => {
  // Fallback value if we can't get access to props
  if (!props) return 'flex-start';
  // Dynamically determine the Flexbox Container Align-Content based on props
  let aligncontent;
  switch (props.aligncontent) {
    case 'stretch':
      aligncontent = 'stretch';
      break;
    case 'flex-start':
      aligncontent = 'flex-start';
      break;
    case 'center':
      aligncontent = 'center';
      break;
    case 'flex-end':
      aligncontent = 'flex-end';
      break;
    case 'space-between':
      aligncontent = 'space-between';
      break;
    case 'space-around':
      aligncontent = 'space-around';
      break;
    default:
      aligncontent = 'flex-start';
      break;
  }
  return aligncontent;
};
