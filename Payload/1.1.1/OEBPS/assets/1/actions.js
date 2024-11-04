pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 9455;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj9522_onTap_activeActionGroupIndex = -1;
var obj9522_onTap_runningActionsCount = 0;
var obj9522_onTap_loopCount = 0;
var obj9529_onTap_activeActionGroupIndex = -1;
var obj9529_onTap_runningActionsCount = 0;
var obj9529_onTap_loopCount = 0;
var obj9541_onTap_activeActionGroupIndex = -1;
var obj9541_onTap_runningActionsCount = 0;
var obj9541_onTap_loopCount = 0;
var obj9553_onTap_activeActionGroupIndex = -1;
var obj9553_onTap_runningActionsCount = 0;
var obj9553_onTap_loopCount = 0;
var obj9577_onTap_activeActionGroupIndex = -1;
var obj9577_onTap_runningActionsCount = 0;
var obj9577_onTap_loopCount = 0;
var obj9593_onTap_activeActionGroupIndex = -1;
var obj9593_onTap_runningActionsCount = 0;
var obj9593_onTap_loopCount = 0;
var obj10467_onTap_activeActionGroupIndex = -1;
var obj10467_onTap_runningActionsCount = 0;
var obj10467_onTap_loopCount = 0;

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
		
obj9522_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9522_onTap_activeActionGroupIndex = -1;
		$("#obj9522").trigger("obj9522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9522) {
				console.warn("de-queueing event obj9522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9522_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9526
(function(){
	window.obj9522_onTap_runningActionsCount = obj9522_onTap_runningActionsCount + 1;


	var selector = "#obj9526";
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
					window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup1();
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
				window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9522_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9522_onTap_activeActionGroupIndex = -1;
		$("#obj9522").trigger("obj9522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9522) {
				console.warn("de-queueing event obj9522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9522_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9524();
function playAudioFile_9524() {
	window.obj9522_onTap_runningActionsCount = obj9522_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9524")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9524");
			$("#obj_audio_playSoundFile9524").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup2();
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
				window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9522_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9522_onTap_activeActionGroupIndex = -1;
		$("#obj9522").trigger("obj9522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9522) {
				console.warn("de-queueing event obj9522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9522_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9510 
(function () {
	window.obj9522_onTap_runningActionsCount = obj9522_onTap_runningActionsCount + 1;


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

	if ($("#obj9510").css('filter') == 'none')
$("#obj9510").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9510").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9522_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9522_onTap_activeActionGroupIndex = -1;
		$("#obj9522").trigger("obj9522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9522) {
				console.warn("de-queueing event obj9522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9522_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9715();
function wait_9715() {
	window.obj9522_onTap_runningActionsCount = obj9522_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup4();
}
	}, 500);
}


























};
obj9522_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9522_onTap_activeActionGroupIndex = -1;
		$("#obj9522").trigger("obj9522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9522) {
				console.warn("de-queueing event obj9522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9522_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9528();
function goToPage_9528() {
	window.obj9522_onTap_runningActionsCount = obj9522_onTap_runningActionsCount + 1;

	$("#anchor21")[0].click();
	window.obj9522_onTap_runningActionsCount = window.obj9522_onTap_runningActionsCount - 1;

if (window.obj9522_onTap_runningActionsCount < 0) {
	window.obj9522_onTap_runningActionsCount = 0;
} else if (window.obj9522_onTap_runningActionsCount == 0) {
	obj9522_onTap_actionGroup5();
}
}










































};
obj9522_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9522_onTap_activeActionGroupIndex = -1;
		$("#obj9522").trigger("obj9522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9522) {
				console.warn("de-queueing event obj9522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9522_onTap_activeActionGroupIndex = 5;
	











































};
obj9529_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9529_onTap_activeActionGroupIndex = -1;
		$("#obj9529").trigger("obj9529_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9529) {
				console.warn("de-queueing event obj9529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9529_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9526
(function(){
	window.obj9529_onTap_runningActionsCount = obj9529_onTap_runningActionsCount + 1;


	var selector = "#obj9526";
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
					window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup1();
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
				window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9529_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9529_onTap_activeActionGroupIndex = -1;
		$("#obj9529").trigger("obj9529_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9529) {
				console.warn("de-queueing event obj9529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9529_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9532();
function playAudioFile_9532() {
	window.obj9529_onTap_runningActionsCount = obj9529_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9532")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9532");
			$("#obj_audio_playSoundFile9532").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup2();
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
				window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9529_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9529_onTap_activeActionGroupIndex = -1;
		$("#obj9529").trigger("obj9529_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9529) {
				console.warn("de-queueing event obj9529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9529_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9538 
(function () {
	window.obj9529_onTap_runningActionsCount = obj9529_onTap_runningActionsCount + 1;


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

	if ($("#obj9538").css('filter') == 'none')
$("#obj9538").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9538").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9529_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9529_onTap_activeActionGroupIndex = -1;
		$("#obj9529").trigger("obj9529_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9529) {
				console.warn("de-queueing event obj9529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9529_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9717();
function wait_9717() {
	window.obj9529_onTap_runningActionsCount = obj9529_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup4();
}
	}, 500);
}


























};
obj9529_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9529_onTap_activeActionGroupIndex = -1;
		$("#obj9529").trigger("obj9529_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9529) {
				console.warn("de-queueing event obj9529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9529_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9533();
function goToPage_9533() {
	window.obj9529_onTap_runningActionsCount = obj9529_onTap_runningActionsCount + 1;

	$("#anchor23")[0].click();
	window.obj9529_onTap_runningActionsCount = window.obj9529_onTap_runningActionsCount - 1;

if (window.obj9529_onTap_runningActionsCount < 0) {
	window.obj9529_onTap_runningActionsCount = 0;
} else if (window.obj9529_onTap_runningActionsCount == 0) {
	obj9529_onTap_actionGroup5();
}
}










































};
obj9529_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9529_onTap_activeActionGroupIndex = -1;
		$("#obj9529").trigger("obj9529_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9529) {
				console.warn("de-queueing event obj9529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9529_onTap_activeActionGroupIndex = 5;
	











































};
obj9541_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9541_onTap_activeActionGroupIndex = -1;
		$("#obj9541").trigger("obj9541_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9541) {
				console.warn("de-queueing event obj9541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9541_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9526
(function(){
	window.obj9541_onTap_runningActionsCount = obj9541_onTap_runningActionsCount + 1;


	var selector = "#obj9526";
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
					window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup1();
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
				window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9541_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9541_onTap_activeActionGroupIndex = -1;
		$("#obj9541").trigger("obj9541_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9541) {
				console.warn("de-queueing event obj9541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9541_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9544();
function playAudioFile_9544() {
	window.obj9541_onTap_runningActionsCount = obj9541_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9544")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9544");
			$("#obj_audio_playSoundFile9544").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup2();
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
				window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9541_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9541_onTap_activeActionGroupIndex = -1;
		$("#obj9541").trigger("obj9541_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9541) {
				console.warn("de-queueing event obj9541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9541_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9550 
(function () {
	window.obj9541_onTap_runningActionsCount = obj9541_onTap_runningActionsCount + 1;


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

	if ($("#obj9550").css('filter') == 'none')
$("#obj9550").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9550").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9541_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9541_onTap_activeActionGroupIndex = -1;
		$("#obj9541").trigger("obj9541_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9541) {
				console.warn("de-queueing event obj9541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9541_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9719();
function wait_9719() {
	window.obj9541_onTap_runningActionsCount = obj9541_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup4();
}
	}, 500);
}


























};
obj9541_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9541_onTap_activeActionGroupIndex = -1;
		$("#obj9541").trigger("obj9541_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9541) {
				console.warn("de-queueing event obj9541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9541_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9545();
function goToPage_9545() {
	window.obj9541_onTap_runningActionsCount = obj9541_onTap_runningActionsCount + 1;

	$("#anchor25")[0].click();
	window.obj9541_onTap_runningActionsCount = window.obj9541_onTap_runningActionsCount - 1;

if (window.obj9541_onTap_runningActionsCount < 0) {
	window.obj9541_onTap_runningActionsCount = 0;
} else if (window.obj9541_onTap_runningActionsCount == 0) {
	obj9541_onTap_actionGroup5();
}
}










































};
obj9541_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9541_onTap_activeActionGroupIndex = -1;
		$("#obj9541").trigger("obj9541_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9541) {
				console.warn("de-queueing event obj9541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9541_onTap_activeActionGroupIndex = 5;
	











































};
obj9553_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9553_onTap_activeActionGroupIndex = -1;
		$("#obj9553").trigger("obj9553_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9553) {
				console.warn("de-queueing event obj9553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9553_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9526
(function(){
	window.obj9553_onTap_runningActionsCount = obj9553_onTap_runningActionsCount + 1;


	var selector = "#obj9526";
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
					window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup1();
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
				window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9553_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9553_onTap_activeActionGroupIndex = -1;
		$("#obj9553").trigger("obj9553_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9553) {
				console.warn("de-queueing event obj9553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9553_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9556();
function playAudioFile_9556() {
	window.obj9553_onTap_runningActionsCount = obj9553_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9556")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9556");
			$("#obj_audio_playSoundFile9556").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup2();
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
				window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9553_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9553_onTap_activeActionGroupIndex = -1;
		$("#obj9553").trigger("obj9553_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9553) {
				console.warn("de-queueing event obj9553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9553_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9562 
(function () {
	window.obj9553_onTap_runningActionsCount = obj9553_onTap_runningActionsCount + 1;


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

	if ($("#obj9562").css('filter') == 'none')
$("#obj9562").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9562").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9553_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9553_onTap_activeActionGroupIndex = -1;
		$("#obj9553").trigger("obj9553_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9553) {
				console.warn("de-queueing event obj9553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9553_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9721();
function wait_9721() {
	window.obj9553_onTap_runningActionsCount = obj9553_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup4();
}
	}, 500);
}


























};
obj9553_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9553_onTap_activeActionGroupIndex = -1;
		$("#obj9553").trigger("obj9553_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9553) {
				console.warn("de-queueing event obj9553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9553_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9557();
function goToPage_9557() {
	window.obj9553_onTap_runningActionsCount = obj9553_onTap_runningActionsCount + 1;

	$("#anchor27")[0].click();
	window.obj9553_onTap_runningActionsCount = window.obj9553_onTap_runningActionsCount - 1;

if (window.obj9553_onTap_runningActionsCount < 0) {
	window.obj9553_onTap_runningActionsCount = 0;
} else if (window.obj9553_onTap_runningActionsCount == 0) {
	obj9553_onTap_actionGroup5();
}
}










































};
obj9553_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9553_onTap_activeActionGroupIndex = -1;
		$("#obj9553").trigger("obj9553_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9553) {
				console.warn("de-queueing event obj9553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9553_onTap_activeActionGroupIndex = 5;
	











































};
obj9577_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9577_onTap_activeActionGroupIndex = -1;
		$("#obj9577").trigger("obj9577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9577) {
				console.warn("de-queueing event obj9577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9577_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9526
(function(){
	window.obj9577_onTap_runningActionsCount = obj9577_onTap_runningActionsCount + 1;


	var selector = "#obj9526";
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
					window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup1();
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
				window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9577_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9577_onTap_activeActionGroupIndex = -1;
		$("#obj9577").trigger("obj9577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9577) {
				console.warn("de-queueing event obj9577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9577_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9580();
function playAudioFile_9580() {
	window.obj9577_onTap_runningActionsCount = obj9577_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9580")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9580");
			$("#obj_audio_playSoundFile9580").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup2();
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
				window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9577_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9577_onTap_activeActionGroupIndex = -1;
		$("#obj9577").trigger("obj9577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9577) {
				console.warn("de-queueing event obj9577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9577_onTap_activeActionGroupIndex = 2;
	









































//	action: runJqueryAnimation
//	target: obj9575 
(function () {
	window.obj9577_onTap_runningActionsCount = obj9577_onTap_runningActionsCount + 1;


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

	if ($("#obj9575").css('filter') == 'none')
$("#obj9575").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9575").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup3();
}
		}, 1);
	});
})();

};
obj9577_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9577_onTap_activeActionGroupIndex = -1;
		$("#obj9577").trigger("obj9577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9577) {
				console.warn("de-queueing event obj9577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9577_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_9723();
function wait_9723() {
	window.obj9577_onTap_runningActionsCount = obj9577_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup4();
}
	}, 500);
}


























};
obj9577_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9577_onTap_activeActionGroupIndex = -1;
		$("#obj9577").trigger("obj9577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9577) {
				console.warn("de-queueing event obj9577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9577_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_9581();
function goToPage_9581() {
	window.obj9577_onTap_runningActionsCount = obj9577_onTap_runningActionsCount + 1;

	$("#anchor29")[0].click();
	window.obj9577_onTap_runningActionsCount = window.obj9577_onTap_runningActionsCount - 1;

if (window.obj9577_onTap_runningActionsCount < 0) {
	window.obj9577_onTap_runningActionsCount = 0;
} else if (window.obj9577_onTap_runningActionsCount == 0) {
	obj9577_onTap_actionGroup5();
}
}










































};
obj9577_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9577_onTap_activeActionGroupIndex = -1;
		$("#obj9577").trigger("obj9577_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9577) {
				console.warn("de-queueing event obj9577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9577_onTap_activeActionGroupIndex = 5;
	











































};
obj9593_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9742
(function(){
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


	var selector = "#obj9742";
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
					window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup1();
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
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9593_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj9587 
move_24951();
function move_24951() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9587");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1007;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj9590 
move_24494();
function move_24494() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9590");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_9725();
function playAudioFile_9725() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9725")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9725");
			$("#obj_audio_playSoundFile9725").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
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
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
		}
	}

	
	
	
}



































//	action: runJqueryAnimation
//	target: obj9587 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9587").css('filter') == 'none')
$("#obj9587").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9587").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj9590 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9590").css('filter') == 'none')
$("#obj9590").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9590").animate({ dropShadow: 'drop-shadow(10px 10px 7px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
		}, 1);
	});
})();

};
obj9593_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_9730();
function wait_9730() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup3();
}
	}, 7000);
}


























};
obj9593_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj9590 
move_24491();
function move_24491() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9590");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
}
		}, 1);
	});
}
//	action: move
//	target: obj9587 
move_24492();
function move_24492() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9587");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1007;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_9727();
function playAudioFile_9727() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9727")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9727");
			$("#obj_audio_playSoundFile9727").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
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
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
}
			}, false);
		} else {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
}
		}
	}

	
	
	
}



































//	action: runJqueryAnimation
//	target: obj9590 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9590").css('filter') == 'none')
$("#obj9590").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9590").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj9587 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9587").css('filter') == 'none')
$("#obj9587").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9587").animate({ dropShadow: 'drop-shadow(10px 10px 7px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup4();
}
		}, 1);
	});
})();

};
obj9593_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 4;
	
















//	action: wait
wait_9732();
function wait_9732() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup5();
}
	}, 10000);
}


























};
obj9593_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj9587 
move_24489();
function move_24489() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9587");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1007;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
}
		}, 1);
	});
}
//	action: move
//	target: obj9590 
move_24488();
function move_24488() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9590");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_9734();
function playAudioFile_9734() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9734")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9734");
			$("#obj_audio_playSoundFile9734").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
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
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
}
			}, false);
		} else {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
}
		}
	}

	
	
	
}



































