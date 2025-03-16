# Task Scheduler 🚀

A lightweight JavaScript task scheduler that controls concurrency and efficiently queues tasks.

## Features ✨
- **Concurrency Control** - Limits the number of tasks running simultaneously.
- **Queue-Based Execution** - Ensures pending tasks execute in order.
- **Asynchronous Handling** - Works well with API requests, file operations, etc.
- **FIFO Execution Order** - Tasks are executed in order unless priorities are implemented.

## Installation 📦
No installation required! Just copy the `index.js` file into your project.

## Usage 🛠️

### **1️⃣ Import & Create a Scheduler**

```javascript
const taskScheduler = new TaskScheduler(2); // Allows 2 concurrent tasks

```

### 2️⃣ **Add Asynchronous Tasks**

```javascript
    taskScheduler.addTask(() =>
  new Promise((res) => setTimeout(() => res("Task 1 Completed"), 3000))
);
taskScheduler.addTask(() =>
  new Promise((res) => setTimeout(() => res("Task 2 Completed"), 2000))
);
taskScheduler.addTask(() =>
  new Promise((res) => setTimeout(() => res("Task 3 Completed"), 1000))
);
taskScheduler.addTask(() =>
  new Promise((res) => setTimeout(() => res("Task 4 Completed"), 4000))
);

```

### 3️⃣ **Expected Output**

```bash
Task 1 Completed ✅ (after 3 sec)
Task 2 Completed ✅ (after 2 sec)
Task 3 Completed ✅ (after 1 sec, waits for free slot)
Task 4 Completed ✅ (after 4 sec)

```

## Contributing 🤝
If you find a bug or have suggestions for improvement, feel free to submit an issue or a pull request.