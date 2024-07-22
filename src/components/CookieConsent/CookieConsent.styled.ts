import styled from 'styled-components';

export const Wrap = styled.div`
  box-sizing: border-box;
  padding: 24px 32px;
  position: fixed;
  bottom: 0;
`;

export const Title = styled.div`
  color: #171717;
  margin-bottom: 4px;
`;

export const Content = styled.div`
  margin-bottom: 24px;
  color: #525252;
`;

export const BtnRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 450px) {
    width: 100%;
    flex-direction: column;
    gap: 8px;
  }
`;

export const ManageCookies = styled.div`
  min-width: 137px;
  width: 100%;
`;
