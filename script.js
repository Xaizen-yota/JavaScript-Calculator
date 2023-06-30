
const data = [
  { value: '7', sound: '7.mp3' },
  { value: '8', sound: '8.mp3' },
  { value: '9', sound: '9.mp3' },
  { value: '+', sound: 'roblox-death-sound_1.mp3' },
  { value: '4', sound: '4.mp3' },
  { value: '5', sound: '5.mp3' },
  { value: '6', sound: '6.mp3' },
  { value: '-', sound: 'roblox-death-sound_1.mp3' },
  { value: '1', sound: '1.mp3' },
  { value: '2', sound: '2.mp3' },
  { value: '3', sound: '3.mp3' },
  { value: '*', sound: 'roblox-death-sound_1.mp3' },
  { value: '0', sound: 'engineer_no01.mp3' },
  { value: '.', sound: 'roblox-death-sound_1.mp3' },
  { value: '/', sound: 'roblox-death-sound_1.mp3' },
  { value: '=', sound: 'equal.mp3' },
  { value: 'DELETE', sound: 'clear.mp3' },
];

window.onload = function () {
  const buttonsContainer = document.getElementById("Buttons");
  for (const item of data) {
    const button = document.createElement("div");
    if (item.value === 'DELETE')
      button.className = "DELETE";
    else if (item.value === '=')
      button.className = "equals";
    else
      button.className = "buttons";
      
    button.textContent = item.value;
    buttonsContainer.appendChild(button);
    button.addEventListener("click", function () {
      playSound(item.sound);
      callbuttons(this.textContent);
    });
  }
};

function callbuttons(content) {
  const instructions = document.getElementById('Screen');

  if (content === '=' || content === 'DELETE') {
    switch (content) {
      case 'DELETE':
        instructions.innerText = '';
        break;
      case '=':
        try {
          instructions.innerText = eval(instructions.textContent);
        } catch (ex) {
          instructions.innerText = "...error";
          playSound('aughhhhh-aughhhhh.mp3');
        }
        break;
    }
  } else {
    instructions.innerText += content;
    console.log(instructions.innerText);
  }
}

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}



