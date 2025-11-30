// src/App.tsx
import React, { useState } from "react";
import { ParentApp } from "./routes/ParentApp";
import { KidApp } from "./routes/KidApp";
import { Button } from "./components/ui/Button";
import { useSupabaseAuth } from "./hooks/useSupabaseAuth";
import { AuthScreen } from "./routes/AuthScreen";

export const App: React.FC = () => {
  const { user, loading, signOut } = useSupabaseAuth();
  const [mode, setMode] = useState<"parent" | "kid">("kid");

  if (loading) {
    return (
      <div className="ks-auth-root">
        <div className="ks-auth-card">
          <p>Lade Kids-Social…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div>
      <div className="ks-toggle-bar">
        <span className="ks-text-muted">
          Eingeloggt als <strong>{user.email}</strong>
        </span>
        <span className="ks-text-muted" style={{ marginLeft: "auto" }}>
          Ansicht:
        </span>
        <Button
          variant={mode === "parent" ? "primary" : "ghost"}
          onClick={() => setMode("parent")}
        >
          Eltern
        </Button>
        <Button
          variant={mode === "kid" ? "primary" : "ghost"}
          onClick={() => setMode("kid")}
        >
          Kids (Demo)
        </Button>
        <Button variant="ghost" onClick={signOut}>
          Logout
        </Button>
      </div>

      {mode === "parent" ? <ParentApp /> : <KidApp />}
    </div>
  );
};