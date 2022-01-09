import * as S from "./styles";

const Card = () => {
  return (
    <S.Card>
      <img
        src="https://doodleipsum.com/180x180/avatar-3?bg=825DEB&i=cb2d7620cdcb7f2847d8c49486bb0343"
        alt=""
        width="48"
        height="48"
      />
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
