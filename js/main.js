// Mobile Burger Menu

var btnMobileMenu = document.querySelector('#menu_mobile');
var mobileMenuState = false;

btnMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    if(mobileMenuState === false){
        document.querySelector('#mainav').style.display = "block";
        mobileMenuState = true;
    } else {
        document.querySelector('#mainav').style.display = "";
        mobileMenuState = false;
    }
}

// Navigation scroll

var currentScrollPosition = 0;

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 150){
        if(currentScrollPosition > window.pageYOffset){
            document.querySelector('#navigation').classList.add('navigation_show');
          document.querySelector('#navigation').classList.remove('navigation_hide');
        }
        else{
          document.querySelector('#navigation').classList.remove('navigation_show');
          document.querySelector('#navigation').classList.add('navigation_hide');
        }
        currentScrollPosition = window.pageYOffset;
    } else {
      document.querySelector('#navigation').classList.remove('navigation_show');
      document.querySelector('#navigation').classList.remove('navigation_hide');
    }
})

function showNavigation(){
    
}