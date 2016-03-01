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
//= require 'vendor/icheck/icheck'
//= require 'vendor/select2.min.js'
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



$(document).ready(function() {
		//link instead button
		$("#submitBtn").click(function(event) {
		  event.preventDefault();
		  $("#formId").submit();
		});

		//pre set of icheck-ed fields
		$('input').on('ifCreated', function(){
			if ($(this).attr('value') == 'true') {
				$(this).iCheck('check');
				$('#item_'+$(this).attr('id')).addClass('checked_item');
			}
		});

		//icheck general settings
		$('input').iCheck({
			checkboxClass: 'icheckbox_square-blue',
			radioClass: 'iradio_square-blue',
			increaseArea: '20%' // optional
		});

		//icheck line-through onclick to checkbox from icheck library
		$('input').on('ifChecked', function(){
			$('#item_'+$(this).attr('id')).addClass('checked_item');
			//update page when checked
			//$("#check_form").submit();
		});
		$('input').on('ifUnchecked', function(){
			$('#item_'+$(this).attr('id')).removeClass('checked_item');
			//update page when unchecked
			//$("#check_form").submit();
		});

		//subnmit
		$('input').on('ifClicked', function(event){
		 var id = $(this).attr('id');
		 var submit;
		 var submits = document.getElementsByName('commit');
		 for (var i=0;i<submits.length;i++){
				 if (submits[i].getAttribute('id')==id){
					 submit = submits[i];
			 }
		 }
		 submit.click();
		});


		//hide window of creating todo
		$('#creating_todo').hide();
		$('#plus').click(function(){
			$('#creating_todo').show();
		});
		$('#undo').click(function(){
			$('#creating_todo').hide();
		});

		//select2 library
		$(".js-example-basic-single").select2({
			placeholder: "Категория",
			clear: true,
  		allowClear: true,
			minimumResultsForSearch: Infinity


		});

});
