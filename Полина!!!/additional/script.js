const categories = document.querySelectorAll('.categories ul li a');

for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', function(e) {
    e.preventDefault();

    const category = e.target.getAttribute('href');

    window.location.href = category;
  });
}
