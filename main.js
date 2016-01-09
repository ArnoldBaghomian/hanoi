$(document).ready(init);
 var clickFromG = false;

function init(){
   
    $('.tower').on('click', gameCtrl)

}

var diskSelected;
var diskToMove;
var originTower;

function gameCtrl(event) {
	if(!diskSelected){
		diskSelected = true;
		selectDisk(event);
	} else if (diskSelected){
		diskSelected = false
		moveDisk(event);
	}
}

function moveDisk(event){
	var moveToWeight = ($(event.target).find('.rings:first-child').text())
	console.log(diskToMove.text())
	if(Number(moveToWeight) > Number(diskToMove.text()) || !moveToWeight){
		$(event.target).find('.bottom').prepend(diskToMove);
		//console.log('event.target in move disk', $(event.target).find('.bottom'));
		//$(event.target).prepend(diskToMove)	
		winning(event);
	} else{
		return
	}

}

function selectDisk(event){
	diskToMove = $(event.target).find('.rings:first-child')
	console.log(diskToMove.text())
}



function winning(event){
	
	console.log('case 1, length of .bottom', $(event.target).find('.bottom').length);
		console.log('case 2, length of children of .bottom', $(event.target).find('.bottom').children().length);


	if($(event.target).find('.bottom').children().length === 3 && $(event.target).attr('id') === 'tower3'){
		alert('YOU WIN WOW!!!');
	}	
}




  




   


