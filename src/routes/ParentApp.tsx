import React from "react";
import { Page } from "../components/layout/Page";
import { Button } from "../components/ui/Button";

export const ParentApp: React.FC = () => {
  return (
    <Page title="Elternbereich">
      <section className="ks-section-inner">
        <h2>Willkommen im Elternbereich 👋</h2>
        <p className="ks-text-muted">
          Hier wirst du später Kinder-Profile anlegen, Kontakte freigeben und
          Meldungen sehen können.
        </p>

        <div className="ks-card ks-card-app">
          <h3>Erste Schritte</h3>
          <ol className="ks-list">
            <li>Familienkonto anlegen</li>
            <li>Kind hinzufügen</li>
            <li>Freund*innen freigeben</li>
          </ol>
          <Button>Demo-Aktion (später ersetzen)</Button>
        </div>
      </section>
    </Page>
  );
};