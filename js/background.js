const colors = [
  "#ffc9c9", 
  "#fff8c9", 
  "#d2ffc9", 
  "#c9fffe", 
  "#c9ceff", 
  "#fac9ff" 
];

function bgColorChange() {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  if(color1 !== color2) {
    document.body.style.backgroundImage = `linear-gradient(45deg, ${color1}, ${color2})`;
  } else {
    return bgColorChange();
  }
}

bgColorChange();
setInterval(bgColorChange, 5000);
