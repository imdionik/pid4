pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 9598;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 2;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;



/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj9670_onTap_activeActionGroupIndex = -1;
var obj9670_onTap_runningActionsCount = 0;
var obj9670_onTap_loopCount = 0;
var obj9677_onTap_activeActionGroupIndex = -1;
var obj9677_onTap_runningActionsCount = 0;
var obj9677_onTap_loopCount = 0;
var obj9683_onTap_activeActionGroupIndex = -1;
var obj9683_onTap_runningActionsCount = 0;
var obj9683_onTap_loopCount = 0;
var obj9701_onTap_activeActionGroupIndex = -1;
var obj9701_onTap_runningActionsCount = 0;
var obj9701_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 

 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 

 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    

	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj9670_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9670_onTap_activeActionGroupIndex = -1;
		$("#obj9670").trigger("obj9670_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9670) {
				console.warn("de-queueing event obj9670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9670_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9672();
function goToPage_9672() {
	window.obj9670_onTap_runningActionsCount = obj9670_onTap_runningActionsCount + 1;

	$("#anchor35")[0].click();
	window.obj9670_onTap_runningActionsCount = window.obj9670_onTap_runningActionsCount - 1;

if (window.obj9670_onTap_runningActionsCount < 0) {
	window.obj9670_onTap_runningActionsCount = 0;
} else if (window.obj9670_onTap_runningActionsCount == 0) {
	obj9670_onTap_actionGroup1();
}
}










































};
obj9670_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9670_onTap_activeActionGroupIndex = -1;
		$("#obj9670").trigger("obj9670_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9670) {
				console.warn("de-queueing event obj9670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9670_onTap_activeActionGroupIndex = 1;
	











































};
obj9677_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9677_onTap_activeActionGroupIndex = -1;
		$("#obj9677").trigger("obj9677_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9677) {
				console.warn("de-queueing event obj9677." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9677").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9677_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9693
(function(){
	window.obj9677_onTap_runningActionsCount = obj9677_onTap_runningActionsCount + 1;


	var selector = "#obj9693";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9677_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9677_onTap_activeActionGroupIndex = -1;
		$("#obj9677").trigger("obj9677_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9677) {
				console.warn("de-queueing event obj9677." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9677").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9677_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9680();
function playAudioFile_9680() {
	window.obj9677_onTap_runningActionsCount = obj9677_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9680")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9680");
			$("#obj_audio_playSoundFile9680").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9677_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9677_onTap_activeActionGroupIndex = -1;
		$("#obj9677").trigger("obj9677_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9677) {
				console.warn("de-queueing event obj9677." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9677").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9677_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9673 
(function () {
	window.obj9677_onTap_runningActionsCount = obj9677_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj9673").css('filter') == 'none')
$("#obj9673").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9673").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9677_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9677_onTap_activeActionGroupIndex = -1;
		$("#obj9677").trigger("obj9677_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9677) {
				console.warn("de-queueing event obj9677." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9677").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9677_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9711();
function wait_9711() {
	window.obj9677_onTap_runningActionsCount = obj9677_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj9677_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9677_onTap_activeActionGroupIndex = -1;
		$("#obj9677").trigger("obj9677_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9677) {
				console.warn("de-queueing event obj9677." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9677").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9677_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9682();
function goToPage_9682() {
	window.obj9677_onTap_runningActionsCount = obj9677_onTap_runningActionsCount + 1;

	$("#anchor37")[0].click();
	window.obj9677_onTap_runningActionsCount = window.obj9677_onTap_runningActionsCount - 1;

if (window.obj9677_onTap_runningActionsCount < 0) {
	window.obj9677_onTap_runningActionsCount = 0;
} else if (window.obj9677_onTap_runningActionsCount == 0) {
	obj9677_onTap_actionGroup5();
}
}










































};
obj9677_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9677_onTap_activeActionGroupIndex = -1;
		$("#obj9677").trigger("obj9677_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9677) {
				console.warn("de-queueing event obj9677." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9677").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9677_onTap_activeActionGroupIndex = 5;
	











































};
obj9683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9683_onTap_activeActionGroupIndex = -1;
		$("#obj9683").trigger("obj9683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9683) {
				console.warn("de-queueing event obj9683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9683_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9693
(function(){
	window.obj9683_onTap_runningActionsCount = obj9683_onTap_runningActionsCount + 1;


	var selector = "#obj9693";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9683_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9683_onTap_activeActionGroupIndex = -1;
		$("#obj9683").trigger("obj9683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9683) {
				console.warn("de-queueing event obj9683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9683_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9686();
function playAudioFile_9686() {
	window.obj9683_onTap_runningActionsCount = obj9683_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9686")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9686");
			$("#obj_audio_playSoundFile9686").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9683_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9683_onTap_activeActionGroupIndex = -1;
		$("#obj9683").trigger("obj9683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9683) {
				console.warn("de-queueing event obj9683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9683_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9691 
(function () {
	window.obj9683_onTap_runningActionsCount = obj9683_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj9691").css('filter') == 'none')
$("#obj9691").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9691").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9683_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9683_onTap_activeActionGroupIndex = -1;
		$("#obj9683").trigger("obj9683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9683) {
				console.warn("de-queueing event obj9683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9683_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9712();
function wait_9712() {
	window.obj9683_onTap_runningActionsCount = obj9683_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj9683_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9683_onTap_activeActionGroupIndex = -1;
		$("#obj9683").trigger("obj9683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9683) {
				console.warn("de-queueing event obj9683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9683_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9688();
function goToPage_9688() {
	window.obj9683_onTap_runningActionsCount = obj9683_onTap_runningActionsCount + 1;

	$("#anchor39")[0].click();
	window.obj9683_onTap_runningActionsCount = window.obj9683_onTap_runningActionsCount - 1;

if (window.obj9683_onTap_runningActionsCount < 0) {
	window.obj9683_onTap_runningActionsCount = 0;
} else if (window.obj9683_onTap_runningActionsCount == 0) {
	obj9683_onTap_actionGroup5();
}
}










































};
obj9683_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9683_onTap_activeActionGroupIndex = -1;
		$("#obj9683").trigger("obj9683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9683) {
				console.warn("de-queueing event obj9683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9683_onTap_activeActionGroupIndex = 5;
	











































};
obj9701_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9701_onTap_activeActionGroupIndex = -1;
		$("#obj9701").trigger("obj9701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9701) {
				console.warn("de-queueing event obj9701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9701_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9693
(function(){
	window.obj9701_onTap_runningActionsCount = obj9701_onTap_runningActionsCount + 1;


	var selector = "#obj9693";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9701_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9701_onTap_activeActionGroupIndex = -1;
		$("#obj9701").trigger("obj9701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9701) {
				console.warn("de-queueing event obj9701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9701_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9704();
function playAudioFile_9704() {
	window.obj9701_onTap_runningActionsCount = obj9701_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9704")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9704");
			$("#obj_audio_playSoundFile9704").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9701_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9701_onTap_activeActionGroupIndex = -1;
		$("#obj9701").trigger("obj9701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9701) {
				console.warn("de-queueing event obj9701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9701_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9709 
(function () {
	window.obj9701_onTap_runningActionsCount = obj9701_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	if ($("#obj9709").css('filter') == 'none')
$("#obj9709").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9709").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9701_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9701_onTap_activeActionGroupIndex = -1;
		$("#obj9701").trigger("obj9701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9701) {
				console.warn("de-queueing event obj9701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9701_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9713();
function wait_9713() {
	window.obj9701_onTap_runningActionsCount = obj9701_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup4();
}
	}, 1000);
}


























};
obj9701_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9701_onTap_activeActionGroupIndex = -1;
		$("#obj9701").trigger("obj9701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9701) {
				console.warn("de-queueing event obj9701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9701_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9706();
function goToPage_9706() {
	window.obj9701_onTap_runningActionsCount = obj9701_onTap_runningActionsCount + 1;

	$("#anchor41")[0].click();
	window.obj9701_onTap_runningActionsCount = window.obj9701_onTap_runningActionsCount - 1;

if (window.obj9701_onTap_runningActionsCount < 0) {
	window.obj9701_onTap_runningActionsCount = 0;
} else if (window.obj9701_onTap_runningActionsCount == 0) {
	obj9701_onTap_actionGroup5();
}
}










































};
obj9701_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9701_onTap_activeActionGroupIndex = -1;
		$("#obj9701").trigger("obj9701_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9701) {
				console.warn("de-queueing event obj9701." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9701").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9701_onTap_activeActionGroupIndex = 5;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




































































































/*
 *
 *   obj9670: Event Touch Down
 *
 */

$("#obj9670").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9670_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9670_onTap is still running");
	return;
}
var obj9670_onTap_runningActionsCount = 0;
var obj9670_onTap_loopCount = 0;
obj9670_onTap_actionGroup0();
});
























































/*
 *
 *   obj9677: Event Touch Down
 *
 */

$("#obj9677").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9677_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9677_onTap is still running");
	return;
}
var obj9677_onTap_runningActionsCount = 0;
var obj9677_onTap_loopCount = 0;
obj9677_onTap_actionGroup0();
});
























































/*
 *
 *   obj9683: Event Touch Down
 *
 */

$("#obj9683").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9683_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9683_onTap is still running");
	return;
}
var obj9683_onTap_runningActionsCount = 0;
var obj9683_onTap_loopCount = 0;
obj9683_onTap_actionGroup0();
});
























































/*
 *
 *   obj9701: Event Touch Down
 *
 */

$("#obj9701").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9701_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9701_onTap is still running");
	return;
}
var obj9701_onTap_runningActionsCount = 0;
var obj9701_onTap_loopCount = 0;
obj9701_onTap_actionGroup0();
});


























































































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});

$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj9599").trigger('SCEventShow');
$("#obj9664").trigger('SCEventShow');
$("#obj9666").trigger('SCEventShow');
$("#obj9668").trigger('SCEventShow');
$("#obj9670").trigger('SCEventShow');
$("#obj9673").trigger('SCEventShow');
$("#obj9675").trigger('SCEventShow');
$("#obj9677").trigger('SCEventShow');
$("#obj9691").trigger('SCEventShow');
$("#obj9689").trigger('SCEventShow');
$("#obj9683").trigger('SCEventShow');
$("#obj9709").trigger('SCEventShow');
$("#obj9707").trigger('SCEventShow');
$("#obj9701").trigger('SCEventShow');
$("#obj10471").trigger('SCEventShow');
$("#obj10474").trigger('SCEventShow');
$("#obj10479").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});