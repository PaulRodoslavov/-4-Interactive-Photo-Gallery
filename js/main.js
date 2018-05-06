
/* Settings fot Lightbox plugin ------------ */

lightbox.option({      
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true,
      'showImageNumberLabel': false
    });

/* Creating titles under pictures ------------ */

const atr = $('img');
let div = $("<div>").addClass('olo');

	$('.gallery').append(div); 

const $text = $('.olo');	 

	for(let i = 0; i < atr.length; i++) {
		let getAtr = atr[i].getAttribute('alt');
			$($text[i]).html(getAtr);
		}

/* Function for instant search ------------ */

$( "#search_words" ).keyup(function() {
 	const $search = $( "#search_words" ).val().toLowerCase();
	const $match = $('.gallery');

  	for (let i = 0; i < $match.length; i++){
	  	if ($match[i].getAttribute('data-title').toLowerCase().includes($search)) {		  		
	  		$($match[i]).parent().css("display", "inline-block")
	  		console.log($match[i]);
	  	}
	  	else { 
	  		$($match[i]).parent().hide();
	  	}  
  	}
});



