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
      padding: 8px;
      transition: 0.2s;
      font-weight: 600;
      margin-right: 16px;
      opacity: 0.8;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        color: rgb(255, 255, 255);
        opacity: 1;
        cursor: pointer;
      }
      a {
        text-decoration: auto;
        color: white;
      }
    }
  }
  .header-social {
    display: flex;
    align-items: center;
    div {
      cursor: pointer;
      margin: 0 5px;
      padding: 4px;
      border-radius: 5px;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .sticky-wrapper {
    position: relative;
  }

  .sticky .sticky-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #0b174e;
    padding: 10px 0;
  }
`;
