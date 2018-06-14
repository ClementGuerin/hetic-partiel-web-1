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

// ScrollToTop

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 150){
    document.querySelector('#backtotop').classList.add('visible');
  } else {
    document.querySelector('#backtotop').classList.remove('visible');
  }
})

document.querySelector('#backtotop').addEventListener('click', function(){
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
})