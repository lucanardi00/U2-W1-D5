window.addEventListener('scroll', function () {
  var navbar = document.querySelector('nav')
  var threshold = 400

  if (window.scrollY > threshold) {
    navbar.style.backgroundColor = 'white'
  } else {
    navbar.style.backgroundColor = '#ffc017'
  }
})
