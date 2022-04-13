window.onload = function () {
  let speakers = [
    {
      name: "Charles Sunkuli",
      role: " Principal Secretary, State department for Youth Affairs.",
      about:
        "Oversees implementation of youth empowerment policies and projects to ensure growth among the youths.",
      image: ["images/avatar/Sunkuli.jpg", "images/avatar/Picture2.png"],
    },
    {
      name: "Ray Ochieng",
      role: "Secretary Youth Development",
      about:
        "Takes part in forming policies that affect youth welfare and security",
      image: ["images/avatar/Ray-Ochieng.jpg", "images/avatar/Picture1.png"],
    },
    {
      name: "Bening Wiisichong",
      role: "Secretary General of Pan Africa Youth Union",
      about:
        "Takes part in development of strategic frameworks to map out youth development",
      image: ["images/avatar/Wiisi.jpg", "images/avatar/Picture1.png"],
    },
    {
      name: "Shirley Ayorkor",
      role: "Minister for Foreign Affairs and Regional Integration, GhanaMFA",
      about:
        "Engages with many stakeholders to assert and reaffirm the importance of investing in the youths.",
      image: ["images/avatar/Shirley.jpg", "images/avatar/Picture1.png"],
    },
    {
      name: "Mr Joe Mucheru",
      role: "Cabinet Secretary, Ministry of ICT, Innovation and Youth Affairs",
      about:
        "Leading  strong government presence to create employment opportunities for the youth in digital platforms",
      image: ["images/avatar/Joe.jpg", "images/avatar/Picture1.png"],
    },
  ];

  const featureSpeaker = document.querySelector(".feature-speaker");
  const menu_btn = document.querySelector(".hamburger");
  const menu_btn2 = document.querySelector(".hm2");
  const mobile_menu = document.querySelector(".mobile-nav");

  function addSpeakers() {
    let eachSpeaker = "";
    speakers.forEach((speaker, index) => {
      let imageIcon = "";
      speaker.image.forEach((imageIcn) => {
        imageIcon += `<img src="${imageIcn}"/>`;
      });

      eachSpeaker += `
        <div class="speakers">
          <div class="speaker-img">
              ${imageIcon}
          </div>
          <div class="speaker-details">
              <div class="speaker-name">
                  <h2>${speaker.name}</h2>
              </div>
              <div class="role">
                  <p>${speaker.role}</p>
              </div>
              <div class="line"></div>
              <div class="about">
                  <p>${speaker.about}</p>
              </div>
          </div>
        </div>`;
    });

    featureSpeaker.innerHTML = eachSpeaker;
  }
  addSpeakers();
  menu_btn.addEventListener("click", (e) => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  menu_btn2.addEventListener("click", (e) => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  //   document.querySelector('.lecturersCards-preview').innerHTML = `
  //     <div class="card2">
  //         <img class="lecturerPic" src="${lecturers[0].picURL}" alt="${lecturers[0].name}">
  //         <div class="lecturer-info">
  //         <h3 class="lecturer-name">${lecturers[0].name}</h3>
  //         <h4 class="lecturer-position">${lecturers[0].position}</h4>
  //         <div class="grey-line"></div>
  //         <p class="lecturer-detail">${lecturers[0].details}</p>
  //         </div>
  //     </div>
  //     <div class="card2">
  //         <img class="lecturerPic" src="${lecturers[1].picURL}" alt="${lecturers[1].name}">
  //         <div class="lecturer-info">
  //         <h3 class="lecturer-name">${lecturers[1].name}</h3>
  //         <h4 class="lecturer-position">${lecturers[1].position}</h4>
  //         <div class="grey-line"></div>
  //         <p class="lecturer-detail">${lecturers[1].details}</p>
  //         </div>
  //     </div>`;
  // };
  //   const btn = document.querySelector(".more-btn");
  //   function showCards() {
  //     if (desktopCards.style.display === "grid") {
  //       desktopCards.style.display = "none";
  //       mobileCards.style.display = "block";
  //       btn.innerHTML = 'More <span> <i class="fa fa-angle-down"></i></span>';
  //     } else {
  //       mobileCards.style.display = "none";
  //       desktopCards.style.display = "grid";
  //       btn.innerHTML = 'Less <span> <i class="fa fa-angle-up"></i></span>';
  //     }
  //   }
};
