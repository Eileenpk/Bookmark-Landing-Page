// import data from './data/features-data'
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
const logo = document.getElementById("header--logo-container");
const navBtnOpen = document.getElementById("nav-btn_open");
navBtnOpen.addEventListener("click", () => {
  if (navItems.classList.contains("hide")) {
    removeClass(navItems, "hide");
    addClass(navItems, "show");
  } else return;
});

const navBtnClose = document.getElementById("nav-btn_close");
navBtnClose.addEventListener("click", () => {
    
  if (navItems.classList.contains("show")) {
    removeClass(navItems, "show");
    addClass(navItems, "hide");
    
  }
});
// array of objs- Simple Bookmarking, Speedy Searching, and Easy Sharing info

// onclick of one of the tabs, selects correct obj, changes inner text, and adds class to underline selected and remove selected class from non selected tabs. ->
// function to map array of obj and match selected to variable

// function to change inner text

// function to add class of selected

// function to remove class of selected

// onclick of tab function that curries previous four functions and runs them. <-

// onclick - remove class show dropdown and rotate arrow from all other dropdown elements. add class show dropdown, and add class rotate arrow, to clicked dropdown element.

// form validation for contact us with email
