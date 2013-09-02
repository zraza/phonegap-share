var AppShare = (function() {
var openShare = function(){

	var current = window.Code.PhotoSwipe.photoSwipeInstance.getCurrentImage();
	//alert(current.caption)
		var _shareItem = function(buttonIndex){
			var url = null;
			switch(buttonIndex){
				case 1:
	            cordova.require('emailcomposer.EmailComposer').show({subject: current.caption,body: '<img style="max-width:100%;" src="'+current.src+'" />',isHtml: true});
				break;
				case 2:
				url = 'http://www.facebook.com/sharer/sharer.php?u='+current.src;
				break;
				case 3:
				url = 'http://twitter.com/intent/tweet?text='+escape(current.caption)+'&url='+current.src;
				break;

			}
			if(url!==null)
			var ref = window.open(url, '_blank', 'location=yes');
	};

	navigator.notification.confirm(current.caption, _shareItem, 'Send Card', 'Email,Facebook,Twitter,Cancel');
	return;
};
return {
	openShare
};
});

module.exports = new AppShare;
