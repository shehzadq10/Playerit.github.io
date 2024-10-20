let messageCount = 0;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sendMessage() {
    document.getElementById('comments').value = ''; // Clear the textarea
    messageCount++; // Increment message count
    const messageText = messageCount === 1 ? 'message sent' : 'messages sent';
    document.getElementById('message').innerText = `(${messageCount}) ${messageText}`; // Display count
}
