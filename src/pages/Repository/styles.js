import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: white;
    font-size: 16px;
    display: flex;
    text-align: right;
    right: 0;
    text-decoration: none;
    border: 1px solid #7159c1;
    border-radius: 4px;
    padding: 5px 8px;
    background-color: #7159c1;
    transition: filter 500s;

    &:hover {
      filter: opacity(0.9);
      background-color: #7118c1;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: yellow;
          color: #333;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          margin-left: 10px;
          padding: 3px 4px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
