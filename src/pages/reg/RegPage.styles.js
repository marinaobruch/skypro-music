import styled from "styled-components";

export const RegisterWrap = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
export const RegisterContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
`;
export const RegisterBtnSingup = styled.button`
  width: 278px;
  height: 62px;
  background-color: #580ea2;
  border-radius: 6px;
  margin-left: 4px;
  border: none;
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #ffffff;

  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
`;
export const RegisterModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
`;
export const RegisterModalForm = styled.form`
width: 366px;
height: 439px;
background-color: #FFFFFF;
border-radius: 12px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 43px 44px 47px 40px;
}

&:first-child {
  margin-bottom: 30px;
}

`;
export const RegisterLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
`;
export const RegisterLogoImg = styled.img`
  width: 140px;
  height: auto;
`;
export const RegisterModalInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-right: 3px;
  margin-bottom: 30px;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;
// export const Register = styled.div``;
