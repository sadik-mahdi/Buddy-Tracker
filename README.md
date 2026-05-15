# 🌿 KeenKeeper

### Build Stronger Friendships Through Meaningful Connections

KeenKeeper is a modern relationship management web application that helps users maintain and nurture friendships by tracking interactions such as 📞 Calls, 💬 Texts, and 🎥 Video Chats.


### 🚀 Live Features
📌 Interaction Tracking • 📊 Analytics Dashboard • 🕒 Dynamic Timeline • 🎯 Smart Filtering


# 📖 Project Overview

KeenKeeper allows users to manage their social connections in a more intentional way. Users can interact with friends through different communication methods and monitor their relationship activities visually through timelines and analytics.

The project focuses on:
- Relationship awareness
- Communication consistency
- Data visualization
- Clean and responsive UI/UX


# ⚙️ Technologies Used


| Frontend | Styling | State Management | Visualization |
|----------|----------|------------------|----------------|
| React.js | Tailwind CSS | Context API | Recharts |
| React Router | DaisyUI | useContext Hook | Pie Charts |
| React Icons | Responsive Design | Global State | Analytics UI |


# ✨ Core Features

## 📞 1. Multi-Type Interaction Tracking

Users can log different communication activities directly from the Friend Details page:

- Call Interaction
- Text Interaction
- Video Interaction

Each activity is dynamically stored with its own interaction type.

## 🕒 2. Dynamic Timeline System

The Timeline page displays all user interactions in real time using Context API.

### Features Included:
- Real-time updates
- Dynamic icons by interaction type
- Activity filtering system
- Organized interaction history

### Available Filters:
- All
- Calls
- Texts
- Videos

## 📊 3. Analytics Dashboard

KeenKeeper includes a professional analytics section powered by **Recharts**.

### Analytics Features:
- Donut Pie Chart Visualization
- Call/Text/Video distribution tracking
- Responsive chart rendering
- Modern dashboard card design

# 🧠 React Concepts Implemented

This project demonstrates practical implementation of:

- React Functional Components
- React Router
- Context API
- Shared Global State
- Dynamic Rendering
- Conditional Rendering
- Event Handling
- Array Mapping & Filtering
- Recharts Integration
- Responsive UI Design

---

# 📂 Project Structure

```bash
src/
│
├── Components/
├── Pages/
│   ├── FriendDetails/
│   ├── Timeline/
│   └── Analytics/
│
├── Context/
│   ├── TimeLineContext.jsx
│   └── TimeLineProvider.jsx
│
├── Routes/
└── App.jsx