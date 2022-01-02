import * as S from "./styles";

const Card = () => {
  return (
    <S.Card>
      <img src="https://picsum.photos/180/180" alt="" width="48" height="48" />
      <div className="card-information">
        <h1>John Doe</h1>
        <small>Software Developer | @Company</small>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </S.Card>
  );
};

export default Card;
