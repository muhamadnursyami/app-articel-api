import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function BlogDetails() {
  const [articleId, setArticleId] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundArticel, setNotFoundArticel] = useState(false);
  const params = useParams();
  useEffect(() => {
    async function FetchApiId() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`
      );
      // Jika requestnya gagal, di harus berada sebelum reques.json().
      if (!request.ok) {
        return setNotFoundArticel(true);
      }
      const result = await request.json();
      // console.log(result);
      document.title = result.title;
      setIsLoading(true);
      setArticleId(result);
    }
    FetchApiId();
  }, [params]);

  if (notFoundArticel) {
    return <p>Articel Tidak ditemukan :(</p>;
  }
  return (
    <div className="section">
      {!isLoading && <p>Loadiing</p>}
      <h3 className="articel-title-details">{articleId.title}</h3>
      <time className="articel-time-details">
        {new Date(articleId.publishedAt).toLocaleDateString()}
      </time>
      <img
        src={articleId.imageUrl}
        alt={articleId.title}
        className="articel-image"
      />
      <p className="articel-newsite"> New Site :{articleId.newsSite}</p>
      <p className="articel-summary">Summary : {articleId.summary}</p>
    </div>
  );
}
