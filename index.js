
// add class function - will be reused.
const addClass = (element, classToAdd) => {
  if (!element.classList.contains(classToAdd)) {
    element.classList.add(classToAdd);
  } else {
    return;
  }
};
// remove class function - will be reused.
const removeClass = (element, classToRemove) => {
  if (element.classList.contains(classToRemove)) {
    element.classList.remove(classToRemove);
  } else {
    return;
  }
};

// onclick to hide nav for mobile- change nav-btn innerHTMl to show the close nav btn / toggle it. add class hide when close btn is clicked
const navItems = document.getElementById("header--nav");
const navBtnOpen = document.getElementById("nav-btn_open");
navBtnOpen.addEventListener("click", () => {
    removeClass(navItems, "hide");
    addClass(navItems, "show");
});

const navBtnClose = document.getElementById("nav-btn_close");
navBtnClose.addEventListener("click", () => {
    removeClass(navItems, "show");
    addClass(navItems, "hide");
});
// array of objs- Simple Bookmarking, Speedy Searching, and Easy Sharing info
import data from './data/features-data.js'

// onclick of one of the tabs, selects correct obj, changes inner text, and adds class to underline selected and remove selected class from non selected tabs. ->
const featuresButton = document.querySelectorAll('.features--button')
// function to map array of obj and match selected to variable
const selectedTabsMap = ((firstIndex) => {
  const imgContainer = document.getElementById('img-container')
  const textContainer = document.getElementById('text-container')
  const dataMap = data.map((item, index) => {
    if(firstIndex === index){
        imgContainer.innerHTML = `<img
        src=${item.image}
        alt=${item.alt}
        class="features--img"
      />`
        textContainer.innerHTML = `
        <h3>${item.heading}</h3>
          <p>
           ${item.text}
          </p>
          <button>More Info</button>`
    }
  })
  return dataMap
})
// onclick of tab function that runs previous  functions. 

featuresButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    featuresButton.forEach(btn => removeClass(btn, 'selected-tab'))
    selectedTabsMap(index)
    addClass(btn, 'selected-tab')
  })
})
// onclick - remove class show dropdown and rotate arrow from all other dropdown elements. add class show dropdown, and add class rotate arrow, to clicked dropdown element.

// form validation for contact us with email
