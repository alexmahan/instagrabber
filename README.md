instaGrabber
============

A jQuery plugin for grabbing and displaying *specific* Instagram posts

How to use it:  
1) Include jQuery  
2) Include instagrabber.js  
3) In your document ready, initialize the plugin as follows. You have a few options:  

    $(document).ready(function() {
        $('#instagram').instaGrabber({
          // array of post IDs
        	postID: ['UWYz6lnWaP','Ug1byJwEON','UfVDt4umPL','Lax092As8q'],
        	// image size - options are t, m, or l
        	imageSize: 't',
        	// container element for each image, default is li
        	container: 'li'
        });
    });
