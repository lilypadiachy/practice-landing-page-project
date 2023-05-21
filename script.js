    function netflixrecommendation() {
      let name = prompt("What is your name");
      let number = prompt("Pick a number between 1-5.");

      if (number < 3) {
        let h1 = document.querySelector("h1");
        h1.innerHTML =
          name +
          ", you should watch <strong>Somebody feed Phil</strong> on <em>Netflix</em>";
      }
      if (number >= 3) {
        let h1 = document.querySelector("h1");
        h1.innerHTML =
          name +
          ", you should watch <strong>Street Food: Asia</strong> on <em>Netflix</em>";
      }
    }
    let netflixButton = document.querySelector("button");
    netflixButton.addEventListener("click", netflixrecommendation);