(function() {
  // CC0 http://creativecommons.org/publicdomain/zero/1.0/
  if (window.speechSynthesis) {
    let voices = [];
    function setVoices() {
      if (voices.length) return;
      voices = speechSynthesis.getVoices();
      if (!voices.length) return;
      voices
        .filter(v => v.lang.startsWith("ja"))
        .forEach(v => {
          let opt = document.createElement("option");
          opt.text = v.name;
          opt.voice = v;
          document.getElementById("voice").appendChild(opt);
        });
    }
    speechSynthesis.addEventListener("voiceschanged", setVoices);
    setVoices();
  }
  document.getElementById("button1").addEventListener("click", () => {
    let opt = document.getElementById("voice").selectedOptions;
    if (!opt.length) return;
    let u = new SpeechSynthesisUtterance(textarea.value);
    u.voice = opt[0].voice;
    u.lang = "ja";
    speechSynthesis.speak(u);
  });
  document.getElementById("button2").addEventListener("click", () => {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
  });
})()
