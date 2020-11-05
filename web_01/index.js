(function() {
  // CC0 http://creativecommons.org/publicdomain/zero/1.0/
  document.getElementById("button1").addEventListener("click", () => {
    if (!window.speechSynthesis) return;
    let u = new SpeechSynthesisUtterance(textarea.value);
    u.lang = "ja";
    speechSynthesis.speak(u);
  });
  document.getElementById("button2").addEventListener("click", () => {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
  });
})()