$(function() {
	
	$(".popup-close").on('click', function() {
		$("#popup-wrapper").fadeOut();
		$('.radar_scanner').fadeIn(400, function() {
			$(this).delay(1500).fadeOut(300, function() {
				$("#popup2").fadeIn(300);
			});
		});
	});
	
	$(".ok").on('click', function() {
		$("#popup2").fadeOut();
		$(".step1").fadeIn();
	});
	
	$(".next").on('click', function() {
		$(this).parent().hide().next().fadeIn();
	});

	$(".steps-button").on('click', function() {
		$(this).parent().hide().next().fadeIn();
	});

	$(".option, .option1, .option2, .option3, .option4").on('click', function() {
		if ( $(this).hasClass('selected') )
			$(this).removeClass('selected');
		else
			// if (.option.selected.length < 3) BUT .option has to be as first element in class="...
			if( $( '.'+ $(this).attr('class').split(' ')[0] +'.selected' ).length < 3)
				$(this).addClass('selected');			
	});

	$(".steps-button-final").on('click', function() {
		$(".step8").fadeOut();
		$(".results").fadeIn();
	});
})