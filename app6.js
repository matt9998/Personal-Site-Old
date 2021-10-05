const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
	const id = e.target.dataset.id;
	if (id){
		btns.forEach(function (btn){
			btn.classList.remove('active');
			e.target.classList.add('active');
		});
		articles.forEach(function(article){
		article.classList.remove('active')
		});
		const element = document.getElementById(id);
		element.classList.add('active');
	}
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}