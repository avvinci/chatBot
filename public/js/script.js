const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

document.querySelector("button").addEventListener("click", () => {
  recognition.start();
});

recognition.addEventListener("result", () => {
  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  console.log("Confidence: " + e.results[0][0].confidence);
});
