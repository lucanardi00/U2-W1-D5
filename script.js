window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar')
  var mainContent = document.querySelector('main')

  var whitePartOffset = mainContent.offsetTop

  if (window.scrollY >= whitePartOffset) {
    navbar.classList.add('white-background')
  } else {
    navbar.classList.remove('white-background')
  }
})