//	action: runJqueryAnimation
//	target: obj9587 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9587").css('filter') == 'none')
$("#obj9587").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9587").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj9590 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9590").css('filter') == 'none')
$("#obj9590").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9590").animate({ dropShadow: 'drop-shadow(10px 10px 7px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup6();
}
		}, 1);
	});
})();

};
obj9593_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 6;
	
















//	action: wait
wait_9736();
function wait_9736() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup7();
}
	}, 14000);
}


























};
obj9593_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 7;
	



//	action: move
//	target: obj9590 
move_24490();
function move_24490() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9590");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
}
		}, 1);
	});
}
//	action: move
//	target: obj9587 
move_24487();
function move_24487() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9587");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1007;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_9738();
function playAudioFile_9738() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9738")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9738");
			$("#obj_audio_playSoundFile9738").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
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
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
}
			}, false);
		} else {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
}
		}
	}

	
	
	
}



































//	action: runJqueryAnimation
//	target: obj9590 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9590").css('filter') == 'none')
$("#obj9590").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9590").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj9587 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9587").css('filter') == 'none')
$("#obj9587").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9587").animate({ dropShadow: 'drop-shadow(10px 10px 7px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup8();
}
		}, 1);
	});
})();

};
obj9593_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 8;
	
















//	action: wait
wait_9740();
function wait_9740() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup9();
}
	}, 6000);
}


























};
obj9593_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 9;
	



