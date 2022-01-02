import * as S from "./styles";

const Tag = (props) => {
  return (
    <S.Tag>
      {props.data.map((tag, key) => {
        return <span key={key}>#{tag}</span>;
      })}
    </S.Tag>
  );
};

export default Tag;
