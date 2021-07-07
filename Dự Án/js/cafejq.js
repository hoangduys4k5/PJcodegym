	//duyệttttttttttttttttttttttttttttttttttttttttttttt
		$(document).ready(function(){
		 $("#abc").slideUp();
        $("input[value='hien']").click(function(){
            $("#abc").slideDown();
        });
        $("input[value='an']").click(function(){
            $("#abc").slideUp();
        });
    });
$(document).ready(function(){
	$(window).scroll(function(){
			if($(window).scrollTop()>250){
				 $("#mo").animate({marginLeft: 0,opacity: 1},1300);
				};
	});

});

	$(document).ready(function(){
		
	$(".anhh1").hover(function(){
$('.chude1').animate({opacity:1});
		$('.anh1').attr({'src': 'img/loai1a.png',});
		$('.fahu1').animate({opacity:1});
		
		$(".fachu1").hover(function(){
			$(".chu1").slideDown();
$('.fahu1').css({'color':'red',
				'cursor': 'pointer'});

},function(){
	$('.fahu1').css('color','#c0c0c0	');
	$(".chu1").slideUp();

});
		$('.anh1').fadeIn(100);
	  },function(){		
	  	$('.fahu1').animate({opacity:0});
	  	$('.chude1').animate({opacity:0});
		$('.anh1').fadeOut(0);
		$('.anh1').attr({
		'src': 'img/loai1.png',
	});
		$('.anh1').fadeIn(600);

	});
	$(".anhh2").hover(function(){
	$('.chude2').animate({opacity:1});
			$('.anh2').attr({'src': 'img/loai2b.png',});
			$('.fahu2').animate({opacity:1});
			
			$(".fachu2").hover(function(){
				$(".chu2").slideDown();
	$('.fahu2').css({'color':'red',
					'cursor': 'pointer'});

	},function(){
		$('.fahu2').css('color','#c0c0c0	');
		$(".chu2").slideUp();

	});
			$('.anh2').fadeIn(100);
		  },function(){		
		  	$('.fahu2').animate({opacity:0});
		  	$('.chude2').animate({opacity:0});
			$('.anh2').fadeOut(0);
			$('.anh2').attr({
			'src': 'img/loai2.png',
		});
			$('.anh2').fadeIn(600);

		});$(".anhh3").hover(function(){
	$('.chude3').animate({opacity:1});
			$('.anh3').attr({'src': 'img/loai3b.png',});
			$('.fahu3').animate({opacity:1});
			
			$(".fachu3").hover(function(){
				$(".chu3").slideDown();
	$('.fahu3').css({'color':'red',
					'cursor': 'pointer'});

	},function(){
		$('.fahu3').css('color','#c0c0c0	');
		$(".chu3").slideUp();

	});
			$('.anh3').fadeIn(100);
		  },function(){		
		  	$('.fahu3').animate({opacity:0});
		  	$('.chude3').animate({opacity:0});
			$('.anh3').fadeOut(0);
			$('.anh3').attr({
			'src': 'img/loai3.png',
		});
			$('.anh3').fadeIn(600);

		});$(".anhh4").hover(function(){
	$('.chude4').animate({opacity:1});
			$('.anh4').attr({'src': 'img/loai4b.png',});
			$('.fahu4').animate({opacity:1});
			
			$(".fachu4").hover(function(){
				$(".chu4").slideDown();
	$('.fahu4').css({'color':'red',
					'cursor': 'pointer'});

	},function(){
		$('.fahu4').css('color','#c0c0c0	');
		$(".chu4").slideUp();

	});
			$('.anh4').fadeIn(100);
		  },function(){		
		  	$('.fahu4').animate({opacity:0});
		  	$('.chude4').animate({opacity:0});
			$('.anh4').fadeOut(0);
			$('.anh4').attr({
			'src': 'img/loai4.png',
		});
			$('.anh4').fadeIn(600);

		});$(".anhh5").hover(function(){
	$('.chude5').animate({opacity:1});
			$('.anh5').attr({'src': 'img/loai5b.png',});
			$('.fahu5').animate({opacity:1});
			
			$(".fachu5").hover(function(){
				$(".chu5").slideDown();
	$('.fahu5').css({'color':'red',
					'cursor': 'pointer'});

	},function(){
		$('.fahu5').css('color','#c0c0c0	');
		$(".chu5").slideUp();

	});
			$('.anh5').fadeIn(100);
		  },function(){		
		  	$('.fahu5').animate({opacity:0});
		  	$('.chude5').animate({opacity:0});
			$('.anh5').fadeOut(0);
			$('.anh5').attr({
			'src': 'img/loai5.png',
		});
			$('.anh5').fadeIn(600);

		});

		
	});
	
	$(function(){
    $(window).scroll(function(){
    	if($(window).scrollTop()>1000){
        $('#p1').animate({marginLeft:0,opacity:1},1500)
          $('#p2').animate({marginRight:0,opacity:1},1500)
          $('#p3').animate({marginLeft:0,opacity:1},1500)
          $('#p4').animate({marginRight:0,opacity:1},1500)
          $('#p5').animate({marginLeft:0,opacity:1},1500)
          $('#p6').animate({marginRight:0,opacity:1},1500)
    }
    });
});
	$(function(){
		$(".tim").hover(function(){

			$('#myInput').animate({opacity:1});
		},function(){
			$('#myInput').animate({opacity:0});
		});
		
	});
    

    
	