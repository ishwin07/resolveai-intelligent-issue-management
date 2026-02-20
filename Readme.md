# ResolveAI

ResolveAI is a full-stack web application designed to demonstrate intelligent issue management using AI-assisted workflows.
The platform helps users report, track, and manage operational issues while exploring how automation and decision-support systems can improve resolution processes.

This project was developed as an independent learning and portfolio project focusing on modern web architecture and AI integration.

---

## 🚀 Overview

ResolveAI provides a structured environment where issues can be created, monitored, and resolved through role-based workflows.
Instead of manual coordination, the system introduces AI-assisted logic to help categorize requests and support assignment decisions.

The goal of the project is to showcase how AI services can be integrated into real-world application workflows.

---

## ✨ Features

### Intelligent Issue Handling

* Automatic issue categorization based on user input
* Priority estimation using backend logic
* Assisted routing and assignment workflow
* Timeline and resolution monitoring

### Authentication & Security

* Secure authentication using NextAuth.js
* Role-based access control (RBAC)
* Protected API routes
* JWT session handling

### Multi-Role System

The platform supports multiple roles:

* **Users** — create and track issues
* **Service Providers** — manage assigned tasks
* **Moderators** — oversee workflow operations
* **Administrators** — manage system configuration

### Monitoring & Workflow Support

* Ticket lifecycle tracking
* Status updates and progress visibility
* Escalation simulation for delayed resolutions

---

## 🧱 Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS

### Backend

* Node.js
* Prisma ORM
* PostgreSQL

### AI Integration

* OpenAI API
* Modular agent-based backend services

---

## ⚙️ Local Setup

### Requirements

* Node.js 18+
* PostgreSQL database
* OpenAI API key

---

### Installation

```bash
git clone <your-repository-url>
cd resolveai
npm install
```

---

### Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL=""
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""
OPENAI_API_KEY=""
JWT_SECRET=""
```

---

### Database Setup

Generate Prisma client and push schema:

```bash
npm run db:generate
npm run db:push
```

(Optional — development only)

```bash
npm run db:seed
```

The seed command creates sample data for local testing purposes.

---

### Run the Application

```bash
npm run dev
```

Open your browser at:

http://localhost:3000

---

## 📁 Project Structure

```
app/            → Application routes and layouts
components/     → Reusable UI components
lib/            → Core logic and services
lib/ai/         → AI workflow agents
prisma/         → Database schema and migrations
types/          → Shared TypeScript types
```

---

## 🎯 Learning Objectives

This project explores:

* AI-assisted backend workflows
* Role-based system architecture
* Full-stack development with Next.js
* Database modeling using Prisma
* Authentication and authorization patterns

