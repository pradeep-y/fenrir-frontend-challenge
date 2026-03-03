# Fenrir Security – Frontend Design Challenge

This project is a frontend implementation of the Fenrir Security technical screening task.  
The goal was to recreate three connected screens of a B2B cybersecurity SaaS product using React, based on the provided UI design reference.

---

## 🚀 Live Deployment

Deployed on Vercel:

👉 https://fenrir-frontend-challenge-n8o4j0v70.vercel.app/

(The application opens on the  Sign-up screen as required.)

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- Tailwind CSS
- JavaScript / TypeScript (depending on your setup)
- Mock JSON data (no backend integration)

---

## 📌 Implemented Screens

### 1️⃣ Login / Sign-up Page
- Split layout with gradient background
- Product tagline and feature highlights
- Sign-up form (First Name, Last Name, Email, Password)
- CTA button
- Responsive layout for mobile and desktop

---

### 2️⃣ Dashboard (Scan List Overview)
- Sidebar navigation (Dashboard, Projects, Scans, Schedule, Notifications, Settings, Support)
- Organization stats bar
- Severity cards (Critical, High, Medium, Low)
- Scan table with:
  - Scan Name
  - Type
  - Status (Completed, Scheduled, Failed)
  - Progress bar
  - Vulnerability badges
  - Last scan time
- Search input and action buttons
- Clickable scan rows navigating to Scan Detail page

---

### 3️⃣ Active Scan Detail (Live Console)
- Circular progress indicator
- Step tracker (Spidering, Mapping, Testing, Validating, Reporting)
- Scan metadata section
- Activity Log panel
- Finding Log panel with severity badges
- Structured mock vulnerability entries

---

## 🔄 Navigation Flow

- `/`  Sign-up page  
- `/dashboard` → Main Dashboard  
- `/scan/:id` → Active Scan Detail  

Navigation between screens is handled using React Router.

---

## 📱 Responsiveness

The application is responsive and tested for:
- Desktop (1280px and above)
- Mobile (375px)

Layout adjusts for smaller screens, and scroll behavior is handled appropriately for tables and panels.

---

## 🎨 UI & Styling Approach

- Tailwind CSS utility-first styling
- Reusable UI patterns for:
  - Severity badges
  - Status chips
  - Buttons
  - Cards
- Consistent spacing and typography
- SaaS-style layout structure

---

## 📊 Mock Data

All data is locally mocked to simulate realistic scan results, logs, and vulnerability findings.  
No backend or API integration is used as per the task requirement.

---

## ⚙️ Local Setup Instructions

**1. Clone the repository:** git clone https://github.com/pradeep-y/fenrir-frontend-challenge.git

**2. Navigate into the project folder:** cd fenrir-frontend-challenge

**3. Install dependencies:** npm install

**4. Start development server:** npm run dev

---

## 📝 Notes

- This project was built from scratch based on the provided design reference.
- All UI elements are interactive and connected logically.
- No external dashboard templates were used.
- The focus was on layout accuracy, component structure, and navigation flow.

---

## 📬 Submission

Submitted as part of the Fenrir Security Frontend Design Challenge.

**Author: Pradeep Yadav**
