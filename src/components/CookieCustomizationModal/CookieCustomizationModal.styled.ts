import Switch from '@mui/material/Switch';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 280px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 600;
`;

export const Toggle = styled.div``;

export const Content = styled.div`
  max-width: 336px;
  color: #525252;
`;

export const BtnRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const First = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Second = styled.div``;

export const StyledSwitch = styled(Switch)`
  .MuiTouchRipple-root {
    display: none;
  }
  .MuiSwitch-switchBase,
  .Mui-checked.MuiSwitch-switchBase {
    &:hover {
      background-color: transparent;
    }
  }
  .MuiSwitch-switchBase .MuiSwitch-thumb {
    width: 16px;
    height: 16px;
    background-color: #fff;
    transform: translate(4px, 5px);
  }
  .Mui-checked.MuiSwitch-switchBase .MuiSwitch-thumb {
    transform: translate(0px, 5px);
  }
  .MuiTouchRipple-root {
  }
  .Mui-checked.MuiSwitch-switchBase + .MuiSwitch-track {
    width: 36px;
    height: 20px;
    border-radius: 20px;
    background-color: #4338ca;
    opacity: 1;
  }
  .MuiSwitch-switchBase + .MuiSwitch-track {
    width: 36px;
    height: 20px;
    border-radius: 20px;
    background-color: #d1d5db;
    opacity: 1;
  }
  .Mui-checked.Mui-disabled + .MuiSwitch-track {
    background-color: #d1d5db;
    opacity: 1;
    cursor: not-allowed;
  }
`;
