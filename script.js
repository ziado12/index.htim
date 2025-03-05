// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the buttons
  const haveWuduBtn = document.getElementById("haveWuduBtn");
  const dontHaveWuduBtn = document.getElementById("dontHaveWuduBtn");

  // Add event listener to the "I don't have wudu" button
  dontHaveWuduBtn.addEventListener("click", function() {
    // Check if the user allows notifications
    if (Notification.permission === "granted") {
      new Notification("Reminder: You need to do wudu.");
    } else if (Notification.permission !== "denied") {
      // Request permission if not already granted or denied
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          new Notification("Reminder: You need to do wudu.");
        }
      });
    }
  });
});
