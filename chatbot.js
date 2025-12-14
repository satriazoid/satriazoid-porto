document.addEventListener("DOMContentLoaded", () => {
    const chatbot = document.getElementById("chatbot");
    const toggle = document.getElementById("chatToggle");
    const close = document.getElementById("chatClose");
    const chatBody = document.getElementById("chatBody");
    const input = document.getElementById("chatInput");

    toggle.addEventListener("click", () => {
        chatbot.classList.remove("minimized");
        chatbot.classList.add("expanded");
    });

    close.addEventListener("click", () => {
        chatbot.classList.remove("expanded");
        chatbot.classList.add("minimized");
    });

    const knowledge = {
        "who are you": "i am fine Thank you!, how about you?",
        "i am great": "I'm glad to hear that.",
        "skills": "Python, Data Analysis, Frontend Development, UI Design.",
        "contact": "You can reach me via LinkedIn or email."
    };

    input.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            const msg = input.value.toLowerCase();
            input.value = "";

            chatBody.innerHTML += `<div><b>You:</b> ${msg}</div>`;

            let reply = "Please explore my portfolio sections above.";
            for (let key in knowledge) {
                if (msg.includes(key)) reply = knowledge[key];
            }

            chatBody.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });
});
