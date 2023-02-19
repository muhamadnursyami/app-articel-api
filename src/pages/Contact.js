import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className="section">
      <h4 className="section-title">Kamu dapat menghubung dibawah ini : </h4>

      <ul className="section-description">
        <li>
          <a
            href="https://twitter.com/nursami18"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/m.nursami18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/muhamad-nur-syami-93b979221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/muhamadnursyamiGithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
