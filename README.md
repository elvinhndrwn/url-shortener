# URL Shortener

elvin dwi hendrawan.

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A simple **URL Shortener** application built with **Express.js** and **PostgreSQL**.  
This project serves as a **personal portfolio** to showcase backend development skills, including API creation, database integration, and responsive UI design.

---

## 🔹 Overview

This application allows users to:

- Shorten long URLs into compact, easy-to-share links
- Redirect from short URLs to the original URLs
- Persist URL data in a PostgreSQL database
- Experience a modern and responsive UI with a simple landing page

The project highlights backend capabilities while providing a minimal frontend for demonstration.

---

## 🛠 Technology Stack

- **Backend**: Express.js (Node.js)
- **Database**: PostgreSQL
- **Templating Engine**: EJS
- **Libraries & Tools**:
  - `nanoid` for unique short code generation
  - `serve-favicon` for favicon support
  - `dotenv` for environment variable management
- **Optional**: Redis (for caching)

---

## 💻 Features

- Generate short URLs from long URLs
- Automatic redirection from short URLs
- Responsive and modern landing page
- Favicon support in browser tab

---

## ⚡ Running the Project

1. **Install dependencies**

```bash
npm install
```

2. **Run**

```bash
npm run dev
```

---

## 🌟 Need Improvements

- Check for duplicate URLs to avoid registering the same original URL multiple times
- Integrate Redis caching for performance optimization
