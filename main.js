$(document).ready(init);
 var clickFromG = false;

function init(){
   

   var clickedFrom = $();
   var clickedTo= $();

    var blockA = $('#box1').data('one');
    var blockB = $('#box2').data('two');

    console.log(blockA>blockB);


    $('.tower').on('click', gameCtrl)
   //$('#tower1').click(clickedTower1);
   //$('#tower2').click(clickedTower2);
  // $('#tower3').click(clickedTower3);

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
		$(event.target).prepend(diskToMove)	
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
	if($(event.target).children().length === 4 && $(event.target).attr('id') === 'tower3'){
		alert("YOU WIN!!!!")

	}
}




  




   


