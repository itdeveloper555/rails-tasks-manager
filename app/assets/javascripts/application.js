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

//show or hide div with adding new todo
function hideToggle(newTodo, plus){
	var newTodo = document.getElementById(newTodo);
	var plus = document.getElementById(plus);
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

}



$(document).ready(function() {
		
		$("#create_btn").click(function() {$("#create_todo_form").submit();});//link instead button

		//pre set of icheck-ed fields
		$('input').on('ifCreated', function(){
			if ($(this).attr('value') == 'true') {
				$(this).iCheck('check');
				$('#todo_text_'+$(this).attr('id')).addClass('checked_item');
			}
		});
		
		$('input').iCheck({checkboxClass: 'icheckbox_square-blue', radioClass: 'iradio_square-blue', increaseArea: '20%' /*optional*/});//icheck general settings

		$('input').on('ifChecked', function(){$('#todo_text_'+$(this).attr('id')).addClass('checked_item');});//icheck line-through
		$('input').on('ifUnchecked', function(){$('#todo_text_'+$(this).attr('id')).removeClass('checked_item');});//icheck line-through

		//subnmit
		$('input').on('ifClicked', function(){
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
		
		$('#plus').click(function(){$('#cn').show();});//show window of creating todo
		$('#undo_btn').click(function(){$('#cn').hide();});//hide window of creating todo
		$("#project_selection").select2({placeholder: "Категория", clear: true, allowClear: true, minimumResultsForSearch: Infinity });//select2 library

});
