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

export const MainButton = styled.div``;

export const FilterButton = styled.div`
  position: relative;
  color: ${(props) => (props.clicked ? "#b672ff" : "#ffffff")};
  border: ${(props) =>
    props.clicked ? "1px solid #b672ff" : "1px solid #ffffff"};
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

export const FilterPupUp = styled.div`
  background: #313131;
  border-radius: 12px;
  box-sizing: border-box;
  min-width: 269px;
  padding: 32px;
  position: absolute;
`;

export const FilterPupUpList = styled.div`
  max-height: 212px;
  max-width: 242px;
  overflow-y: auto;
`;

export const FilterCounter = styled.span`
  color: white;
  background-color: rgb(173, 97, 255);
  width: 26px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-family: StratosSkyeng;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`;

export const FilterItem = styled.li`
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-bottom: 28px;
  color: ${(props) => (props.clicked ? "#b672ff" : "#ffffff")};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  &:hover {
    color: #b672ff;
    cursor: pointer;
    text-decoration: underline #b672ff;
  }
`;
