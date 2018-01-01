
function callBack (){
var naviCon = document.getElementsByClassName("navi")[0];
itemCon = document.getElementsByClassName("contents-container")[0]
naviCon.children[0].classList.add("black");
itemCon.children[0].classList.remove("hide");
for (var i=0; i < naviCon.children.length; i++){
	naviCon.children[i].addEventListener("click", function(){	
		for(var j=0; j < naviCon.children.length; j++)
			{
				naviCon.children[j].classList.add("white");
				itemCon.children[j].classList.add("hide")
				if(naviCon.children[j] === this){
					naviCon.children[j].classList.remove("white")
					naviCon.children[j].classList.add("black")
					}
				if(itemCon.children[j].classList[1] === this.id){
					itemCon.children[j].classList.remove("hide")
					console.log(itemCon.children[j].classList[1])
					}
			}
	} <!--Nested for-->
) <!--Event-->
} <!--for-->
} <!--callBack -->

if(document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll) )
	{callBack();}
else 
	document.addEventListener("DOMContentLoaded", callBack);
