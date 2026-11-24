import { StatsGrid } from "@/components/StatsGrid";
import { ModuleToggleCard } from "@/components/ModuleToggleCard";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <header className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            ⚡ ORI<span className="text-purple-400">DASHBOARD</span>
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Centre de contrôle temps réel pour ton bot Discord Ori-Bot.
          </p>
        </div>
        <a
          href="/api/auth/signin"
          className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500"
        >
          Connexion avec Discord
        </a>
      </header>

      <StatsGrid />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Modules du Serveur</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ModuleToggleCard
            title="🛡️ Auto-Modération"
            description="Anti-spam, filtrage de liens malveillants et logs automatiques."
            initialEnabled={true}
          />
          <ModuleToggleCard
            title="📈 Système de Niveaux & XP"
            description="Attribution d'XP par message, cartes de rang et classements."
            initialEnabled={true}
          />
          <ModuleToggleCard
            title="🧠 Commandes IA"
            description="Commandes slash intelligentes, résumés et génération assistée."
            initialEnabled={true}
          />
          <ModuleToggleCard
            title="🎟️ Reaction Roles & Bienvenue"
            description="Attribution automatique de rôles et messages d'accueil personnalisés."
            initialEnabled={false}
          />
        </div>
      </section>
    </main>
  );
}
