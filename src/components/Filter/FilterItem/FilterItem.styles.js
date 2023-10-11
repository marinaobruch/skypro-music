import { styled } from "styled-components";

export const FilterForm = styled.div`
  margin-top: 10px;
  width: 248px;
  height: 305px;
  background-color: #313131;
  position: absolute;
  border-radius: 12px;

  overflow-y: auto;
  overflow-x: auto;
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
