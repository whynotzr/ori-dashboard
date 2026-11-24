import { Shield, Users, Zap, Activity } from "lucide-react";

const metrics = [
  { label: "Serveurs actifs", value: "42", delta: "+12%", icon: Users },
  { label: "Commandes / 24h", value: "14 890", delta: "+24%", icon: Zap },
  { label: "Actions Auto-Mod", value: "318", delta: "-8%", icon: Shield },
  { label: "Latence WebSocket", value: "28 ms", delta: "99.98%", icon: Activity }
];

export function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div
            key={m.label}
            className="rounded-2xl border border-white/10 bg-surface p-5 transition hover:border-purple-500/40"
          >
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-sm">{m.label}</span>
              <Icon className="h-5 w-5 text-purple-400" />
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-white">{m.value}</span>
              <span className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs font-medium text-purple-300">
                {m.delta}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
