# Smart Task Manager

Smart Task Manager is a productivity application designed to help users organize, track, and manage their daily tasks efficiently.

## Features

- Create, edit, and delete tasks
- Set deadlines and priorities
- Mark tasks as complete/incomplete
- Categorize tasks by project or tag
- Responsive and user-friendly interface

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Smart-Task-Manager.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Smart-Task-Manager
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```

## Usage

- Add new tasks using the "Add Task" button.
- Edit or delete tasks from the task list.
- Filter and sort tasks by status, priority, or category.

## Technologies Used

- Frontend: [React.js](https://reactjs.org/)
- Backend: [Node.js](https://nodejs.org/) | [Express](https://expressjs.com/) 
- Database: [SQLite](https://www.sqlite.org/) 

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [your.email@example.com](mailto:your.email@example.com).


## Features

- ✅ Add, edit, delete tasks
- ✅ Mark tasks as completed with ✅ tick indicator
- ✅ Categorize tasks (Work, Personal, etc.)
- ✅ Filter tasks by category or deadline (Today, Upcoming, Overdue)
- ✅ Visual feedback when tasks are added
- ✅ Clean and responsive UI with hover animations
- ✅ Persistent storage using SQLite
- ✅ RESTful API built with Express.js

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js, HTML, CSS |
| Backend    | Node.js, Express   |
| Database   | SQLite             |
| API Calls  | Axios              |

---

## 🏗️ Architecture Overview


- React frontend manages UI, state, and routing of user actions.
- Axios is used to communicate with backend API.
- Express handles RESTful routes and interacts with SQLite for data persistence.

---

## 🗃️ Database Schema (SQLite)

### Table: `tasks`

| Field     | Type     | Description              |
|-----------|----------|--------------------------|
| id        | INTEGER  | Primary Key, Auto-increment |
| title     | TEXT     | Task title               |
| category  | TEXT     | Task category            |
| deadline  | TEXT     | Task deadline (YYYY-MM-DD) |
| completed | INTEGER  | 0 = Incomplete, 1 = Done |

---

## ⚙️ How to Run the Project
### Login Page :

Just Put some random Text and you would be good to go.

### 📌 Backend

```bash
cd Backend/backend
npm install (If not present)
node server.js

### 📌 Backend
cd Frontend
npm install (If not present)
npm run dev

👤 Developer
Syed Muhammad Kumail Ali
Submitted for Jeeny Tech Pioneer Program 2025 