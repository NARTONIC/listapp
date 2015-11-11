$(document).ready(function(){
	$('.button').click(function(){
 		var valor = $('.text').val();
 		$('.list').prepend("<li class='element'>"+  valor + " <button class='delete'> X </button> </li>");
 		$('.text').val('');
 	});

 	$('.text').click(function(){
 		$('.text').val('');
 	});

 	$("ul").on("click", ".delete", function() {
 		$(this).closest("li").remove();
 	});
});
