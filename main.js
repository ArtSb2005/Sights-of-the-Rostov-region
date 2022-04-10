$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>120){
			$('.one_about').fadeIn(900)
		}else{
			$('.one_about').fadeOut(700)
		}
	});
});

