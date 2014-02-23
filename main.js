var loadData = function(url){

	var AJAX_req = new XMLHttpRequest();

	AJAX_req.open("GET",url,true);
	AJAX_req.setRequestHeader("Content-type", "application/json");

	  AJAX_req.onreadystatechange = function(){
	    if(AJAX_req.readyState == 4 && AJAX_req.status == 200){
	      
	      var data = JSON.parse(AJAX_req.responseText);
	      updatePage(data);
	    }
	  }

	AJAX_req.send();

	}

var updatePage = function(data){

	var projects = document.getElementById("projects");

	data.forEach(function(item,index,array){

		if(item.description !== '' && item.language === "JavaScript"){
		var projectName = item.description;
		var projectElement = document.createElement('a');
		projectElement.className = 'project';
		projectElement.href = "http://vjuutilainen.github.io/"+item.name+"/";
		var textNode = document.createTextNode(projectName);
		projectElement.appendChild(textNode);
		projects.appendChild(projectElement);
		projects.appendChild(document.createElement('p'));
		}

	});

}

window.onload = function(){

	loadData("https://api.github.com/users/vjuutilainen/repos");

}

