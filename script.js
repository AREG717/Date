const chatMessages = document.getElementById('chat-messages');
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const errorMessage = document.getElementById('error-message');

const date = new Date;

const user = prompt('Գրեք ձեր անունը.');

const sendMessage = () => {
  const message = messageInput.value.trim();

  if (!message) {
    errorMessage.innerHTML = 'Ինփութը չի կարող լինել դատարկ';
    errorMessage.style.display = 'block';

    setTimeout(() => {
      errorMessage.style.display = 'none';
    },3000);
    return;
  } else { 
    errorMessage.style.display = 'none';
  }

  const messageUser = document.createElement('div');
  messageUser.classList.add('user');
  messageUser.textContent = (`${user} | ${date.getDate()}.0${date.getMonth()+1}.${date.getFullYear()} - ${date.getHours()} : ${date.getMinutes()}`);
  chatMessages.appendChild(messageUser);
  

  const messageEl = document.createElement('div');
  messageEl.classList.add('chat-message');
  messageEl.textContent = message;

  chatMessages.appendChild(messageEl);

  messageInput.value = '';

  chatMessages.scrollTop = chatMessages.scrollHeight;
};
sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});