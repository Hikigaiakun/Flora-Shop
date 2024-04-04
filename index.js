window.addEventListener('scroll', function () {
	var scroll = document.querySelector('#btn-upper')
	scroll.classList.toggle('active', window.scrollY > 500)
})

function func(){
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
