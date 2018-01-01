'use strict'

document.addEventListener("DOMContentLoaded", function(){
var year = 24;
var container = document.getElementsByClassName("container")[0];




for (var i = 0; i < year; i++){
	var ovly = document.createElement("div");
	var col = document.createElement("div")
	var img = document.createElement("img")
	var link = document.createElement("a")
	ovly.setAttribute("class","overlay");
	col.setAttribute("class", "slot");
	col.addEventListener("mouseenter", function(){
		this.style.zIndex = "100";
		this.style.position = 'relative'
		console.log(this.style.zIndex);
	})
	var j = i + 1;
	link.setAttribute("href", "2016/09/12/" + Math.abs(j-25) + ".html" );
	link.setAttribute("target", "_blank")
	img.setAttribute("src", "images/mainPage/" + Math.abs(j-25) + ".png");
	img.setAttribute("onerror", "this.style.display = 'none'");
	// console.log(img.attributes.src.nodeValue)
	var text = document.createElement("p");
	var tNode = document.createTextNode(Math.abs(j-25) + 'th' + ' Street Art Festival');
	if (Math.abs(j-25) == 1)
		{var tNode = document.createTextNode(Math.abs(j-25) + 'st' + ' Street Art Festival');	}
	else if (Math.abs(j-25) == 2)
		{var tNode = document.createTextNode(Math.abs(j-25) + 'nd' + ' Street Art Festival');	}
	else if (Math.abs(j-25) == 3)
		{var tNode = document.createTextNode(Math.abs(j-25) + 'rd' + ' Street Art Festival');	}
	var index = i+1;
	container.appendChild(ovly);
	ovly.appendChild(col);
	col.appendChild(text);
	text.appendChild(tNode);
	col.appendChild(link);
	link.appendChild(img);
	ovly.style.backgroundColor = "transparent";
		if (index == 2){
			ovly.style.width = "33.4%";
			}
	else if (index > 2){
		if ((index-2)%3 == 0)
				{
					ovly.style.width = "33.4%";
				}
			}
	} 

})


