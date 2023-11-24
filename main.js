let projectsList = [
    {
      id: "1",
      name: "Landing Page",
      url: "https://personalwebsite-git-main-ahmedali29.vercel.app/",
      src: "./assets/profile.jpg",
      type: "javascript",
    },
   /* {
      id: "2",
      name: "Book Store",
      url: "https://instagram.com",
      src: "./assets/img/photo-1500964757637-c85e8a162699.jpeg",
      type: "full",
    }*/
    {
      id: "3",
      name: "Memory Game",
      url: "http://memory-game2023.vercel.app",
      src: "./assets/memory.jpg",
      type: "javascript",
    }
,
    {
      id: "5",
      name: "Calculator",
      url: "http://ahcalculator.vercel.app",
      src: "./assets/calc.jpg",
      type: "javascript",
    },
    {
      id: "6",
      name: "To do app",
      url: "https://todo-app-plum-ten.vercel.app/",
      src: "./assets/Todo app.jpg",
      type: "react",
    },
    {
      id: "7",
      name: "E-commerce CRUD",
      url: "",
      src: "./assets/crud.jpg",
      type: "react",
    },
    {
      id: "8",
      name: "Cashier",
      url: "",
      src: "./assets/cashier.jpg",
      type: "react",
    },
    {
      id: "9",
      name: "Facebook sign up",
      url: "",
      src: "./assets/facebooksignup.jpg",
      type: "html",
    },
    {
      id: "10",
      name: "Youtube clone",
      url: "",
      src: "./assets/youtubeclone.jpg",
      type: "html",
    },
    {
      id: "11",
      name: "Leon agency",
      url: "https://leonagency.vercel.app/",
      src: "./assets/Leon agency.jpg",
      type: "html",
    },
    {
      id: "12",
      name: "Kasper agency",
      url: "https://kasperagency.vercel.app/",
      src: "./assets/kasper.jpg",
      type: "html",
    },
    {
      id: "13",
      name: "Electrify agency",
      url: "https://electrify-iota.vercel.app/",
      src: "./assets/electrify.jpg",
      type: "javascript",
    },
    {
      id: "14",
      name: "New World Institution Dashboard",
      url: "https://new-world-pi.vercel.app/",
      src: "./assets/new world.jpg",
      type: "html",
    },
    {
      id: "15",
      name: "Bondi website",
      url: "https://bondi-bootstrap-nine.vercel.app/",
      src: "./assets/bondi.jpg",
      type: "html",
    },
    {
      id: "16",
      name: "Weather forecast ClimaVista",
      url: "https://climavista.vercel.app/",
      src: "./assets/climavista.jpg",
      type: "javascript",
    },
    {
      id: "17",
      name: "Age Calculator",
      url: "https://age-calculator-omega-three.vercel.app/",
      src: "./assets/age calculator.jpg",
      type: "javascript",
    },
    {
      id: "18",
      name: "Snake game",
      url: "https://snake-game-olive-two.vercel.app/",
      src: "./assets/snake game.jpg",
      type: "react",
    },
  /*  {
      id: "6",
      name: "Chat App",
      url: "https://google.com",
      src: "./assets/img/photo-1500964757637-c85e8a162699.jpeg",
      type: "full",
    }*/
     /* {
      id: "4",
      name: "Rest API",
      url: "https://whatsapp.com",
      src: "./assets/img/photo-1500964757637-c85e8a162699.jpeg",
      type: "back",
    }*/
  ];
  
  window.onload = function () {
    typing();
    document.getElementById("age").innerText = getMyAge();
    handleFilterGallary("all");
  };
  
  function typing(
    opt = {
      speed: 150,
      waiting: 2000,
      textArr: ["Developer", "Designer", "Freelancer", "Teacher"],
      showCursor: true,
    }
  ) {
    const parent = document.getElementById("home-typing");
    const ele = document.createElement("span");
    const cursor = document.createElement("span");
    cursor.style.fontFamily = "monospace";
    cursor.innerText = "|";
    if (!opt.showCursor) cursor.hidden = true;
  
    parent.appendChild(ele);
    parent.appendChild(cursor);
  
    let index = 0;
    let waitingCounter = 0;
    let cursorCounter = 0;
    let pervText = "";
    let textIndex = 0;
    let condition = "for"; // for , wait, back
  
    setInterval(() => {
      if (condition === "for") {
        ele.innerText += opt.textArr[index][textIndex];
        textIndex++;
      } else if (condition === "wait") {
        if (waitingCounter < opt.waiting) {
          waitingCounter += opt.speed;
  
          // if (cursor.innerText === "|") {
          //   cursor.innerHTML = "&nbsp;";
          // } else {
          //   cursor.innerText = "|";
          // }
        } else {
          cursor.innerText = "|";
          condition = "back";
          waitingCounter = 0;
        }
      } else {
        textIndex--;
        ele.innerText = pervText.slice(0, textIndex);
      }
  
      if (ele.innerText === opt.textArr[index] && waitingCounter === 0) {
        pervText = opt.textArr[index];
        if (opt.waiting > 0) {
          condition = "wait";
        } else {
          condition = "back";
        }
        // textIndex = 0;
        index = (index + 1) % opt.textArr.length;
      }
  
      if (textIndex <= 0) {
        condition = "for";
      }
    }, opt.speed);
  }
  
  function getMyAge() {
    let myAge = 0;
    let myBirth = new Date(1988, 6, 23);
    let currDate = new Date();
  
    // before refactor
  
    // if (currDate.getMonth() > myBirth.getMonth()) {
    //     myAge = currDate.getFullYear() - myBirth.getFullYear();
    //   } else if (currDate.getMonth() < myBirth.getMonth()) {
    //     myAge = currDate.getFullYear() - myBirth.getFullYear() - 1;
    //   } else {
    //     if (currDate.getDate() >= myBirth.getDate()) {
    //       myAge = currDate.getFullYear() - myBirth.getFullYear();
    //     } else {
    //       myAge = currDate.getFullYear() - myBirth.getFullYear() - 1;
    //     }
    //   }
  
    // after refactor
    myAge = currDate.getFullYear() - myBirth.getFullYear();
    if (
      currDate.getMonth() < myBirth.getMonth() ||
      (currDate.getMonth() === myBirth.getMonth() &&
        currDate.getDate() < myBirth.getDate())
    ) {
      myAge = myAge - 1;
    }
  
    return myAge;
  }
  
  let prevTab = "";
  function handleFilterGallary(tab) {
    if (tab === prevTab) return;
    const gallary = document.getElementById("gallary");
  
    prevTab && (document.getElementById(prevTab).className = "");
    document.getElementById(tab).className = "active";
  
    gallary.innerHTML = "";
    for (let i = 0; i < projectsList.length; i++) {
      const ele = projectsList[i];
      if (tab === "all" || ele.type === tab) {
        gallary.innerHTML += `
              <a href="${ele.url}" target="_blank">
                  <img src="${ele.src}" alt="${ele.name}" />
                  <div>
                  <p>
                   ${ele.name}
                  </p>
                  <p>
                      ${ele.type}
                  </p>
                  </div>
              </a>
          `;
      }
    }
    prevTab = tab;
  }
  
  function handleSidebarToggle() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("open");
  }



  //Form

  function sendMail(){
    var params = {
      from_name : document.getElementById("fullName").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementById("message").value
    }
    emailjs.send("service_dmfltt5", "template_9o6f2zl", params).then(function(res){
      alert("success");
    })
  }
