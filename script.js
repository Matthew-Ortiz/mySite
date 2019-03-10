
function switchImg() {

	var imageSources = ["2.png", "3.png"];

	var index = 0;

    if (index === imageSources.length) 
    		index = 0;
  		
  	else {
  		document.getElementById("image").src = imageSources[index];
  		index++;
  	}

}
  	



