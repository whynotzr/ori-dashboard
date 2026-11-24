"use client";

import { useState } from "react";

interface ModuleProps {
  title: string;
  description: string;
  initialEnabled: boolean;
}

export function ModuleToggleCard({ title, description, initialEnabled }: ModuleProps) {
  const [enabled, setEnabled] = useState(initialEnabled);

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface p-5">
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => setEnabled((prev) => !prev)}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
          enabled ? "bg-purple-600" : "bg-gray-700"
        }`}
        aria-label={`Activer ou désactiver ${title}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
