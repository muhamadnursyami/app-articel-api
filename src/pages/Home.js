import React, { useEffect } from "react";

export default function Home() {
  //Untuk mengubah title di atas newtab jika kita akses home maka home jika title maka title
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="section">
      <h3 className="section-title">Selamat datang di website saya</h3>

      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
        dicta soluta maiores dolores, similique, consequuntur eum repellat ut
        ratione illum odio dolore natus distinctio commodi officiis sunt. Nisi,
        sunt.
      </p>
    </div>
  );
}
