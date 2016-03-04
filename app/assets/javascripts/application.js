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

$(document).ready(function() {

		//icheck make true-buttons checked on start
		$('input').on('ifCreated', function(){
			if ($(this).attr('value')=='true') {$(this).iCheck('check'); $('#todo_text_'+$(this).attr('id')).addClass('checked_item');}
		});

		//icheck library settings
		$('input').iCheck({checkboxClass: 'icheckbox_square-blue', radioClass: 'iradio_square-blue', increaseArea: '20%' /*optional*/});

		//icheck line-through
		$('input').on('ifChecked ifUnchecked', function(){$('#todo_text_'+$(this).attr('id')).toggleClass('checked_item');});

		//submit
		$('input').on('ifClicked', function(){$('#submit_flag_'+$(this).attr('id')).click();});
		
		//link instead button
		$("#create_btn").click(function() {$("#create_todo_form").submit();});

		//toggle window of creating todo
		$('#plus_btn,  #undo_btn').click(function(){$('#cn').toggle();});

		//select2 library settings
		$("#project_selection").select2({placeholder: "Категория", clear: true, allowClear: true, minimumResultsForSearch: Infinity });

});
