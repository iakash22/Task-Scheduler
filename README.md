# Task Scheduler 🚀

A lightweight JavaScript task scheduler that controls concurrency and efficiently queues tasks.

## Features ✨
- **Concurrency Control** - Limits the number of tasks running simultaneously.
- **Queue-Based Execution** - Ensures pending tasks execute in order.
- **Asynchronous Handling** - Works well with API requests, file operations, etc.
- **FIFO Execution Order** - Tasks are executed in order unless priorities are implemented.

## Installation 📦
No installation required! Just copy the `taskScheduler.js` file into your project.

## Usage 🛠️

### **1️⃣ Import & Create a Scheduler**
```javascript
const taskScheduler = new TaskScheduler(2); // Allows 2 concurrent tasks
