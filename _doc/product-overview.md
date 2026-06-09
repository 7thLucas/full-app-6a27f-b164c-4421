# Product Overview

## Product Name
SaaS Admin Base Template

## What It Is
A production-ready full-stack SaaS starter and admin dashboard scaffold — built on Remix (Vite plugin), Express (custom server), TypeScript, Tailwind CSS, shadcn/ui, and MongoDB (Mongoose + Typegoose). Ships with RBAC, a modular feature injection system, and a clean admin portal so teams can launch admin-grade products without rebuilding the same plumbing on every project.

## Current Build State
- **Landing page**: single-page entry point with a "Hello World" hero section (initial MVP)
- Full-stack backbone wired: Remix frontend + Express backend + MongoDB persistence
- Role-Based Access Control (RBAC) via `authGuard` + `permissionGuard`
- Modular architecture: isolated feature modules under `app/modules/<slug>/`
- Admin dashboard layout with sidebar navigation and portal layouts

## Target Users
- **Developers / indie builders** — want a solid, opinionated full-stack foundation without configuration hell
- **Product teams** — need a scalable admin dashboard scaffold to extend quickly and consistently
- **Agencies** — need a reliable, repeatable SaaS starter to kick off client projects fast

## Positioning
The cleanest, most pre-wired full-stack SaaS admin starter. Auth, RBAC, modular routing, admin UI — everything a team would otherwise spend weeks rebuilding — ships on day one, convention-driven and ready to extend.

## Brand & Tone
Technical but calm. Modern editorial aesthetic. Minimal, clean, premium. Confident without being loud — solid infrastructure, no noise. Naming and framing are direct and flat: lead with the product name and what it does, not with punchy slogans or exclamatory value propositions.

## Core Strategic Principles
- **Modular by design**: every feature is an injected, self-contained module — not a monolithic blob
- **Convention-driven**: flat routes, kebab-case files, consistent API response formatting, no guesswork
- **Minimal surface area**: primitives stay stable; only touch what's necessary; extend don't rewrite
- **Composition over configuration**: pages compose module components; modules own their own logic

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Remix (Vite plugin) + Express (custom server) |
| Language | TypeScript |
| Routing | Remix Flat Routes (frontend) / Express Router (backend) |
| Styling | Tailwind CSS + shadcn/ui |
| Database | MongoDB — Mongoose + Typegoose |
| State | React Hooks + local Context |
