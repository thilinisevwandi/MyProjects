let select = document.getElementsByName('imageSelector');

let displayImage = document.getElementById('imageName');

let displayPanel=document.getElementById("displayPanel");

let image = document.getElementById("image");

function setAnimal(){
	
	for(let index=0 ;index< select.length;index++){
	
		let styleProperty=select[index].getAttribute('id');
		
		let styleValue = select[index].value;
		
		
		image.style[styleProperty] = styleValue
		//displayPanel.style[styleProperty] = styleValue
	
	}
	
	image.src=displayImage.value+'.jpg'
	
	
}

document.getElementById('setAnimal').addEventListener('click',setAnimal);