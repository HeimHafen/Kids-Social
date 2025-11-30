// src/routes/AuthScreen.tsx
import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { supabase } from "../lib/supabaseClient";

export const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    const redirectTo = window.location.origin; // nach Login zurück auf App

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      console.error(error);
      setErrorMsg(error.message);
      setStatus("error");
      return;
    }

    setStatus("sent");
  }

  return (
    <div className="ks-auth-root">
      <div className="ks-auth-card">
        <h1 className="ks-auth-title">Kids-Social – Eltern-Login</h1>
        <p className="ks-auth-sub">
          Gib deine E-Mail ein. Wir schicken dir einen sicheren Login-Link.
        </p>

        <form onSubmit={handleSubmit} className="ks-auth-form">
          <label className="ks-auth-label">
            E-Mail-Adresse
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ks-auth-input"
              placeholder="du@example.com"
            />
          </label>

          <Button
            type="submit"
            disabled={status === "sending"}
            variant="primary"
          >
            {status === "sending" ? "Sende Link..." : "Login-Link schicken"}
          </Button>
        </form>

        {status === "sent" && (
          <p className="ks-auth-hint">
            Check deine E-Mails – der Login-Link ist unterwegs.
          </p>
        )}
        {status === "error" && errorMsg && (
          <p className="ks-auth-error">Fehler: {errorMsg}</p>
        )}
      </div>
    </div>
  );
};