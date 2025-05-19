document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    const botResponses = {
        hello: "va da chloo epdi eruka!!",
        hi: "hi da mapla",
        bye: "poitu va da isuku bye bye!",
        default: "ne ena sola vara??..Motha nitanama nilluu apro soluu!"
        
    };

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(isUser ? "user-message" : "bot-message");

        const messageText = document.createElement("p");
        messageText.textContent = message;
        messageDiv.appendChild(messageText);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();

        for (const [key, value] of Object.entries(botResponses)) {
            if (lowerMessage.includes(key)) {
                return value;
            }
        }
        return botResponses.default;
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = "";

            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse);
            }, 500);
        }
    }

    sendButton.addEventListener("click", sendMessage);

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
