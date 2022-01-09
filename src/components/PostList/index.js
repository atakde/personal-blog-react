import React, { useEffect, useState } from "react";
import PostItem from "../PostItem";
import { getPostsFromServer } from "../../api";
import Loader from "react-loader-spinner";
import * as S from "./styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    getPostsFromServer().then((result) => {
      const postData = [];
      result.map((each) => {
        postData.push({
          title: each.title,
          imgUrl: "https://picsum.photos/700/400",
          date: new Date().toLocaleDateString(),
          description: each.body,
          tags: ["test", "tag"],
        });
      });
      setPosts(postData);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, []);

  return (
    <React.Fragment>
      {isLoading && (
        <S.LoaderWrapper>
          <Loader color="white" type="Triangle" />
        </S.LoaderWrapper>
      )}

      {!isLoading &&
        posts.map((el) => {
          return (
            <PostItem
              title={el.title}
              imgUrl={el.imgUrl}
              date={el.date}
              description={el.description}
              tags={el.tags}
            />
          );
        })}
    </React.Fragment>
  );
};

export default PostList;
