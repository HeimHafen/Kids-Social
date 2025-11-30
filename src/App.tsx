import React, { useState } from "react";
import { ParentApp } from "./routes/ParentApp";
import { KidApp } from "./routes/KidApp";
import { Button } from "./components/ui/Button";

export const App: React.FC = () => {
  const [mode, setMode] = useState<"parent" | "kid">("kid");

  return (
    <div>
      <div className="ks-toggle-bar">
        <span className="ks-text-muted">Ansicht wechseln:</span>
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
          Kids
        </Button>
      </div>

      {mode === "parent" ? <ParentApp /> : <KidApp />}
    </div>
  );
};