//	action: move
//	target: obj9587 
move_24495();
function move_24495() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj9587");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1007;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup10();
}
		}, 1);
	});
}





































//	action: runJqueryAnimation
//	target: obj9587 
(function () {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;


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

	if ($("#obj9587").css('filter') == 'none')
$("#obj9587").css("filter", "0px 0px 0px rgba(0,0,0,0)");
	$("#obj9587").animate({ dropShadow: 'drop-shadow(0px 0px 0px rgba(0,197,17,0.6078431))'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup10();
}
		}, 1);
	});
})();

};
obj9593_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 10;
	

//	action: hide
//	selector: obj#obj9742 
hide_9746();
function hide_9746() {
	var selector = "#obj9742";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup11();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9746(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;

if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup11();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9593_onTap_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 11;
	











































};
obj10467_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10467_onTap_activeActionGroupIndex = -1;
		$("#obj10467").trigger("obj10467_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10467) {
				console.warn("de-queueing event obj10467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10467_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10469();
function goToPage_10469() {
	window.obj10467_onTap_runningActionsCount = obj10467_onTap_runningActionsCount + 1;

	$("#anchor34")[0].click();
	window.obj10467_onTap_runningActionsCount = window.obj10467_onTap_runningActionsCount - 1;

if (window.obj10467_onTap_runningActionsCount < 0) {
	window.obj10467_onTap_runningActionsCount = 0;
} else if (window.obj10467_onTap_runningActionsCount == 0) {
	obj10467_onTap_actionGroup1();
}
}










































};
obj10467_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10467_onTap_activeActionGroupIndex = -1;
		$("#obj10467").trigger("obj10467_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10467) {
				console.warn("de-queueing event obj10467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10467_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj9522: Event Touch Down
 *
 */

$("#obj9522").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9522_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9522_onTap is still running");
	return;
}
var obj9522_onTap_runningActionsCount = 0;
var obj9522_onTap_loopCount = 0;
obj9522_onTap_actionGroup0();
});











































































/*
 *
 *   obj9529: Event Touch Down
 *
 */

$("#obj9529").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9529_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9529_onTap is still running");
	return;
}
var obj9529_onTap_runningActionsCount = 0;
var obj9529_onTap_loopCount = 0;
obj9529_onTap_actionGroup0();
});











































































