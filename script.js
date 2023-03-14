// Select elements from the DOM
const inputField = document.querySelector('input');
const sendButton = document.querySelector('button');
const chatBody = document.querySelector('.chat-body');

// Add event listener to the send button
sendButton.addEventListener('click', () => {
  // Get the text from the input field
  const message = inputField.value;

  // Create a new sent message element
  const sentMessage = document.createElement('div');
  sentMessage.classList.add('message', 'sent');
  sentMessage.innerHTML = `<p>${message}</p>`;

  // Add the new message element to the chat body
  chatBody.appendChild(sentMessage);

  // Clear the input field
  inputField.value = '';

  // Send message to bot and receive response
  setTimeout(() => {
    const botMessage = getBotResponse(message);

    // Create a new received message element
    const receivedMessage = document.createElement('div');
    receivedMessage.classList.add('message', 'received');
    receivedMessage.innerHTML = `<p>${botMessage}</p>`;

    // Add the new message element to the chat body
    chatBody.appendChild(receivedMessage);
  }, 1000);
});

// Function to get bot response
function getBotResponse(message) {
  // Default response
  let response = "I'm sorry, I don't understand. Please try again.";

  // Check for keywords in message
  if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello') || message.toLowerCase().includes('hey')) {
    response = 'Hello there!';
  } else if (message.toLowerCase().includes('how are you')) {
    response = "I'm a bot, I don't have feelings, but thanks for asking!";
  } else if (message.toLowerCase().includes('what time is it')) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    response = `It's currently ${hours}:${minutes}.`;
  } else if (message.toLowerCase().includes('what is your name') || message.toLowerCase().includes('who are you')) {
    response = "My name is Bot, and I'm here to help!";
  } else if (message.toLowerCase().includes('thank you') || message.toLowerCase().includes('thanks')) {
    response = "You're welcome!";
  } else if (message.toLowerCase().includes('bye') || message.toLowerCase().includes('goodbye')) {
    response = 'Goodbye!';
  }

  return response;
}
