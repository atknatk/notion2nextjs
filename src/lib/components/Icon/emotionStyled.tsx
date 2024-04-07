import styled from '@emotion/styled'

export const Container = styled.div`
  width: 24px;

  font-size: 16.8px;
  line-height: 20px;
  & > div {
    display: flex;
    width: 24px;
    height: 24px;

    align-items: center;
    justify-content: center;

    & > div {
      width: 16.8px;
      height: 16.8px;
    }
  }
`
