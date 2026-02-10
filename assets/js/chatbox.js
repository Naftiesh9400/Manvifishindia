document.addEventListener('DOMContentLoaded', function() {
    const chatFab = document.getElementById('chat-fab');
    const chatPopup = document.getElementById('chat-popup');
    const closeChat = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const quickReplyBtn = document.getElementById('quick-reply');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    chatFab.addEventListener('click', () => {
        chatPopup.classList.toggle('active');
    });

    closeChat.addEventListener('click', () => {
        chatPopup.classList.remove('active');
    });

    const addMessage = (sender, message, isForm = false) => {
         const messageDiv = document.createElement('div');
         const senderClass = sender === 'user' ? 'user-message' : 'bot-message';
         messageDiv.classList.add('chat-message', senderClass);
         
         const bubble = document.createElement('div');
         bubble.classList.add('bubble');
         
         if (isForm) {
             bubble.innerHTML = message;
         } else {
             bubble.textContent = message;
         }
         
         const timestamp = document.createElement('div');
         timestamp.classList.add('timestamp');
         
         const now = new Date();
         const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
         
         timestamp.textContent = sender === 'user' ? `${time} · Sent` : `Manvi Fish... · ${time}`;
         
         messageDiv.appendChild(bubble);
         messageDiv.appendChild(timestamp);
         chatBody.appendChild(messageDiv);
         chatBody.scrollTop = chatBody.scrollHeight;

         if(isForm) {
             const sendInfoBtn = bubble.querySelector('.send-info-btn');
             const nameInput = bubble.querySelector('input[type="text"]');
             const emailInput = bubble.querySelector('input[type="email"]');
             const formError = bubble.querySelector('.form-error');

             sendInfoBtn.addEventListener('click', () => {
                 const name = nameInput.value.trim();
                 const email = emailInput.value.trim();

                 if(name && email) {
                    // Create the mailto link
                    const subject = "New Inquiry from Website";
                    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:`;
                    const mailtoLink = `mailto:naftieshmandl02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    
                    // Open the user's default email client
                    window.location.href = mailtoLink;

                    addMessage('bot', 'Thank you! Your email client has been opened to send your details.');
                    bubble.innerHTML = `<p>Thanks for providing your details!</p>`;
                 } else {
                     formError.style.display = 'block';
                 }
             });
         }
    };
    
    quickReplyBtn.addEventListener('click', () => {
         quickReplyBtn.parentElement.style.display = 'none';
         
         addMessage('user', 'I have a question');
         
         setTimeout(() => {
            const formHtml = `
                <p>We just need some more information from you to proceed:</p>
                <div class="info-form">
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Email" required>
                    <div class="form-error">Please fill in all fields.</div>
                    <button class="send-info-btn">Send</button>
                </div>
            `;
            addMessage('bot', formHtml, true);
         }, 1000);
    });

    const handleSend = () => {
        const message = chatInput.value.trim();
        if(message) {
            addMessage('user', message);
            chatInput.value = '';
            
            setTimeout(() => {
                addMessage('bot', "Thanks for your message! We'll get back to you shortly.");
            }, 1500);
        }
    };

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
    
    document.body.addEventListener('click', function(event) {
         if (!chatPopup.contains(event.target) && !chatFab.contains(event.target) && chatPopup.classList.contains('active')) {
            chatPopup.classList.remove('active');
         }
    });

});
