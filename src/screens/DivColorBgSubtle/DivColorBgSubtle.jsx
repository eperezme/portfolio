import React from "react";
import "./style.css";

export const DivColorBgSubtle = () => {
  return (
    <div className="div-color-bg-subtle">
      <div className="div-container-xl">
        <div className="list">
          <div className="item-margin">
            <div className="div">© 2023 GitHub, Inc.</div>
          </div>
          <div className="div-wrapper">
            <a
              className="div"
              href="https://docs.github.com/site-policy/github-terms/github-terms-of-service"
              rel="noopener noreferrer"
              target="_blank"
            >
              Terms
            </a>
          </div>
          <div className="div-wrapper">
            <div className="item">
              <p className="div">
                <a
                  href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper">Privacy</span>
                </a>
                <span className="text-wrapper"> (</span>
                <a href="https://github.com/github/site-policy/pull/582" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper">Updated 08/2022</span>
                </a>
                <span className="text-wrapper">)</span>
              </p>
            </div>
          </div>
          <div className="div-wrapper">
            <a className="div" href="https://github.com/sitemap" rel="noopener noreferrer" target="_blank">
              Sitemap
            </a>
          </div>
          <div className="item-link-what-is-wrapper">
            <a className="div" href="https://github.com/git-guides" rel="noopener noreferrer" target="_blank">
              What is Git?
            </a>
          </div>
        </div>
        <div className="list-2">
          <div className="item-link-x-wrapper">
            <a href="https://x.com/github" rel="noopener noreferrer" target="_blank">
              <img className="item-link-x" alt="Item link x" src="/img/item-link-x-023c3ca5e173-svg.svg" />
            </a>
          </div>
          <div className="item-link-facebook-wrapper">
            <a href="https://www.facebook.com/GitHub" rel="noopener noreferrer" target="_blank">
              <img className="img" alt="Item link facebook" src="/img/item-link-facebook-de85282d23e6-svg.svg" />
            </a>
          </div>
          <div className="item-link-linkedin-wrapper">
            <a href="https://www.linkedin.com/company/github" rel="noopener noreferrer" target="_blank">
              <img
                className="item-link-linkedin"
                alt="Item link linkedin"
                src="/img/item-link-linkedin-3c0ace8edb5f-svg.svg"
              />
            </a>
          </div>
          <div className="item-link-youtube-wrapper">
            <a href="https://www.youtube.com/github" rel="noopener noreferrer" target="_blank">
              <img
                className="item-link-youtube"
                alt="Item link youtube"
                src="/img/item-link-youtube-25bc21e924c8-svg.svg"
              />
            </a>
          </div>
          <div className="item-link-twitch-wrapper">
            <a href="https://www.twitch.tv/github" rel="noopener noreferrer" target="_blank">
              <img className="img" alt="Item link twitch" src="/img/item-link-twitch-e576606a89a7-svg.svg" />
            </a>
          </div>
          <div className="item-link-tiktok-wrapper">
            <a href="https://www.tiktok.com/@github" rel="noopener noreferrer" target="_blank">
              <img className="img" alt="Item link tiktok" src="/img/item-link-tiktok-5d12d948d920-svg.svg" />
            </a>
          </div>
          <div className="link-github-mark-wrapper">
            <a href="https://github.com/github" rel="noopener noreferrer" target="_blank">
              <img
                className="link-github-mark"
                alt="Link github mark"
                src="/img/link-github-mark-9be88460eaa6-svg.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
