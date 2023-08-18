let projectsList = [
    {
      id: "1",
      name: "Landing Page",
      url: "https://google.com",
      src: "./assets/profile.jpg",
      type: "front",
    },
    {
      id: "2",
      name: "Book Store",
      url: "https://instagram.com",
      src: "./assets/img/photo-1500964757637-c85e8a162699.jpeg",
      type: "full",
    },
    {
      id: "3",
      name: "Memory Game",
      url: "https://facebook.com",
      src: "./assets/memory.jpg",
      type: "front",
    },
    {
      id: "4",
      name: "Rest API",
      url: "https://whatsapp.com",
      src: "./assets/img/photo-1500964757637-c85e8a162699.jpeg",
      type: "back",
    },
    {
      id: "5",
      name: "Calculator",
      url: "https://twitter.com",
      src: "./assets/calc.jpg",
      type: "front",
    },
    {
      id: "6",
      name: "Chat App",
      url: "https://google.com",
      src: "./assets/img/photo-1500964757637-c85e8a162699.jpeg",
      type: "full",
    },
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