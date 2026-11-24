<div align="center">

# ⚡ ORI-DASHBOARD
### Panel Web Fullstack pour Ori-Bot (Next.js 14 • TypeScript • Prisma • Discord OAuth2)

<img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Prisma-PostgreSQL-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />

</div>

---

## ✨ Architecture & Fonctionnalités
* **Authentification Discord OAuth2** via `NextAuth.js` (`identify` + `guilds`).
* **API REST sécurisée** (`/api/guilds/[guildId]/config`) avec validation stricte **Zod**.
* **Persistance PostgreSQL** gérée via **Prisma ORM** (configurations serveur & historique d'infractions).
* **Interface Dark Mode** réactive construite en **Tailwind CSS** avec gestion des modules en temps réel.
* **Prêt pour la production** : `Dockerfile` multi-stage, `docker-compose.yml` et pipeline CI GitHub Actions.

## 🚀 Démarrage rapide
```bash
git clone https://github.com/whynotzr/ori-dashboard.git
cd ori-dashboard
cp .env.example .env
docker compose up --build
```
