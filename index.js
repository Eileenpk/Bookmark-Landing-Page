// import data from './data/features-data'
// add class function - will be reused.
const addClass = (element, classToAdd) => {
    if(!element.classList.contains(classToAdd)) {
        element.classList.add(classToAdd)
    } else {
        return
    }
}
// remove class function - will be reused.
const removeClass = (element, classToRemove) => {
    if(element.classList.contains(classToRemove)) {
        element.classList.remove(classToRemove)
    } else {
        return
    }
}

// onclick to hide nav for mobile- change nav-btn innerHTMl to show the close nav btn / toggle it. add class hide when close btn is clicked

const navBtn = document.getElementById('nav-btn')
navBtn.addEventListener('click', () => {
    const navItems = document.getElementById('nav--items')
    const logo = document.getElementById('header--logo-container')
    if(navItems.classList.contains('hide')) {
        removeClass(navItems, 'hide')
        addClass(navItems,'show')
        navBtn.innerHTML = `<img src="/images/icon-close.svg" alt="close navigation button" id="close-nav"/>`
        logo.innerHTML = `<img src="/images/logo-light.png" alt="bookmark logo" class="header--img_logo"/>`
    } else {
        addClass(navItems, 'hide')
        removeClass(navItems, 'show')
        navBtn.innerHTML = `<img src="/images/icon-hamburger.svg" alt="open navigation button" id="open-nav"/>`
        logo.innerHTML = `<img src="/images/logo-bookmark.svg" alt="bookmark logo" class="header--img_logo"/>`
    }
})

// array of objs- Simple Bookmarking, Speedy Searching, and Easy Sharing info

// onclick of one of the tabs, selects correct obj, changes inner text, and adds class to underline selected and remove selected class from non selected tabs. ->
// function to map array of obj and match selected to variable

// function to change inner text

// function to add class of selected

// function to remove class of selected

// onclick of tab function that curries previous four functions and runs them. <-

// onclick - remove class show dropdown and rotate arrow from all other dropdown elements. add class show dropdown, and add class rotate arrow, to clicked dropdown element.

// form validation for contact us with email
