# Full-Stack Web App for Corporate Family Day Event

<p align="center">
  <img src="https://live.staticflickr.com/65535/54521812157_dcabf4ac88_b.jpg" width="30%" alt="Login Page" />
</p>

A **React + TypeScript + FastAPI-based event management system** designed for internal corporate use. This cross-platform web app supports over 500 participants, streamlining digital check-ins, group assignments, family registration, live voting, and real-time announcements, all optimized for mobile devices.

---

## 📌 Overview

This project focuses on building a scalable internal tool to manage a **large-scale corporate family day event**. It highlights full-stack capabilities and production-ready implementation using modern web technologies.

It demonstrates:

- Mobile-first UI with real-time QR check-in
- Family registration and automatic group assignment
- Scalable RESTful backend with PostgreSQL
- Cross-platform browser support (iOS & Android)
- Operational efficiency aligned with ESG (Environmental, Social, and Governance) goals

---

## 🖼 Preview

Preview of the main interfaces, including check-in, group info, event map, and team members screen:

<p align="center">
  <img src="https://live.staticflickr.com/65535/54521812157_dcabf4ac88_b.jpg" width="22%" alt="Check-In" />
  <img src="https://live.staticflickr.com/65535/54523038465_035e42714c_b.jpg" width="22%" alt="Main Page" />
  <img src="https://live.staticflickr.com/65535/54522872534_f81be9e4c7_b.jpg" width="22%" alt="Event Map" />
  <img src="https://live.staticflickr.com/65535/54521812082_8e7d8b84cb_b.jpg" width="22%" alt="Team Assignment List" />
</p>

<p align="center">
  <img src="https://live.staticflickr.com/65535/54522680831_34ebfe4bbb_b.jpg" width="22%" alt="Ticket Chekc-in by verication code" />
  <img src="https://live.staticflickr.com/65535/54522680856_b820061ba0_b.jpg" width="22%" alt="Ticket Info" />
  <img src="https://live.staticflickr.com/65535/54522680916_cebe0010e8_b.jpg" width="22%" alt="Live Voting" />
  <img src="https://live.staticflickr.com/65535/54522680851_a47c55bcb5_b.jpg" width="22%" alt="Event Schedule" />
</p>

![API Documentation](https://live.staticflickr.com/65535/54522873169_4ce2b863e5_b.jpg)


---

## ✨ Key Features

- 🔐 **QR Code Check-In** – Scan-based attendance with real-time updates
- 👨‍👩‍👧‍👦 **Family Registration & Grouping** – Auto team assignment by age group
- 🗓️ **Event Schedule & Venue Map** – Mobile-friendly activity timeline
- 🗳️ **Live Voting Module** – Real-time contest voting with instant feedback
- 📊 **Admin Tools** – Excel import, participant stats, group rosters
- 📣 **In-App Notifications** – System-wide announcements for all users
- ⚙️ **Scalability & Performance** – Async backend optimized for 500+ users

---

## 🛠 Tech Stack

| Layer         | Technology                                                              |
|---------------|--------------------------------------------------------------------------|
| Frontend      | React 18, TypeScript, Vite, Ant Design Mobile, Zustand, Less            |
| Backend       | FastAPI, Python, PostgreSQL, SQLAlchemy, Pydantic, Uvicorn, JWT         |
| Dev Tools     | GitHub, Render (CI/CD), PgBouncer, Pandas, Swagger API Docs         |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 16+
- Python 3.11+
- PostgreSQL database
- npm or yarn

### Frontend Setup

```bash
git clone https://github.com/your-username/family-day-frontend.git
cd family-day-frontend
npm install
npm run dev
```

### Backend Setup

```bash
git clone https://github.com/your-username/family-day-backend.git
cd family-day-backend
pip install -r requirements.txt
uvicorn main:app --reload
```


---

## 📄 License

This project is **not open source**. All rights reserved by the author.

You are **not permitted to use, modify, or distribute** this project or any part of its code without explicit written permission from the author.

For collaboration or licensing inquiries, please contact: [lawrencechuang.com](https://lawrencechuang.com)
