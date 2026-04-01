📘 Project Title

CRUD Using React Router (Google Contacts Clone UI)

📖 Project Description

This project is a Contact Management Application built using React.js and React Router. It allows users to perform complete CRUD operations (Create, Read, Update, Delete) on contacts with a clean and modern UI inspired by Google Contacts.

The application is structured using reusable components, context API for state management, and routing for navigation between different pages.

🚀 Features
➕ Add new contacts
📋 View all contacts
✏️ Edit existing contacts
❌ Delete contacts (move to trash)
⭐ Mark contacts as favorites
🗑️ Trash management system
🔍 View detailed contact information
🎨 Clean UI with Bootstrap styling
🌗 Theme support using Context API
🔀 Routing using React Router
🛠️ Technologies Used
React.js
React Router DOM
Context API (State Management)
Bootstrap (UI Styling)
Vite (Build Tool)

src/
│── components/        # Reusable UI components (Sidebar, Form, Topbar, etc.)
│── pages/             # Different pages (ContactsList, AddContact, EditContact, etc.)
│── context/           # Global state management (Contacts & Theme)
│── styles/            # Custom styling
│── App.jsx            # Main app component
│── main.jsx           # Entry point

🔄 Routing System

The app uses React Router for navigation:

/contacts → View all contacts
/contacts/new → Add new contact
/contacts/:id → View contact details
/contacts/:id/edit → Edit contact
/favorites → Favorite contacts
/trash → Deleted contacts

🧠 How It Works

ContactsProvider (Context API) manages all contact data globally
ThemeProvider handles UI theme settings
React Router handles page navigation
Components like ContactForm, Sidebar, TopBar make UI modular
CRUD operations update the state dynamically

<img width="1920" height="1080" alt="Screenshot 2026-04-01 184424" src="https://github.com/user-attachments/assets/6e13bc67-22d6-4d31-8741-ca9c78a06eca" />
