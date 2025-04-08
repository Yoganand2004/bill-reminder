window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "YOUR_ONESIGNAL_APP_ID"  // Replace with your actual App ID
    });
});

document.getElementById('billForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('billName').value;
    const due = new Date(document.getElementById('dueDate').value);
    const now = new Date();
    const timeUntil = due.getTime() - now.getTime() - (2 * 60 * 1000); // 2 minutes before

    if (timeUntil > 0) {
        setTimeout(() => {
            OneSignal.push(function() {
                OneSignal.sendSelfNotification(
                    `Reminder: ${name} bill is due soon!`,
                    "Click to check your bill reminder.",
                    null,
                    null
                );
            });
        }, timeUntil);
        alert("Reminder set successfully!");
    } else {
        alert("Please choose a future time.");
    }
});
