# 📊 Attendance Tracker

A simple and interactive **React-based Attendance Tracker** that allows users to view, filter, and analyze student attendance data efficiently.

---


## 📌 Features

* 📋 Display list of students with attendance percentage
* ✅ Filter students by:

  * All Students
  * Present (≥ 75%)
  * Absent (< 75%)
* ⚠️ Highlight students with low attendance (< 75%)
* 📌 Click on a student row to highlight selection
* 🔄 Sort students by attendance (highest → lowest)
* ⏳ Loading state while fetching data
* ❌ Error handling for API failures

---

## 🛠️ Tech Stack

* ⚛️ React.js
* 📜 JavaScript (ES6+)
* 🎨 HTML & CSS
* 🌐 Fetch API

---

## 📂 Project Structure

```
attendance-tracker/
│── public/
│── src/
│   ├── AttendanceTracker.js
│   ├── App.js
│   ├── App.css
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Somya1503/ReactProject__1.git
```

2. Navigate to the project folder:

```bash
cd ReactProject__1
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm start
```



## 🌐 API Used

This project uses a free public API:

* https://jsonplaceholder.typicode.com/users

---

## 💡 How It Works

1. Fetches student data from API
2. Assigns random attendance percentage (0–100%)
3. Categorizes students:

   * ≥ 75% → Present
   * < 75% → Absent
4. Applies filters and sorting dynamically
5. Updates UI based on user interaction

---

## 🔮 Future Improvements

* 🔍 Add search functionality
* 📊 Add charts/graphs for visualization
* 🗄️ Integrate backend for real data storage
* 🎨 Improve UI using Tailwind CSS or Material UI
* 📱 Make it fully responsive

---

## 🧠 Learnings

* React state management using `useState`
* Side effects handling using `useEffect`
* Conditional rendering and filtering logic
* API integration using Fetch
* Building interactive UI components

---
