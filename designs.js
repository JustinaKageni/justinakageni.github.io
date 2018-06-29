// Select color input
// Select size input
var height,width,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	//height of the grid
	height= $('#inputHeight').val();
	//width of the grid
	width= $('#inputWeight').val();
	makeGrid(height,width);
})




function makeGrid(y,z) {
	$('tr').remove();
// Your code goes here!	
	for(var i = 1; i <= y; i++){
	    $('#pixelCanvas').append('<tr id=table' + i +'></tr>');
	    for(var j = 1; j <= z; j++){
	        $('#table' + i).append('<td></td>');


       }
	}
	//add color when you click on a cell
	$('td').click(function addColor(){
	color=$('#colorPicker').val();
	if ($(this).attr('style')){
		$(this).removeAttr('style')
	}else{
		$(this).attr('style','background-color:' + color);
	}
	})	
}