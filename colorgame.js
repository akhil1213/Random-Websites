
      var squares = document.querySelectorAll(".square");
      var rgb = document.getElementById("rgb");
      var randomColor = [];
      var colorRGB = "";
      var indexOfChoosen = Math.floor((Math.random() * 6));
      var choosen;
      var tryAgain = document.getElementById("tryagain");
      var playAgain = document.getElementById("playagain");
      var max = 6;
      playAgain.addEventListener("click", function(){
        setColors(max);
        tryAgain.innerHTML = "";
        document.getElementsByTagName("h1")[0].style.backgroundColor = "steelblue";
      })
      var hardButton = document.getElementById("hard");
      hardButton.addEventListener("click", function(){
        max = 6;
        setColors(6);
        this.classList.add("selected");
        easyButton.classList.remove("selected");
        document.getElementsByTagName("h1")[0].style.backgroundColor = "steelblue";
      })
      var easyButton= document.getElementById("easy");

      easyButton.addEventListener("click", function(){
        max = 3;
        indexOfChoosen = Math.floor((Math.random() * 3));
        setColors(3);
        for(var i = 3; i < 6; i++){
          squares[i].style.backgroundColor = "black";
        }
        this.classList.add("selected");
        hardButton.classList.remove("selected");
        document.getElementsByTagName("h1")[0].style.backgroundColor = "steelblue";
      })
      function setColors(max){
        console.log(max);
            for(var i = 0; i < max; i++){
              var c1 = Math.floor((Math.random() * 250) + 1);
              var c2 = Math.floor((Math.random() * 250) + 1);
              var c3 = Math.floor((Math.random() * 250) + 1);
              colorRGB = "rgb(" + c1 + ", " + c2 + ", " + c3 + ")";
              if(indexOfChoosen == i) {
                rgb.innerHTML = colorRGB;
                choosen = colorRGB;
              }
              console.log(colorRGB);
              squares[i].style.backgroundColor =  colorRGB;
              squares[i].addEventListener("click", function(){
                console.log(choosen);
                console.log(this.style.backgroundColor);
                if(this.style.backgroundColor == choosen){
                  console.log('you won');
                  tryAgain.innerHTML = "correct!";
                  playAgain.innerHTML = "Play again?";
                  for(var i = 0; i < max; i++){
                    console.log(max);
                    squares[i].style.backgroundColor = choosen;
                  }
                  document.getElementsByTagName("h1")[0].style.backgroundColor = choosen;
                }else{
                  document.getElementById("tryagain").innerHTML = "try again!";
                  this.style.backgroundColor = "black";
                }
              });
            }
          }         

      // function checkAnswer(index){
      //     if(indexOfChoosen == index){
      //       console.log("you won");
      //     }else{
      //       squares[index].style.backgroundColor = "black";
      //     }
      // }
