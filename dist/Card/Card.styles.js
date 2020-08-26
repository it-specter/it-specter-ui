import styled from 'styled-components';
const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: ${({
  height
}) => height + 'px'};
  width: 100%;
  background-color: ${props => props.color ? props.color : props.theme.colors.secondary};
  color: ${props => props.theme.typograph.color};
  :hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;
export default StyledCard;