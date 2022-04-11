window.onload = function () {
  let speakers = [
    {
      name: "Charles Sunkuli",
      role: " Principal Secretary, State department for Youth Affairs.",
      about:
        "Oversees implementation of youth empowerment policies and projects to ensure growth among the youths.",
      image: "",
    },
    {
      name: "Ray Ochieng",
      role: "Secretary Youth Development",
      about:
        "Takes part in forming policies that affect youth welfare and security",
      image: "",
    },
    {
      name: "Bening Wiisichong",
      role: "Secretary General of Pan Africa Youth Union",
      about:
        "Takes part in development of strategic frameworks to map out youth development",
      image: "",
    },
    {
      name: "Shirley Ayorkor",
      role: "Minister for Foreign Affairs and Regional Integration, GhanaMFA",
      about:
        "Engages with many stakeholders to assert and reaffirm the importance of investing in the youths.",
      image: "",
    },
    {
      name: "Mr Joe Mucheru",
      role: "Cabinet Secretary, Ministry of ICT, Innovation and Youth Affairs",
      about:
        "Leading  strong government presence to create employment opportunities for the youth in digital platforms",
      image: "",
    },
  ];

  const featureSpeaker = document.querySelector(".feature-speaker");

  function addSpeakers() {
    let eachSpeaker = "";
    speakers.forEach((speaker) => {
      eachSpeaker += `
        <div class="speakers">
            <div class="speaker-img">
                <img src="${speakers.image}" />
            </div>
            <div class="speaker-name">
                <h2>${speaker.name}</h2>
            </div>
            <div class="role">
                <p>${speaker.role}</p>
            </div>
            <div class="about">
                <p>${speaker.about}</p>
            </div>
        </div>`;
    });

    featureSpeaker.innerHTML = eachSpeaker;
  }
  addSpeakers();
};