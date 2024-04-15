//To let users to visually modify sections with a click and to control the display of dropdown menus, 
document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
          section.addEventListener('click', () => {
              section.style.backgroundColor = '#f4f4f4'; // Changes background on click
          });
      });
  });

  document.querySelector('.dropbtn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
//Controlling the visibility of content on a webpage without reloading the page,
function toggleVisibility(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === '') {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

//Toggles the visibility of a section on the page.
function toggleContent(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === '') {
        section.style.display = "block";
        section.className = "content-visible";
    } else {
        section.style.display = "none";
        section.className = "content-hidden";
    }
}
//Extra functionaity
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
       