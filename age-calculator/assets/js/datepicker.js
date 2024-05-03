$(function() {
	$('.datepicker_us').datepicker({
	  dateFormat: 'mm/dd/yy',
	  prevText: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 19L8 12L15 5" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	  nextText: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5L16 12L9 19" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	  onSelect: function(dateText, inst) {
		updateDate(inst.input);
		// Prevent the default behavior of scrolling and adding hash to URL
		event.preventDefault();
	  },
	  beforeShow: function(input, inst) {
		inst.dpDiv.addClass('datepicker-custom');
	  },
	  onClose: function(dateText, inst) {
		inst.dpDiv.removeClass('datepicker-custom');
	  }
	});
  
	$('.datepicker').datepicker({
	  dateFormat: 'yy-mm-dd',
	  prevText: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 19L8 12L15 5" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	  nextText: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5L16 12L9 19" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	  onSelect: function(dateText, inst) {
		updateDate(inst.input);
		// Prevent the default behavior of scrolling and adding hash to URL
		event.preventDefault();
	  },
	  beforeShow: function(input, inst) {
		inst.dpDiv.addClass('datepicker-custom');
	  },
	  onClose: function(dateText, inst) {
		inst.dpDiv.removeClass('datepicker-custom');
	  }
	});
  });
  