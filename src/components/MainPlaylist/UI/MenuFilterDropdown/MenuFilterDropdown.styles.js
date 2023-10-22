import { styled } from "styled-components";

export const MainCenterBlockFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CenterBlockFilter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterPupUp = styled.div`
  background: #313131;
  border-radius: 12px;
  box-sizing: border-box;
  left: 0;
  min-width: 269px;
  padding: 32px;
  position: absolute;
  top: 50px;
`;

export const FilterPupUpList = styled.div`
  max-height: 212px;
  max-width: 242px;
  overflow-y: auto;
`;

export const FilterItem = styled.option`
  font-size: 20px;
  line-height: 24px;
  padding-left: 34px;
  padding-right: 34px;
  padding-bottom: 28px;
  color: #ffffff;

  &:hover {
    color: #b672ff;
    cursor: pointer;
  }

  &:first-child {
    padding-top: 36px;
  }
`;

export const FilterButton = styled.div`
  color: ${(props) => (props.isClicked ? "#b672ff" : "#ffffff")};
  border: ${(props) =>
    props.isClicked ? "1px solid #b672ff" : "1px solid #ffffff"};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 60px;
  padding: 6px 20px;
  margin-right: 10px;

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`;
