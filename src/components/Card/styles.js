import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: #111e58;
  padding: 16px;
  border: 1px solid #2c324e;
  border-radius: 4px;
  opacity: 0.8;
  flex-flow: wrap;
  img {
    width: 180px;
    height: auto;
    border-radius: 50%;
  }
  .card-information {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 25px;
    text-align: left;
    h1 {
      line-height: 1.2;
      font-size: 24px;
    }
  }
`;