/*
 *
 *   obj9541: Event Touch Down
 *
 */

$("#obj9541").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9541_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9541_onTap is still running");
	return;
}
var obj9541_onTap_runningActionsCount = 0;
var obj9541_onTap_loopCount = 0;
obj9541_onTap_actionGroup0();
});











































































/*
 *
 *   obj9553: Event Touch Down
 *
 */

$("#obj9553").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9553_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9553_onTap is still running");
	return;
}
var obj9553_onTap_runningActionsCount = 0;
var obj9553_onTap_loopCount = 0;
obj9553_onTap_actionGroup0();
});











































































/*
 *
 *   obj9577: Event Touch Down
 *
 */

$("#obj9577").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9577_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9577_onTap is still running");
	return;
}
var obj9577_onTap_runningActionsCount = 0;
var obj9577_onTap_loopCount = 0;
obj9577_onTap_actionGroup0();
});
























































/*
 *
 *   obj9593: Event Touch Down
 *
 */

$("#obj9593").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9593_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9593_onTap is still running");
	return;
}
var obj9593_onTap_runningActionsCount = 0;
var obj9593_onTap_loopCount = 0;
obj9593_onTap_actionGroup0();
});
























































/*
 *
 *   obj10467: Event Touch Down
 *
 */

$("#obj10467").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj10467_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10467_onTap is still running");
	return;
}
var obj10467_onTap_runningActionsCount = 0;
var obj10467_onTap_loopCount = 0;
obj10467_onTap_actionGroup0();
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
	
$("#obj9584").trigger('SCEventShow');
$("#obj9510").trigger('SCEventShow');
$("#obj9512").trigger('SCEventShow');
$("#obj9519").trigger('SCEventShow');
$("#obj9522").trigger('SCEventShow');
$("#obj9538").trigger('SCEventShow');
$("#obj9536").trigger('SCEventShow');
$("#obj9534").trigger('SCEventShow');
$("#obj9529").trigger('SCEventShow');
$("#obj9550").trigger('SCEventShow');
$("#obj9548").trigger('SCEventShow');
$("#obj9546").trigger('SCEventShow');
$("#obj9541").trigger('SCEventShow');
$("#obj9562").trigger('SCEventShow');
$("#obj9560").trigger('SCEventShow');
$("#obj9558").trigger('SCEventShow');
$("#obj9553").trigger('SCEventShow');
$("#obj9575").trigger('SCEventShow');
$("#obj9573").trigger('SCEventShow');
$("#obj9571").trigger('SCEventShow');
$("#obj9577").trigger('SCEventShow');
$("#obj9587").trigger('SCEventShow');
$("#obj9590").trigger('SCEventShow');
$("#obj9593").trigger('SCEventShow');
$("#obj10467").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});