//lowes creek section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('#lowes-creek>.accordion').addEventListener('click', function(){
		document.querySelector('#lowes-creek>article').classList.toggle('show');
		document.querySelector('#lowes-creek>span').classList.toggle('rotate');
	});
});
//putnam trail section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('#putnam-trail-10-22>.accordion').addEventListener('click', function(){
		document.querySelector('#putnam-trail-10-22>article').classList.toggle('show');
		document.querySelector('#putnam-trail-10-22>span').classList.toggle('rotate');
	});
});
//personal collection section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('#my-photos>.accordion').addEventListener('click', function(){
		document.querySelector('#my-photos>article').classList.toggle('show');
		document.querySelector('#my-photos>span').classList.toggle('rotate');
	});
});