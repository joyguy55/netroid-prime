import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <Article>
      <article className="uk-article">
        <h1 className="uk-article-title">
          <a className="uk-link-reset" href="">
            Mission Statement
          </a>
        </h1>

        <p className="uk-article-meta">
          Sincerely the <a href="#">Netroid Prime Team</a>
        </p>

        <p className="uk-text-lead">
          Netroid prime is a site dedicated to enabling Netrunner community
          collaboration in both the creation of future Netrunner sets and the
          play testing of those sets.
        </p>

        <p>
          Netroid prime provides a service to both curate community ideas for
          future cards as well as a simple format for print and play of those
          cards.
        </p>

        <p>
          Netroid prime is also seeking donations for both the artwork of
          community chosen cards and future printing of those cards.
        </p>

        <p>
          All donations support a future where you can commission affordable
          prints of your own Netrunner cards. Check our donation page to see
          what our current goal is.
        </p>

        <div className="uk-grid-small uk-child-width-auto" uk-grid>
          <div>
            <a className="uk-button uk-button-text" href="#">
              Learn more
            </a>
          </div>
        </div>
      </article>
    </Article>
  );
};

const Article = styled.div`
  width: 45%;
  margin: 50px auto;
`;
