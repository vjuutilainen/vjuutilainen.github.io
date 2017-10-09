var loadData = function(url){
	var AJAX_req = new XMLHttpRequest();
	AJAX_req.open('GET',url,true);
	AJAX_req.setRequestHeader('Content-type', 'application/json');
	  AJAX_req.onreadystatechange = function(){
	    if(AJAX_req.readyState == 4 && AJAX_req.status == 200){
	      var data = JSON.parse(AJAX_req.responseText);
	      updatePage(data);
	    }
	  };
	AJAX_req.send();
};

var updatePage = function(data){
	var projects = document.getElementById('projects');
	var projectElement = document.createElement('p');
	var textNode = document.createTextNode('Now there are ' + data.length + ' projects.');
	projectElement.appendChild(textNode);
	projects.appendChild(projectElement);
};

window.onload = function(){
	loadData('https://api.github.com/users/vjuutilainen/repos');
};
