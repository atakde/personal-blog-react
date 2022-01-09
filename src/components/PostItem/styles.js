import styled from "styled-components";

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #2c324e;
  border-radius: 4px;
  background: #111e58;
  margin: 40px 0;
  opacity: 0.8;
  transition: 0.2s;
  img {
    max-width: 100%;
    height: auto;
  }
  small {
    font-size: 14px;
  }
  & > div {
    padding: 12px 0;
  }
  &:hover {
    opacity: 1;
  }
  h3, p, img {
    cursor: pointer;
  }
`;
