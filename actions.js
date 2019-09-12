let colors = ['purple',
			  'blue',
			  'gray',
			  'green',
			  'red',
			  'black'
			 ];

const pcolor = () => {
	return colors[Math.floor(Math.random() * 5)];
}

function changecolor(){
	
	$('#bc').css({
		"background-color": pcolor	
	});	
	
	let yep = $('#bc').css("background-color")
	$('.btn').css({"background-color": yep, "border": yep})
	$('.card-title, .card-subtitle').css({"color": yep})	
}

$(document).ready(function () {
	changecolor();
	doit();
});

function doit(){
fetch('https://api.quotable.io/random')
.then((resp)=>resp.json())
.then((data)=>{
	console.log(data);
	changecolor();
	$(".dh").text("  " + data.content)
	$(".ds").text("- " + data.author)
}).catch((error)=>{
  console.log(error.message)})
}