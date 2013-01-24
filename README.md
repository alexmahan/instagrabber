instaGrabber
============

A simple jQuery plugin for grabbing and displaying *specific* Instagram posts.

[jQuery Instagram](https://github.com/potomak/jquery-instagram) is great for getting Instagram pics by hashtag, user, or even location.

However, what if you want to display a list of images based on specific posts? instaGrabber may help.

How to use it:  
1) Include jQuery  
2) Include instagrabber.js  
3) In your document ready, initialize the plugin on some element.  
4) Insert some Instagram post IDs into the postID array.  
5) Choose your image size (t, m, or l).  
6) Choose your preferred containing element.  

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
