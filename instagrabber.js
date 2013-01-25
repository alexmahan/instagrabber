(function ($) {
	$.fn.extend({
		instaGrabber: function (options) {
		
			var settings = {
				postID: [],
				imageSize: 'm',
				container: 'li'
			};
			
			options =  $.extend(settings, options);
			
			return this.each(function () {
			
				var o = options;
					obj = $(this);
					size = o.imageSize;
					wrapper = o.container;
					
				$.each(o.postID, function (index,value) {
					var postContent = '<a href="http://instagr.am/p/'+value+'"><img src="http://instagr.am/p/'+value+'/media/?size='+size+'"></a></'+wrapper+'>';
					var post = $('<'+wrapper+'/>').html(postContent);
					$(obj).append(post);
				});
				
			});
			
		}
	});
})(jQuery);