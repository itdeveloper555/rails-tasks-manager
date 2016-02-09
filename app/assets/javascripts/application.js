// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require_tree .

/*

*/

//show or hide div with adding new todo
function hideToggle(newTodo, plus){
	var newTodo = document.getElementById(newTodo);
	var plus = document.getElementById(plus);
	console.log(newTodo.style.visibility);
	if (newTodo.style.visibility == 'visible' || newTodo.style.visibility == '') {
		newTodo.display = 'none';
		newTodo.style.visibility = 'hidden';
		plus.display = 'inline-block';
		plus.style.visibility = 'visible';
	} else {
		newTodo.display = 'inline-block';
		newTodo.style.visibility = 'visible';

		plus.display = 'none';
		plus.style.visibility = 'hidden';
	}
	var value = document.getElementById("selId").value;
	console.log(value);
}

//link instead button
$(document).ready(function() {
		$("#submitBtn").click(function(event) {
		  event.preventDefault();
		  $("#formId").submit();
		});
		//var hider2 = function() {$('#mynewTodo').hide();}
});
