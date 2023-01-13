function getFeed(isWinOnly, elementsClasses) {
    let params = Object.fromEntries(new URLSearchParams(window.location.search));
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        if (response.status >= 400) {
          console.log(
            "Looks like there was a problem. Status Code: " +
              response.status
          );
          return;
        }
        response.json().then(function (data) {
          console.log(data);
          let el1 = document.querySelector(`.${elementsClasses[0]}`);
          let el2 = document.querySelector(`.${elementsClasses[1]}`);
          let el4 = document.querySelector(`.${elementsClasses[3]}`);
          let el5 = document.querySelector(`.${elementsClasses[4]}`);

          let coff1 = data.coff1;
          let coff2 = data.coff2;
          let p1 = data.p1;
          let p2 = data.p2;

          el1.innerHTML = coff1;
          el2.innerHTML = coff2;
          el4.innerHTML = p1;
          el5.innerHTML = p2;

          if (!isWinOnly) {
            let coff_draw = data.coff_draw;
            let el3 = document.querySelector(`.${elementsClasses[2]}`);
            el3.innerHTML = coff_draw;
          }
        });
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }