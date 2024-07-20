function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const profilePic = document.querySelector('.section__pic-container img');
    const logo = document.querySelector('.logo');
  
    logo.classList.add('animate');
  
    profilePic.addEventListener('click', () => {
      profilePic.classList.add('clicked');
  
      setTimeout(() => {
        profilePic.classList.remove('clicked');
      }, 500); 
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const profilePic = document.querySelector('.section__pic-container img');
    const logo = document.querySelector('.logo');
  
    logo.classList.add('animate');
  
    profilePic.addEventListener('click', () => {
      profilePic.classList.add('clicked');
  
      setTimeout(() => {
        profilePic.classList.remove('clicked');
      }, 500); 
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const projectBoxes = document.querySelectorAll(".details-container");
  
    projectBoxes.forEach(box => {
      box.addEventListener("click", function(event) {
        event.stopPropagation();
  
        projectBoxes.forEach(otherBox => {
          if (otherBox !== box) {
            otherBox.classList.remove("expanded");
          }
        });
  
        box.classList.toggle("expanded");
      });
    });
  
    document.addEventListener("click", function() {
      projectBoxes.forEach(box => {
        box.classList.remove("expanded");
      });
    });
  
    projectBoxes.forEach(box => {
      box.addEventListener("click", function(event) {
        event.stopPropagation();
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const arrowIcon = document.querySelector(".icon.arrow");
  
    arrowIcon.addEventListener("click", function() {
      document.querySelector("#experience").scrollIntoView({ behavior: "smooth" });
    });
  });