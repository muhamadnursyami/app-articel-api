import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  const [articel, setArticel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const result = await request.json();
      setArticel(result);
    }
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className="section">
      <p className="section-description"> Articel :</p>

      {isLoading ? (
        articel.map((artc) => {
          return (
            <>
              <div key={artc.id} className="articel">
                <p className="articel-title">
                  <Link to={`/blog/${artc.id}`}>{artc.title}</Link>
                </p>
                <time className="articel-time">
                  {new Date(artc.publishedAt).toLocaleDateString()}
                </time>
              </div>
            </>
          );
        })
      ) : (
        <p>sedang loading</p>
      )}
    </div>
  );
}
