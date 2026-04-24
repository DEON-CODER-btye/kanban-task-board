# Live Link : https://deft-bonbon-3d5fc3.netlify.app/

# 🧠 Kanban Task Board (Drag & Drop)

A simple and interactive **Kanban Task Board** built using **JavaScript, Tailwind CSS, and SortableJS**.
Users can create tasks, move them between columns using drag-and-drop, and manage their workflow efficiently.

---

## 🚀 Features

- ✅ Add new tasks
- 🔄 Drag & Drop tasks between columns (Todo → Doing → Done)
- 💾 Data persistence using LocalStorage
- 🗑️ Delete completed tasks
- 🎯 Status update with buttons
- 🌙 Light / Dark mode toggle
- ⚡ Smooth animations with drag-and-drop

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (Vanilla JS)
- SortableJS (for drag & drop)

---

## 📂 Project Structure

```
📁 project-folder
 ├── index.html
 ├── style.css
 ├── output.css   (Tailwind build)
 ├── script.js
```

---

## ⚙️ How It Works

### 🔹 Task Flow

- Tasks are stored in an array (`data`)
- Each task has:

  ```js
  {
    id: number,
    title: string,
    status: "Todo" | "Doing" | "Done"
  }
  ```

### 🔹 Drag & Drop Logic

- SortableJS handles UI dragging
- On drop:
  - Detect container
  - Update task status
  - Save to LocalStorage

### 🔹 Local Storage

- Tasks are saved using:

  ```js
  localStorage.setItem("keys", JSON.stringify(data));
  ```

- Reload → data persists

---

## 🎨 Theme System

- Light / Dark mode toggle
- Mode saved in LocalStorage
- UI updates dynamically

---

## 🔥 Future Improvements

- ✏️ Edit task feature
- 📱 Better mobile drag support
- 🎯 Task priority labels
- 📅 Due dates
- 🧩 Custom drag system (Trello-style)

---

## 💡 Learning Highlights

- DOM Manipulation
- Event Handling
- Drag & Drop APIs
- State Management
- LocalStorage usage
- UI/UX thinking
