setInterval(function(){
	$(".price").each(function(){$(this).text($(this).parent().parent().parent().parent().attr("data-price")+"元");})
},1000)