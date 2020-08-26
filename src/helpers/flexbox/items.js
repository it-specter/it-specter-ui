export const flexboxItemsAlignSelf = (props) => {
    // Fallback value if we can't get access to props
    if (!props) return 'flex';
    // Dynamically determine the Flexbox Items Align-Self based on props
    let alignself;
    switch (props.alignself) {
      case 'auto':
        alignself = 'auto';
        break;
      case 'flex-start':
        alignself = 'flex-start';
        break;
    case 'flex-end':
        alignself = 'flex-end';
        break; 
    case 'center':
        alignself = 'center';
        break;   
    case 'baseline':
        alignself = 'baseline';
        break; 
    case 'stretch':
        alignself = 'stretch';
        break;             
      default:
        alignself = 'flex';
        break;
    }
    return alignself;
  };

