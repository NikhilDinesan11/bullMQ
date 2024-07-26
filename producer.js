const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
});

async function init() {
  const result = await notificationQueue.add("email to piyush", {
    email: "piyush@gmail.com",
    subject: "welcome message",
  });
  console.log("Job added to queue", result.id);
}
init();
