// Renders image items from items.js
const imgContainer = document.querySelector(".imgContainer");
let innerHtml = "";

items.forEach((item) => {
  innerHtml += `
    <div class="imgBox">
      <img loading="lazy" src="${item.url}" alt="${item.name}" width="200" height="200" />
      <div class="imgName">${item.name}</div>
    </div>`;
});
imgContainer.innerHTML = innerHtml;

// Chatbot Logic
async function chat() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const replyList = document.getElementById("botReply");

  let reply = "🤔 Hmm, I didn't catch that. Try saying 'hi' or 'help'.";

  if (!input) {
    reply = "Please type something!";
  } else if (input.includes("hi") || input.includes("hello") || input.includes("hii")) {
    reply = "👋 Hello! How can I assist you today?";
  } else if (input.includes("name")) {
    reply = "🤖 I'm HemantBot – your friendly construction assistant!";
  } else if (input.includes("lakshay")) {
    reply = "😅 topper";
  
  else if (input.includes("lakshay hai")) {
    reply = "😅 chutiya";
  } else if (input.includes("hari")) {
    reply = "🌟 Hari is a good boy, always helpful!";
  }  else if (input.includes("hemant")) {
    reply = "🌟Topper";
  }
  
  else if (input.includes("help")) {
    reply = "🛠️ You can ask about materials, contact info, or even just say hi!";
  } else if (input.includes("bye")) {
    reply = "👋 Goodbye! Talk to you soon.";
  }

  // Add new reply to the list
  const li = document.createElement("li");
  li.textContent = reply;
  replyList.appendChild(li);

  // Clear input
  document.getElementById("userInput").value = "";
}
