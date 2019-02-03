/*function show(){document.getElementbyNameTag("p").style.display= "block" };
document.getElementbyId("click").onclick=function(){show()};*/

/*function bold(){
	T=document.getElementsByTagName("p")
	for(i=0;i<T.length;i++)
	T[i].style.color = "red";

}
*/

$('#show').click(function() {

	$('#bulb').css('display', 'none')
    $('#p').show()
    $("#toolbar").css("display", "block")
});

$('#underline').click(function() {
	$('#p').css('textDecoration', 'underline')	
})

$("#italic").click(function() {
	$('#p').css('fontStyle', 'italic')	
})



$('#bold').click(function()	{
	$("p").css("fontWeight","bold");
});

T=$('.fonts')
$(".dropdownfonts").mouseout(function() {

	T.css("display", "none"); 
}) 

$(".dropdownfonts").mouseover(function() {
T.css("display", "inline-block")	
})

$("#dropdown").mouseover(function() {
	T.css("display", "inline-block")	
	})
	

S=$(".sizes")

$(".dropdownsize").mouseover(function() {
	S.css("display", "inline-block")
})

$(".dropdownsize").mouseout(function() {
	S.css("display", "none")
})



$(".fonts").click(function() {	
	$("#p").css("font-family", this.innerHTML);	
})

$(".sizes").click(function() {
	$("#p").css("fontSize", this.innerHTML +'px')
})

