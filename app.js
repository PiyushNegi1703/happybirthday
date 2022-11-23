var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 7){
        counter = 1;
      }
    }, 2500);

// BALLOONS.........

    function random(num) {
        return Math.floor(Math.random() * num);
      }
      
      function getRandomStyles() {
        var r = random(255);
        var g = random(255);
        var b = random(255);
        var mt = random(200);
        var ml = random(50);
        var dur = random(5) + 5;
        return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
        margin: ${mt}px 0 0 ${ml}px;
        animation: float ${dur}s ease-in infinite
        `;
      }
      
      function createBalloons(num) {
        var balloonContainer = document.getElementById("balloon-container");
        for (var i = num; i > 0; i--) {
          var balloon = document.createElement("div");
          balloon.className = "balloon";
          balloon.style.cssText = getRandomStyles();
          balloonContainer.append(balloon);
        }
      }
      
      var balloonInterval;
      
      window.addEventListener("load", () => {
        balloonInterval = setInterval(createBalloons(20), 50);
      });
      
      window.addEventListener("click", () => {
        clearInterval(balloonInterval);
      });

// PLANE....
    const button = document.getElementById('join-us-button')
    button.onclick = () => {
        document.getElementById('plane').classList.add('fly')
        document.getElementById('clouds').classList.add('occur')
        document.getElementById('section').classList.add('disappear')
        button.classList.add('disappear')
        document.getElementById('join-button-box').classList.add('disappear')
        document.getElementById('parde').classList.add('disappear')
        document.getElementById('parde1').classList.add('disappear')
    }