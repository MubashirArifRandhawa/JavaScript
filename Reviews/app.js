var review = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "../Assets/profile-2.jpg",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quil abore quos voluptatum voluptates eos odio repudiandae quis voluptatem
    ipsa sequi`,
  },
  {
    id: 2,
    name: "Indiana John",
    job: "Intern",
    img: "../Assets/profile-3.jpg",
    review: "I am satisfied with him",
  },
  {
    id: 3,
    name: "John Wick",
    job: "The Boss",
    img: "../Assets/profile-4.jpg",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quil abore quos voluptatum voluptates eos odio repudiandae quis voluptatem
    ipsa sequi`,
  },
  {
    id: 4,
    name: "Sara Grey",
    job: "Admin",
    img: "../Assets/profile.jpeg",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quil abore quos voluptatum voluptates eos odio repudiandae quis voluptatem
    ipsa sequi, veniam, eligendi beatae, quibusdam dolorem. Quisquam
    officiis voluptatibus excepturi!`,
  },
];

// get the buttons
const getBtn = document.querySelectorAll(".icons button");
const image = document.querySelector(".image img");
const name = document.querySelector(".name p");
const job = document.querySelector(".job p");
const description = document.querySelector(".description p");
var id = 0,
  idback = 3;
getBtn.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.id == "greater") {
      image.src = "";
      image.src = review[id].img;
      name.textContent = review[id].name;
      job.textContent = review[id].job;
      description.textContent = review[id].review;
      if (id > review.length - 2) {
        id = 1;
      } else {
        id++;
      }
    } else if (e.target.id == "less") {
      image.src = "";
      image.src = review[idback].img;
      name.textContent = review[idback].name;
      job.textContent = review[idback].job;
      description.textContent = review[idback].review;
      if (idback == 0) {
        idback = 3;
      } else {
        idback--;
      }
    }
  });
});
