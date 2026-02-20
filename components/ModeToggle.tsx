"use client";

import { useMode } from "@/app/ModeContext";

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-lg">
      <button
        onClick={() => setMode("enterprise")}
        className={`px-3 py-1 rounded-md text-sm transition ${
          mode === "enterprise"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        Enterprise
      </button>

      <button
        onClick={() => setMode("campus")}
        className={`px-3 py-1 rounded-md text-sm transition ${
          mode === "campus"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        Campus
      </button>
    </div>
  );
}