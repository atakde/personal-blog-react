import * as S from "./styles";
import Tag from "../Tag";

const PostItem = (props) => {
  return (
    <S.PostItem>
      <img src={props.imgUrl}></img>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>{props.description}</p>
      <div>
        <Tag data={props.tags} />
      </div>
    </S.PostItem>
  );
};

export default PostItem;
