class TaskScheduler {
    constructor(concurrency) {
        this.concurrency = Number(concurrency);
        this.runningTask = 0;
        this.waitingQueue = [];
    }

    newTask() {
        if (this.runningTask < this.concurrency && this.waitingQueue.length > 0) {
            const nextTask = this.waitingQueue.shift();
            nextTask();
        }
    }

    addTask(task) {
        return new Promise((resolve, reject) => {
            async function __taskRunner() {
                this.runningTask += 1;
                try {
                    const result = await task();
                    console.log("task result :", result);
                    resolve(result);
                } catch (error) {
                    console.error("Task failed :", error);
                    reject(error);
                } finally {
                    this.runningTask -= 1;
                    this.newTask();
                }
            }

            if (this.runningTask < this.concurrency) {
                __taskRunner.call(this);
            } else {
                this.waitingQueue.push(__taskRunner.bind(this));
            }
        })
    }
}

const taskScheduler = new TaskScheduler(2);

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