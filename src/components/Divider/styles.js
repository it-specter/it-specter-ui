import styled from 'styled-components';

const StyledDividerList = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
const StyledDividerInset = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  margin-left: 72px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
const StyledDividerSubheader = styled.div`
  border: none;
  height: 1px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
  list-style: none;
`;
const StyledDividerSubheaderList = styled.div`
  margin: 0 0 0 16px;
  padding: 5px;
  display: block;
  list-style: none;
  color: rgba(0, 0, 0, 0.54);
`;
const StyledDividerSubheaderInset = styled.div`
  margin: 0 0 0 0px;
  padding: 5px;
  display: block;
  list-style: none;
  color: rgba(0, 0, 0, 0.54);
`;
const StyledDividerMiddle = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  margin-left: 16px;
  margin-right: 16px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;

export {
  StyledDividerMiddle,
  StyledDividerSubheaderInset,
  StyledDividerSubheaderList,
  StyledDividerSubheader,
  StyledDividerInset,
  StyledDividerList,
};
