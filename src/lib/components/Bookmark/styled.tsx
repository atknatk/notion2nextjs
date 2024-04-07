import styled from '@emotion/styled'

export const Container = styled.a`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 108px;

  background-color: #ffffff;
  border: 1px solid rgba(55, 53, 47, 0.16);
  border-radius: 3px;
  overflow: hidden;
  text-decoration: none;
  color: #333333;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(55, 53, 47, 0.08);
    }
  }

  & > .image {
    flex: 1 1 180px;

    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  & > .content {
    flex: 4 1 180px;
    padding: 12px 14px 14px;
    box-sizing: border-box;
    text-align: left;

    min-width: 0;
    width: 100%;
    height: 100%;

    & > .title {
      margin: 0 0 2px 0;
      font-size: 14px;
      line-height: 20px;
      color: rgb(55, 53, 47);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 24px;
    }
    & > .description {
      font-size: 12px;
      line-height: 16px;
      color: rgba(55, 53, 47, 0.65);
      height: 32px;
      overflow: hidden;

      p {
        margin: 0;
      }
    }

    & > .url {
      margin-top: 6px;

      display: flex;
      min-width: 0;

      img {
        margin-right: 6px;

        width: 16px;
        height: 16px;
      }

      p {
        margin: 0;

        font-size: 12px;
        line-height: 16px;
        color: rgb(55, 53, 47);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`
