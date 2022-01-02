import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  color: white;
  min-height: 80px;
  & > div {
    width: 100%;
    margin: auto;
  }
  .header-items {
    display: flex;
    max-width: 768px;
    margin: auto;
    justify-content: space-between;
    line-height: 20px;
  }
  .header-navigation {
    display: flex;
    div {
      transition: 0.2s;
      font-weight: 600;
      margin-right: 16px;
      opacity: 0.8;
      &:hover {
        color: rgb(255, 255, 255);
        opacity: 1;
        cursor: pointer;
      }
      a {
        text-decoration: auto;
        color: white;
      }
      .active {
        background: rgb(45 66 161);
        padding: 4px 12px;
        border-radius: 5px;
        border: 1px solid #2c324e;
      }
    }
  }
  .header-social {
    display: flex;
    div {
      margin: 0 5px;
    }
  }
`;
