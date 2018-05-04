lightbox.option({      
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true,
      'showImageNumberLabel': false
    });


const atr = $('img');
let div = $("<div>").addClass('olo');

	$('.gallery').append(div); 

const text = $('.olo');	 

	for(let i = 0; i < atr.length; i++) {
		console.log(atr[i].getAttribute('alt'));	
		let getAtr = atr[i].getAttribute('alt');
			text[i].innerHTML = getAtr;
		}


$( "#search_words" ).keyup(function() {
 	const search = $( "#search_words" ).val().toLowerCase();
	const match = $('.gallery');

  	for (let i = 0; i < match.length; i++){
	  	if (match[i].getAttribute('data-title').toLowerCase().includes(search)) {	
	  		match[i].style.display = "inline-block";
	  	}
	  	else { 
	  		match[i].style.display = "none";
	  	}  
  	}
});



