import React from "react";
import { Page } from "../components/layout/Page";

export const KidApp: React.FC = () => {
  return (
    <Page title="Kids-Feed">
      <section className="ks-section-inner">
        <div className="ks-phone-frame ks-phone-frame-inline">
          <div className="ks-phone-top">
            <span className="ks-pill">Kids-Feed (Demo)</span>
          </div>
          <div className="ks-phone-content">
            <div className="ks-post">
              <div className="ks-post-header">
                <div className="ks-avatar ks-avatar-1">L</div>
                <div>
                  <div className="ks-post-name">Lena</div>
                  <div className="ks-post-meta">heute · nur Freunde</div>
                </div>
              </div>
              <p className="ks-post-text">Schaut mal, meine neue Zeichnung 🐉</p>
              <div className="ks-post-badges">
                <span>🎨 kreativ</span>
                <span>💬 3</span>
              </div>
            </div>

            <div className="ks-post">
              <div className="ks-post-header">
                <div className="ks-avatar ks-avatar-2">M</div>
                <div>
                  <div className="ks-post-name">Mika</div>
                  <div className="ks-post-meta">vor 10 Min · Klasse 5b</div>
                </div>
              </div>
              <p className="ks-post-text">
                Wer kommt heute zum Skateplatz? 🛹
              </p>
              <div className="ks-post-reactions">
                <span>😄</span>
                <span>🔥</span>
                <span>👍</span>
              </div>
            </div>

            <div className="ks-phone-footer">
              <span className="ks-pill-alt">
                Nur echte Freund*innen · Keine Fremden
              </span>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};