# 📊 SaaS Finance Dashboard

full-stack Finance SaaS platform built to help users gain total clarity over their financial landscape. Built with the 2026 modern web stack, it enables real-time tracking of income and expenses, automated bank synchronization.

---

## 🚀 Key Features

*   **Interactive Dashboard:** High-performance overview of net income, expenses, and account balances using dynamic Recharts (Area, Line, and Bar).
*   **Smart CSV Uploads:** Bulk import transactions from existing bank statements using a custom-built CSV parser.
*   **Advanced Transaction Management:** Add, edit, and categorize transactions with a powerful Shadcn/UI data table featuring multi-select and bulk actions.
*   **Security:** Bank-grade encryption and secure authentication powered by **Clerk**.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **API Layer:** [Hono.js](https://hono.dev) (High-performance Edge API)
- **Authentication:** [Clerk](https://clerk.com)
- **Database:** [Neon PostgreSQL](https://neon.tech)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **State Management:** [Tanstack React Query](https://tanstack.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) & [Shadcn/UI](https://ui.shadcn.com)

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/rupeshpatil27/finance-dashboard-nextjs.git
cd finance-dashboard-nextjs
```

### 2. Install dependencies
```bash
npm insall
```

### 3. Environment Setup
Create a .env.local file in the root and add your credentials:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=...
NEXT_PUBLIC_CLERK_SIGN_UP_URL=...
NEXT_PUBLIC_APP_URL=...
DATABASE_URL=...
```

### 4. Database Initialization

```bash
npm run generate
npm run migrate
npm run studio
```