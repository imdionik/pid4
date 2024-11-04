pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 7831;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 3;
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
var obj8035_onTap_activeActionGroupIndex = -1;
var obj8035_onTap_runningActionsCount = 0;
var obj8035_onTap_loopCount = 0;
var obj8058_onTap_activeActionGroupIndex = -1;
var obj8058_onTap_runningActionsCount = 0;
var obj8058_onTap_loopCount = 0;
var obj8068_onTap_activeActionGroupIndex = -1;
var obj8068_onTap_runningActionsCount = 0;
var obj8068_onTap_loopCount = 0;
var obj8076_onTap_activeActionGroupIndex = -1;
var obj8076_onTap_runningActionsCount = 0;
var obj8076_onTap_loopCount = 0;
var obj8084_onTap_activeActionGroupIndex = -1;
var obj8084_onTap_runningActionsCount = 0;
var obj8084_onTap_loopCount = 0;
var obj8092_onTap_activeActionGroupIndex = -1;
var obj8092_onTap_runningActionsCount = 0;
var obj8092_onTap_loopCount = 0;
var obj8100_onTap_activeActionGroupIndex = -1;
var obj8100_onTap_runningActionsCount = 0;
var obj8100_onTap_loopCount = 0;
var obj8108_onTap_activeActionGroupIndex = -1;
var obj8108_onTap_runningActionsCount = 0;
var obj8108_onTap_loopCount = 0;
var obj8118_onTap_activeActionGroupIndex = -1;
var obj8118_onTap_runningActionsCount = 0;
var obj8118_onTap_loopCount = 0;
var obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8120_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8224_onTap_activeActionGroupIndex = -1;
var obj8224_onTap_runningActionsCount = 0;
var obj8224_onTap_loopCount = 0;
var obj8228_onTap_activeActionGroupIndex = -1;
var obj8228_onTap_runningActionsCount = 0;
var obj8228_onTap_loopCount = 0;
var obj8232_onTap_activeActionGroupIndex = -1;
var obj8232_onTap_runningActionsCount = 0;
var obj8232_onTap_loopCount = 0;
var obj24498_onTap_activeActionGroupIndex = -1;
var obj24498_onTap_runningActionsCount = 0;
var obj24498_onTap_loopCount = 0;
var obj24506_onTap_activeActionGroupIndex = -1;
var obj24506_onTap_runningActionsCount = 0;
var obj24506_onTap_loopCount = 0;
var obj24510_onTap_activeActionGroupIndex = -1;
var obj24510_onTap_runningActionsCount = 0;
var obj24510_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj8120_counterValue = 0;
var obj8120_counterTargetValue = 3;
var obj8120_counterCanExceedTargetValue = false;

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
		
obj8035_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8035_onTap_activeActionGroupIndex = -1;
		$("#obj8035").trigger("obj8035_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8035) {
				console.warn("de-queueing event obj8035." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8035").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8035_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_8037();
function goToPage_8037() {
	window.obj8035_onTap_runningActionsCount = obj8035_onTap_runningActionsCount + 1;

	$("#anchor42")[0].click();
	window.obj8035_onTap_runningActionsCount = window.obj8035_onTap_runningActionsCount - 1;

if (window.obj8035_onTap_runningActionsCount < 0) {
	window.obj8035_onTap_runningActionsCount = 0;
} else if (window.obj8035_onTap_runningActionsCount == 0) {
	obj8035_onTap_actionGroup1();
}
}










































};
obj8035_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8035_onTap_activeActionGroupIndex = -1;
		$("#obj8035").trigger("obj8035_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8035) {
				console.warn("de-queueing event obj8035." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8035").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8035_onTap_activeActionGroupIndex = 1;
	











































};
obj8058_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8058_onTap_activeActionGroupIndex = -1;
		$("#obj8058").trigger("obj8058_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8058) {
				console.warn("de-queueing event obj8058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8058_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11335
(function(){
	window.obj8058_onTap_runningActionsCount = obj8058_onTap_runningActionsCount + 1;


	var selector = "#obj11335";
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
					window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup1();
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
				window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8058_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8058_onTap_activeActionGroupIndex = -1;
		$("#obj8058").trigger("obj8058_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8058) {
				console.warn("de-queueing event obj8058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8058_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8143();
function playAudioFile_8143() {
	window.obj8058_onTap_runningActionsCount = obj8058_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8143")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8143");
			$("#obj_audio_playSoundFile8143").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup2();
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
				window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8058_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8058_onTap_activeActionGroupIndex = -1;
		$("#obj8058").trigger("obj8058_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8058) {
				console.warn("de-queueing event obj8058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8058_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8144();
function runjs_8144() {
	window.obj8058_onTap_runningActionsCount = obj8058_onTap_runningActionsCount + 1;


	$("#obj8058").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup3();
}
	}, 1);
}














};
obj8058_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8058_onTap_activeActionGroupIndex = -1;
		$("#obj8058").trigger("obj8058_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8058) {
				console.warn("de-queueing event obj8058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8058_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8145();
function incrementCounter_8145() {
	window.obj8058_onTap_runningActionsCount = obj8058_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8058_onTap_runningActionsCount = window.obj8058_onTap_runningActionsCount - 1;

if (window.obj8058_onTap_runningActionsCount < 0) {
	window.obj8058_onTap_runningActionsCount = 0;
} else if (window.obj8058_onTap_runningActionsCount == 0) {
	obj8058_onTap_actionGroup4();
} }, 1);
}











};
obj8058_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8058_onTap_activeActionGroupIndex = -1;
		$("#obj8058").trigger("obj8058_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8058) {
				console.warn("de-queueing event obj8058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8058_onTap_activeActionGroupIndex = 4;
	











































};
obj8068_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8068_onTap_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8068) {
				console.warn("de-queueing event obj8068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8068_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11338
(function(){
	window.obj8068_onTap_runningActionsCount = obj8068_onTap_runningActionsCount + 1;


	var selector = "#obj11338";
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
					window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup1();
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
				window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8068_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8068_onTap_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8068) {
				console.warn("de-queueing event obj8068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8068_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8140();
function playAudioFile_8140() {
	window.obj8068_onTap_runningActionsCount = obj8068_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8140")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8140");
			$("#obj_audio_playSoundFile8140").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup2();
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
				window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8068_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8068_onTap_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8068) {
				console.warn("de-queueing event obj8068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8068_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8141();
function runjs_8141() {
	window.obj8068_onTap_runningActionsCount = obj8068_onTap_runningActionsCount + 1;


	$("#obj8068").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup3();
}
	}, 1);
}














};
obj8068_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8068_onTap_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8068) {
				console.warn("de-queueing event obj8068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8068_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8142();
function incrementCounter_8142() {
	window.obj8068_onTap_runningActionsCount = obj8068_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8068_onTap_runningActionsCount = window.obj8068_onTap_runningActionsCount - 1;

if (window.obj8068_onTap_runningActionsCount < 0) {
	window.obj8068_onTap_runningActionsCount = 0;
} else if (window.obj8068_onTap_runningActionsCount == 0) {
	obj8068_onTap_actionGroup4();
} }, 1);
}











};
obj8068_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8068_onTap_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8068) {
				console.warn("de-queueing event obj8068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8068_onTap_activeActionGroupIndex = 4;
	











































};
obj8076_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8076_onTap_activeActionGroupIndex = -1;
		$("#obj8076").trigger("obj8076_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8076) {
				console.warn("de-queueing event obj8076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8076_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11340
(function(){
	window.obj8076_onTap_runningActionsCount = obj8076_onTap_runningActionsCount + 1;


	var selector = "#obj11340";
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
					window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup1();
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
				window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8076_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8076_onTap_activeActionGroupIndex = -1;
		$("#obj8076").trigger("obj8076_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8076) {
				console.warn("de-queueing event obj8076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8076_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8137();
function playAudioFile_8137() {
	window.obj8076_onTap_runningActionsCount = obj8076_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8137")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8137");
			$("#obj_audio_playSoundFile8137").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup2();
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
				window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8076_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8076_onTap_activeActionGroupIndex = -1;
		$("#obj8076").trigger("obj8076_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8076) {
				console.warn("de-queueing event obj8076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8076_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8138();
function runjs_8138() {
	window.obj8076_onTap_runningActionsCount = obj8076_onTap_runningActionsCount + 1;


	$("#obj8076").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup3();
}
	}, 1);
}














};
obj8076_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8076_onTap_activeActionGroupIndex = -1;
		$("#obj8076").trigger("obj8076_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8076) {
				console.warn("de-queueing event obj8076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8076_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8139();
function incrementCounter_8139() {
	window.obj8076_onTap_runningActionsCount = obj8076_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8076_onTap_runningActionsCount = window.obj8076_onTap_runningActionsCount - 1;

if (window.obj8076_onTap_runningActionsCount < 0) {
	window.obj8076_onTap_runningActionsCount = 0;
} else if (window.obj8076_onTap_runningActionsCount == 0) {
	obj8076_onTap_actionGroup4();
} }, 1);
}











};
obj8076_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8076_onTap_activeActionGroupIndex = -1;
		$("#obj8076").trigger("obj8076_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8076) {
				console.warn("de-queueing event obj8076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8076_onTap_activeActionGroupIndex = 4;
	











































};
obj8084_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8084_onTap_activeActionGroupIndex = -1;
		$("#obj8084").trigger("obj8084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8084) {
				console.warn("de-queueing event obj8084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8084_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11342
(function(){
	window.obj8084_onTap_runningActionsCount = obj8084_onTap_runningActionsCount + 1;


	var selector = "#obj11342";
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
					window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup1();
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
				window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8084_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8084_onTap_activeActionGroupIndex = -1;
		$("#obj8084").trigger("obj8084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8084) {
				console.warn("de-queueing event obj8084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8084_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8134();
function playAudioFile_8134() {
	window.obj8084_onTap_runningActionsCount = obj8084_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8134")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8134");
			$("#obj_audio_playSoundFile8134").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup2();
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
				window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8084_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8084_onTap_activeActionGroupIndex = -1;
		$("#obj8084").trigger("obj8084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8084) {
				console.warn("de-queueing event obj8084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8084_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8135();
function runjs_8135() {
	window.obj8084_onTap_runningActionsCount = obj8084_onTap_runningActionsCount + 1;


	$("#obj8084").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup3();
}
	}, 1);
}














};
obj8084_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8084_onTap_activeActionGroupIndex = -1;
		$("#obj8084").trigger("obj8084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8084) {
				console.warn("de-queueing event obj8084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8084_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8136();
function incrementCounter_8136() {
	window.obj8084_onTap_runningActionsCount = obj8084_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8084_onTap_runningActionsCount = window.obj8084_onTap_runningActionsCount - 1;

if (window.obj8084_onTap_runningActionsCount < 0) {
	window.obj8084_onTap_runningActionsCount = 0;
} else if (window.obj8084_onTap_runningActionsCount == 0) {
	obj8084_onTap_actionGroup4();
} }, 1);
}











};
obj8084_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8084_onTap_activeActionGroupIndex = -1;
		$("#obj8084").trigger("obj8084_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8084) {
				console.warn("de-queueing event obj8084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8084_onTap_activeActionGroupIndex = 4;
	











































};
obj8092_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8092_onTap_activeActionGroupIndex = -1;
		$("#obj8092").trigger("obj8092_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8092) {
				console.warn("de-queueing event obj8092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8092_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11344
(function(){
	window.obj8092_onTap_runningActionsCount = obj8092_onTap_runningActionsCount + 1;


	var selector = "#obj11344";
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
					window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup1();
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
				window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8092_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8092_onTap_activeActionGroupIndex = -1;
		$("#obj8092").trigger("obj8092_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8092) {
				console.warn("de-queueing event obj8092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8092_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8131();
function playAudioFile_8131() {
	window.obj8092_onTap_runningActionsCount = obj8092_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8131")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8131");
			$("#obj_audio_playSoundFile8131").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup2();
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
				window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8092_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8092_onTap_activeActionGroupIndex = -1;
		$("#obj8092").trigger("obj8092_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8092) {
				console.warn("de-queueing event obj8092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8092_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8132();
function runjs_8132() {
	window.obj8092_onTap_runningActionsCount = obj8092_onTap_runningActionsCount + 1;


	$("#obj8092").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup3();
}
	}, 1);
}














};
obj8092_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8092_onTap_activeActionGroupIndex = -1;
		$("#obj8092").trigger("obj8092_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8092) {
				console.warn("de-queueing event obj8092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8092_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8133();
function incrementCounter_8133() {
	window.obj8092_onTap_runningActionsCount = obj8092_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8092_onTap_runningActionsCount = window.obj8092_onTap_runningActionsCount - 1;

if (window.obj8092_onTap_runningActionsCount < 0) {
	window.obj8092_onTap_runningActionsCount = 0;
} else if (window.obj8092_onTap_runningActionsCount == 0) {
	obj8092_onTap_actionGroup4();
} }, 1);
}











};
obj8092_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8092_onTap_activeActionGroupIndex = -1;
		$("#obj8092").trigger("obj8092_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8092) {
				console.warn("de-queueing event obj8092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8092_onTap_activeActionGroupIndex = 4;
	











































};
obj8100_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8100_onTap_activeActionGroupIndex = -1;
		$("#obj8100").trigger("obj8100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8100) {
				console.warn("de-queueing event obj8100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8100_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11346
(function(){
	window.obj8100_onTap_runningActionsCount = obj8100_onTap_runningActionsCount + 1;


	var selector = "#obj11346";
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
					window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup1();
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
				window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8100_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8100_onTap_activeActionGroupIndex = -1;
		$("#obj8100").trigger("obj8100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8100) {
				console.warn("de-queueing event obj8100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8100_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8128();
function playAudioFile_8128() {
	window.obj8100_onTap_runningActionsCount = obj8100_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8128")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8128");
			$("#obj_audio_playSoundFile8128").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup2();
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
				window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8100_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8100_onTap_activeActionGroupIndex = -1;
		$("#obj8100").trigger("obj8100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8100) {
				console.warn("de-queueing event obj8100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8100_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8129();
function runjs_8129() {
	window.obj8100_onTap_runningActionsCount = obj8100_onTap_runningActionsCount + 1;


	$("#obj8100").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup3();
}
	}, 1);
}














};
obj8100_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8100_onTap_activeActionGroupIndex = -1;
		$("#obj8100").trigger("obj8100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8100) {
				console.warn("de-queueing event obj8100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8100_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8130();
function incrementCounter_8130() {
	window.obj8100_onTap_runningActionsCount = obj8100_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8100_onTap_runningActionsCount = window.obj8100_onTap_runningActionsCount - 1;

if (window.obj8100_onTap_runningActionsCount < 0) {
	window.obj8100_onTap_runningActionsCount = 0;
} else if (window.obj8100_onTap_runningActionsCount == 0) {
	obj8100_onTap_actionGroup4();
} }, 1);
}











};
obj8100_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8100_onTap_activeActionGroupIndex = -1;
		$("#obj8100").trigger("obj8100_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8100) {
				console.warn("de-queueing event obj8100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8100_onTap_activeActionGroupIndex = 4;
	











































};
obj8108_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8108_onTap_activeActionGroupIndex = -1;
		$("#obj8108").trigger("obj8108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8108) {
				console.warn("de-queueing event obj8108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8108_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11348
(function(){
	window.obj8108_onTap_runningActionsCount = obj8108_onTap_runningActionsCount + 1;


	var selector = "#obj11348";
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
					window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup1();
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
				window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8108_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8108_onTap_activeActionGroupIndex = -1;
		$("#obj8108").trigger("obj8108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8108) {
				console.warn("de-queueing event obj8108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8108_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8125();
function playAudioFile_8125() {
	window.obj8108_onTap_runningActionsCount = obj8108_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8125")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8125");
			$("#obj_audio_playSoundFile8125").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup2();
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
				window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8108_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8108_onTap_activeActionGroupIndex = -1;
		$("#obj8108").trigger("obj8108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8108) {
				console.warn("de-queueing event obj8108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8108_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8126();
function runjs_8126() {
	window.obj8108_onTap_runningActionsCount = obj8108_onTap_runningActionsCount + 1;


	$("#obj8108").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup3();
}
	}, 1);
}














};
obj8108_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8108_onTap_activeActionGroupIndex = -1;
		$("#obj8108").trigger("obj8108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8108) {
				console.warn("de-queueing event obj8108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8108_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8127();
function incrementCounter_8127() {
	window.obj8108_onTap_runningActionsCount = obj8108_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8108_onTap_runningActionsCount = window.obj8108_onTap_runningActionsCount - 1;

if (window.obj8108_onTap_runningActionsCount < 0) {
	window.obj8108_onTap_runningActionsCount = 0;
} else if (window.obj8108_onTap_runningActionsCount == 0) {
	obj8108_onTap_actionGroup4();
} }, 1);
}











};
obj8108_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8108_onTap_activeActionGroupIndex = -1;
		$("#obj8108").trigger("obj8108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8108) {
				console.warn("de-queueing event obj8108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8108_onTap_activeActionGroupIndex = 4;
	











































};
obj8118_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8118_onTap_activeActionGroupIndex = -1;
		$("#obj8118").trigger("obj8118_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8118) {
				console.warn("de-queueing event obj8118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8118_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj11350
(function(){
	window.obj8118_onTap_runningActionsCount = obj8118_onTap_runningActionsCount + 1;


	var selector = "#obj11350";
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
					window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup1();
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
				window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8118_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8118_onTap_activeActionGroupIndex = -1;
		$("#obj8118").trigger("obj8118_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8118) {
				console.warn("de-queueing event obj8118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8118_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8122();
function playAudioFile_8122() {
	window.obj8118_onTap_runningActionsCount = obj8118_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8122")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8122");
			$("#obj_audio_playSoundFile8122").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup2();
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
				window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8118_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8118_onTap_activeActionGroupIndex = -1;
		$("#obj8118").trigger("obj8118_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8118) {
				console.warn("de-queueing event obj8118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8118_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_8123();
function runjs_8123() {
	window.obj8118_onTap_runningActionsCount = obj8118_onTap_runningActionsCount + 1;


	$("#obj8118").css("background-color", "#FFD54C");
	
	setTimeout(function() {
		window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup3();
}
	}, 1);
}














};
obj8118_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8118_onTap_activeActionGroupIndex = -1;
		$("#obj8118").trigger("obj8118_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8118) {
				console.warn("de-queueing event obj8118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8118_onTap_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8120 
incrementCounter_8124();
function incrementCounter_8124() {
	window.obj8118_onTap_runningActionsCount = obj8118_onTap_runningActionsCount + 1;


	var oldValue = obj8120_counterValue;
	obj8120_counterValue = obj8120_counterValue + 1;
	if (! obj8120_counterCanExceedTargetValue && obj8120_counterValue > obj8120_counterTargetValue) {
		obj8120_counterValue = obj8120_counterTargetValue;
	}

	if (oldValue != obj8120_counterValue) {
		$("#obj8120").trigger('SCEventCounterValueChange');
		$("#obj8120").trigger('SCEventCounterIncrease');
		if (obj8120_counterValue == obj8120_counterTargetValue)
			$("#obj8120").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8118_onTap_runningActionsCount = window.obj8118_onTap_runningActionsCount - 1;

if (window.obj8118_onTap_runningActionsCount < 0) {
	window.obj8118_onTap_runningActionsCount = 0;
} else if (window.obj8118_onTap_runningActionsCount == 0) {
	obj8118_onTap_actionGroup4();
} }, 1);
}











};
obj8118_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8118_onTap_activeActionGroupIndex = -1;
		$("#obj8118").trigger("obj8118_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8118) {
				console.warn("de-queueing event obj8118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8118_onTap_activeActionGroupIndex = 4;
	











































};
obj8120_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8120").trigger("obj8120_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8120) {
				console.warn("de-queueing event obj8120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj8147
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8147";
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
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8120_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8120").trigger("obj8120_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8120) {
				console.warn("de-queueing event obj8120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj8038 
hide_8149();
function hide_8149() {
	var selector = "#obj8038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8149(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8042 
hide_8150();
function hide_8150() {
	var selector = "#obj8042";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8150(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8044 
hide_8151();
function hide_8151() {
	var selector = "#obj8044";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8151(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8046 
hide_8152();
function hide_8152() {
	var selector = "#obj8046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8152(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8048 
hide_8153();
function hide_8153() {
	var selector = "#obj8048";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8153(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8050 
hide_8154();
function hide_8154() {
	var selector = "#obj8050";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8154(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8056 
hide_8155();
function hide_8155() {
	var selector = "#obj8056";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8155(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8054 
hide_8156();
function hide_8156() {
	var selector = "#obj8054";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8156(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8052 
hide_8157();
function hide_8157() {
	var selector = "#obj8052";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8157(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8058 
hide_8158();
function hide_8158() {
	var selector = "#obj8058";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8158(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8074 
hide_8159();
function hide_8159() {
	var selector = "#obj8074";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8159(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8072 
hide_8160();
function hide_8160() {
	var selector = "#obj8072";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8160(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8070 
hide_8161();
function hide_8161() {
	var selector = "#obj8070";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8161(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8068 
hide_8162();
function hide_8162() {
	var selector = "#obj8068";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8162(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8082 
hide_8163();
function hide_8163() {
	var selector = "#obj8082";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8163(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8080 
hide_8164();
function hide_8164() {
	var selector = "#obj8080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8164(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8078 
hide_8165();
function hide_8165() {
	var selector = "#obj8078";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8165(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8076 
hide_8166();
function hide_8166() {
	var selector = "#obj8076";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8166(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8090 
hide_8167();
function hide_8167() {
	var selector = "#obj8090";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8167(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8088 
hide_8168();
function hide_8168() {
	var selector = "#obj8088";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8168(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8086 
hide_8169();
function hide_8169() {
	var selector = "#obj8086";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8169(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8084 
hide_8170();
function hide_8170() {
	var selector = "#obj8084";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8170(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8098 
hide_8171();
function hide_8171() {
	var selector = "#obj8098";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8171(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj22008 
hide_22010();
function hide_22010() {
	var selector = "#obj22008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22010(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8096 
hide_8172();
function hide_8172() {
	var selector = "#obj8096";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8172(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8094 
hide_8173();
function hide_8173() {
	var selector = "#obj8094";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8173(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8092 
hide_8174();
function hide_8174() {
	var selector = "#obj8092";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8174(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8106 
hide_8175();
function hide_8175() {
	var selector = "#obj8106";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8175(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8104 
hide_8176();
function hide_8176() {
	var selector = "#obj8104";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8176(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8102 
hide_8177();
function hide_8177() {
	var selector = "#obj8102";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8177(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8100 
hide_8178();
function hide_8178() {
	var selector = "#obj8100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8178(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8114 
hide_8179();
function hide_8179() {
	var selector = "#obj8114";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8179(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8112 
hide_8180();
function hide_8180() {
	var selector = "#obj8112";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8180(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8110 
hide_8181();
function hide_8181() {
	var selector = "#obj8110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8181(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8108 
hide_8182();
function hide_8182() {
	var selector = "#obj8108";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8182(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8116 
hide_8183();
function hide_8183() {
	var selector = "#obj8116";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8183(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8118 
hide_8184();
function hide_8184() {
	var selector = "#obj8118";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8184(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8120_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8120").trigger("obj8120_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8120) {
				console.warn("de-queueing event obj8120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj8185
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8185";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8256
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8256";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8209
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8209";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8211
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8211";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8216
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8216";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8214
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8214";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8220
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8220";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8218
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8218";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8224
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8224";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8228
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8228";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8232
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8232";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8236
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj8236";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj22008
(function(){
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = obj8120_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj22008";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8120_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8120_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8120_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8120").trigger("obj8120_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8120) {
				console.warn("de-queueing event obj8120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj8224_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8224_onTap_activeActionGroupIndex = -1;
		$("#obj8224").trigger("obj8224_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8224) {
				console.warn("de-queueing event obj8224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8224_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24502
(function(){
	window.obj8224_onTap_runningActionsCount = obj8224_onTap_runningActionsCount + 1;


	var selector = "#obj24502";
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
					window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup1();
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
				window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8224_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8224_onTap_activeActionGroupIndex = -1;
		$("#obj8224").trigger("obj8224_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8224) {
				console.warn("de-queueing event obj8224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8224_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8227();
function playAudioFile_8227() {
	window.obj8224_onTap_runningActionsCount = obj8224_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8227")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8227");
			$("#obj_audio_playSoundFile8227").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup2();
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
				window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8224_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8224_onTap_activeActionGroupIndex = -1;
		$("#obj8224").trigger("obj8224_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8224) {
				console.warn("de-queueing event obj8224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8224_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24498
(function(){
	window.obj8224_onTap_runningActionsCount = obj8224_onTap_runningActionsCount + 1;


	var selector = "#obj24498";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup3();
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
				window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8224_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8224_onTap_activeActionGroupIndex = -1;
		$("#obj8224").trigger("obj8224_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8224) {
				console.warn("de-queueing event obj8224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8224_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_8226();
function runjs_8226() {
	window.obj8224_onTap_runningActionsCount = obj8224_onTap_runningActionsCount + 1;


	$("#obj8209").css("border-color", "#8BC541"); $("#obj8209").css("border-width", "5px"); $("#obj8209").css("border-style", "solid"); $("#obj8209").css("border-radius", "0px"); $("#obj8209").css("-webkit-border-radius", "0px"); $("#obj8209").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj8224_onTap_runningActionsCount = window.obj8224_onTap_runningActionsCount - 1;

if (window.obj8224_onTap_runningActionsCount < 0) {
	window.obj8224_onTap_runningActionsCount = 0;
} else if (window.obj8224_onTap_runningActionsCount == 0) {
	obj8224_onTap_actionGroup4();
}
	}, 1);
}














};
obj8224_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8224_onTap_activeActionGroupIndex = -1;
		$("#obj8224").trigger("obj8224_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8224) {
				console.warn("de-queueing event obj8224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8224_onTap_activeActionGroupIndex = 4;
	











































};
obj8228_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8228_onTap_activeActionGroupIndex = -1;
		$("#obj8228").trigger("obj8228_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8228) {
				console.warn("de-queueing event obj8228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8228_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24502
(function(){
	window.obj8228_onTap_runningActionsCount = obj8228_onTap_runningActionsCount + 1;


	var selector = "#obj24502";
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
					window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup1();
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
				window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8228_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8228_onTap_activeActionGroupIndex = -1;
		$("#obj8228").trigger("obj8228_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8228) {
				console.warn("de-queueing event obj8228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8228_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8230();
function playAudioFile_8230() {
	window.obj8228_onTap_runningActionsCount = obj8228_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8230")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8230");
			$("#obj_audio_playSoundFile8230").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup2();
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
				window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8228_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8228_onTap_activeActionGroupIndex = -1;
		$("#obj8228").trigger("obj8228_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8228) {
				console.warn("de-queueing event obj8228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8228_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24506
(function(){
	window.obj8228_onTap_runningActionsCount = obj8228_onTap_runningActionsCount + 1;


	var selector = "#obj24506";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup3();
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
				window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8228_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8228_onTap_activeActionGroupIndex = -1;
		$("#obj8228").trigger("obj8228_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8228) {
				console.warn("de-queueing event obj8228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8228_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_8231();
function runjs_8231() {
	window.obj8228_onTap_runningActionsCount = obj8228_onTap_runningActionsCount + 1;


	$("#obj8216").css("border-color", "#8BC541"); $("#obj8216").css("border-width", "5px"); $("#obj8216").css("border-style", "solid"); $("#obj8216").css("border-radius", "0px"); $("#obj8216").css("-webkit-border-radius", "0px"); $("#obj8216").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj8228_onTap_runningActionsCount = window.obj8228_onTap_runningActionsCount - 1;

if (window.obj8228_onTap_runningActionsCount < 0) {
	window.obj8228_onTap_runningActionsCount = 0;
} else if (window.obj8228_onTap_runningActionsCount == 0) {
	obj8228_onTap_actionGroup4();
}
	}, 1);
}














};
obj8228_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8228_onTap_activeActionGroupIndex = -1;
		$("#obj8228").trigger("obj8228_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8228) {
				console.warn("de-queueing event obj8228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8228_onTap_activeActionGroupIndex = 4;
	











































};
obj8232_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8232_onTap_activeActionGroupIndex = -1;
		$("#obj8232").trigger("obj8232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8232) {
				console.warn("de-queueing event obj8232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8232_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24502
(function(){
	window.obj8232_onTap_runningActionsCount = obj8232_onTap_runningActionsCount + 1;


	var selector = "#obj24502";
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
					window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup1();
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
				window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8232_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8232_onTap_activeActionGroupIndex = -1;
		$("#obj8232").trigger("obj8232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8232) {
				console.warn("de-queueing event obj8232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8232_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8234();
function playAudioFile_8234() {
	window.obj8232_onTap_runningActionsCount = obj8232_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8234")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8234");
			$("#obj_audio_playSoundFile8234").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup2();
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
				window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8232_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8232_onTap_activeActionGroupIndex = -1;
		$("#obj8232").trigger("obj8232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8232) {
				console.warn("de-queueing event obj8232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8232_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24510
(function(){
	window.obj8232_onTap_runningActionsCount = obj8232_onTap_runningActionsCount + 1;


	var selector = "#obj24510";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup3();
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
				window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8232_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8232_onTap_activeActionGroupIndex = -1;
		$("#obj8232").trigger("obj8232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8232) {
				console.warn("de-queueing event obj8232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8232_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_8235();
function runjs_8235() {
	window.obj8232_onTap_runningActionsCount = obj8232_onTap_runningActionsCount + 1;


	$("#obj8220").css("border-color", "#8BC541"); $("#obj8220").css("border-width", "5px"); $("#obj8220").css("border-style", "solid"); $("#obj8220").css("border-radius", "0px"); $("#obj8220").css("-webkit-border-radius", "0px"); $("#obj8220").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj8232_onTap_runningActionsCount = window.obj8232_onTap_runningActionsCount - 1;

if (window.obj8232_onTap_runningActionsCount < 0) {
	window.obj8232_onTap_runningActionsCount = 0;
} else if (window.obj8232_onTap_runningActionsCount == 0) {
	obj8232_onTap_actionGroup4();
}
	}, 1);
}














};
obj8232_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8232_onTap_activeActionGroupIndex = -1;
		$("#obj8232").trigger("obj8232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8232) {
				console.warn("de-queueing event obj8232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8232_onTap_activeActionGroupIndex = 4;
	











































};
obj24498_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24498_onTap_activeActionGroupIndex = -1;
		$("#obj24498").trigger("obj24498_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24498) {
				console.warn("de-queueing event obj24498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24498_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24931();
function playAudioFile_24931() {
	window.obj24498_onTap_runningActionsCount = obj24498_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24931")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24931");
			$("#obj_audio_playSoundFile24931").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup1();
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
				window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24498_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24498_onTap_activeActionGroupIndex = -1;
		$("#obj24498").trigger("obj24498_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24498) {
				console.warn("de-queueing event obj24498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24498_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24502 
hide_24505();
function hide_24505() {
	var selector = "#obj24502";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24498_onTap_runningActionsCount = obj24498_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24505(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24498_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24498_onTap_activeActionGroupIndex = -1;
		$("#obj24498").trigger("obj24498_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24498) {
				console.warn("de-queueing event obj24498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24498_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj24498 
hide_24501();
function hide_24501() {
	var selector = "#obj24498";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24498_onTap_runningActionsCount = obj24498_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24501(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24498_onTap_runningActionsCount = window.obj24498_onTap_runningActionsCount - 1;

if (window.obj24498_onTap_runningActionsCount < 0) {
	window.obj24498_onTap_runningActionsCount = 0;
} else if (window.obj24498_onTap_runningActionsCount == 0) {
	obj24498_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24498_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24498_onTap_activeActionGroupIndex = -1;
		$("#obj24498").trigger("obj24498_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24498) {
				console.warn("de-queueing event obj24498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24498_onTap_activeActionGroupIndex = 3;
	











































};
obj24506_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24506_onTap_activeActionGroupIndex = -1;
		$("#obj24506").trigger("obj24506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24506) {
				console.warn("de-queueing event obj24506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24506_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24930();
function playAudioFile_24930() {
	window.obj24506_onTap_runningActionsCount = obj24506_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24930")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24930");
			$("#obj_audio_playSoundFile24930").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup1();
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
				window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24506_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24506_onTap_activeActionGroupIndex = -1;
		$("#obj24506").trigger("obj24506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24506) {
				console.warn("de-queueing event obj24506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24506_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24502 
hide_24508();
function hide_24508() {
	var selector = "#obj24502";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24506_onTap_runningActionsCount = obj24506_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24508(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24506_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24506_onTap_activeActionGroupIndex = -1;
		$("#obj24506").trigger("obj24506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24506) {
				console.warn("de-queueing event obj24506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24506_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj24506 
hide_24509();
function hide_24509() {
	var selector = "#obj24506";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24506_onTap_runningActionsCount = obj24506_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24509(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24506_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24506_onTap_activeActionGroupIndex = -1;
		$("#obj24506").trigger("obj24506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24506) {
				console.warn("de-queueing event obj24506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24506_onTap_activeActionGroupIndex = 3;
	











































};
obj24510_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24510_onTap_activeActionGroupIndex = -1;
		$("#obj24510").trigger("obj24510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24510) {
				console.warn("de-queueing event obj24510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24510_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_24929();
function playAudioFile_24929() {
	window.obj24510_onTap_runningActionsCount = obj24510_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24929")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24929");
			$("#obj_audio_playSoundFile24929").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup1();
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
				window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24510_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24510_onTap_activeActionGroupIndex = -1;
		$("#obj24510").trigger("obj24510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24510) {
				console.warn("de-queueing event obj24510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24510_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24502 
hide_24512();
function hide_24512() {
	var selector = "#obj24502";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24510_onTap_runningActionsCount = obj24510_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24512(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24510_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24510_onTap_activeActionGroupIndex = -1;
		$("#obj24510").trigger("obj24510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24510) {
				console.warn("de-queueing event obj24510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24510_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj24510 
hide_24513();
function hide_24513() {
	var selector = "#obj24510";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24510_onTap_runningActionsCount = obj24510_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24513(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24510_onTap_runningActionsCount = window.obj24510_onTap_runningActionsCount - 1;

if (window.obj24510_onTap_runningActionsCount < 0) {
	window.obj24510_onTap_runningActionsCount = 0;
} else if (window.obj24510_onTap_runningActionsCount == 0) {
	obj24510_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24510_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24510_onTap_activeActionGroupIndex = -1;
		$("#obj24510").trigger("obj24510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24510) {
				console.warn("de-queueing event obj24510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24510_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj8035: Event Touch Down
 *
 */

$("#obj8035").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8035_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8035_onTap is still running");
	return;
}
var obj8035_onTap_runningActionsCount = 0;
var obj8035_onTap_loopCount = 0;
obj8035_onTap_actionGroup0();
});
















































































































































































































/*
 *
 *   obj8058: Event Touch Down
 *
 */

$("#obj8058").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8058_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8058_onTap is still running");
	return;
}
var obj8058_onTap_runningActionsCount = 0;
var obj8058_onTap_loopCount = 0;
obj8058_onTap_actionGroup0();
});






























































































/*
 *
 *   obj8068: Event Touch Down
 *
 */

$("#obj8068").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8068_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8068_onTap is still running");
	return;
}
var obj8068_onTap_runningActionsCount = 0;
var obj8068_onTap_loopCount = 0;
obj8068_onTap_actionGroup0();
});






























































































/*
 *
 *   obj8076: Event Touch Down
 *
 */

$("#obj8076").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8076_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8076_onTap is still running");
	return;
}
var obj8076_onTap_runningActionsCount = 0;
var obj8076_onTap_loopCount = 0;
obj8076_onTap_actionGroup0();
});






























































































/*
 *
 *   obj8084: Event Touch Down
 *
 */

$("#obj8084").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8084_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8084_onTap is still running");
	return;
}
var obj8084_onTap_runningActionsCount = 0;
var obj8084_onTap_loopCount = 0;
obj8084_onTap_actionGroup0();
});






























































































/*
 *
 *   obj8092: Event Touch Down
 *
 */

$("#obj8092").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8092_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8092_onTap is still running");
	return;
}
var obj8092_onTap_runningActionsCount = 0;
var obj8092_onTap_loopCount = 0;
obj8092_onTap_actionGroup0();
});






























































































/*
 *
 *   obj8100: Event Touch Down
 *
 */

$("#obj8100").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8100_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8100_onTap is still running");
	return;
}
var obj8100_onTap_runningActionsCount = 0;
var obj8100_onTap_loopCount = 0;
obj8100_onTap_actionGroup0();
});






























































































/*
 *
 *   obj8108: Event Touch Down
 *
 */

$("#obj8108").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8108_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8108_onTap is still running");
	return;
}
var obj8108_onTap_runningActionsCount = 0;
var obj8108_onTap_loopCount = 0;
obj8108_onTap_actionGroup0();
});
























































/*
 *
 *   obj8118: Event Touch Down
 *
 */

$("#obj8118").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8118_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8118_onTap is still running");
	return;
}
var obj8118_onTap_runningActionsCount = 0;
var obj8118_onTap_loopCount = 0;
obj8118_onTap_actionGroup0();
});














































/*
 *
 *   obj8120: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8120").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8120_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8120_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8120_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8120_SCEventCounterReachedTargetValue_loopCount = 0;
obj8120_SCEventCounterReachedTargetValue_actionGroup0();
});

































































































































































/*
 *
 *   obj8224: Event Touch Down
 *
 */

$("#obj8224").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8224_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8224_onTap is still running");
	return;
}
var obj8224_onTap_runningActionsCount = 0;
var obj8224_onTap_loopCount = 0;
obj8224_onTap_actionGroup0();
});


















/*
 *
 *   obj8228: Event Touch Down
 *
 */

$("#obj8228").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8228_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8228_onTap is still running");
	return;
}
var obj8228_onTap_runningActionsCount = 0;
var obj8228_onTap_loopCount = 0;
obj8228_onTap_actionGroup0();
});


















/*
 *
 *   obj8232: Event Touch Down
 *
 */

$("#obj8232").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8232_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8232_onTap is still running");
	return;
}
var obj8232_onTap_runningActionsCount = 0;
var obj8232_onTap_loopCount = 0;
obj8232_onTap_actionGroup0();
});






























































































/*
 *
 *   obj24498: Event Touch Down
 *
 */

$("#obj24498").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24498_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24498_onTap is still running");
	return;
}
var obj24498_onTap_runningActionsCount = 0;
var obj24498_onTap_loopCount = 0;
obj24498_onTap_actionGroup0();
});


















/*
 *
 *   obj24506: Event Touch Down
 *
 */

$("#obj24506").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24506_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24506_onTap is still running");
	return;
}
var obj24506_onTap_runningActionsCount = 0;
var obj24506_onTap_loopCount = 0;
obj24506_onTap_actionGroup0();
});


















/*
 *
 *   obj24510: Event Touch Down
 *
 */

$("#obj24510").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24510_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24510_onTap is still running");
	return;
}
var obj24510_onTap_runningActionsCount = 0;
var obj24510_onTap_loopCount = 0;
obj24510_onTap_actionGroup0();
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
	
$("#obj7832").trigger('SCEventShow');
$("#obj8031").trigger('SCEventShow');
$("#obj8033").trigger('SCEventShow');
$("#obj8035").trigger('SCEventShow');
$("#obj8038").trigger('SCEventShow');
$("#obj8040").trigger('SCEventShow');
$("#obj8042").trigger('SCEventShow');
$("#obj8044").trigger('SCEventShow');
$("#obj8046").trigger('SCEventShow');
$("#obj8048").trigger('SCEventShow');
$("#obj8050").trigger('SCEventShow');
$("#obj8056").trigger('SCEventShow');
$("#obj8054").trigger('SCEventShow');
$("#obj8052").trigger('SCEventShow');
$("#obj8058").trigger('SCEventShow');
$("#obj8074").trigger('SCEventShow');
$("#obj8072").trigger('SCEventShow');
$("#obj8070").trigger('SCEventShow');
$("#obj8068").trigger('SCEventShow');
$("#obj8082").trigger('SCEventShow');
$("#obj8080").trigger('SCEventShow');
$("#obj8078").trigger('SCEventShow');
$("#obj8076").trigger('SCEventShow');
$("#obj8090").trigger('SCEventShow');
$("#obj8088").trigger('SCEventShow');
$("#obj8086").trigger('SCEventShow');
$("#obj8084").trigger('SCEventShow');
$("#obj8098").trigger('SCEventShow');
$("#obj8096").trigger('SCEventShow');
$("#obj8094").trigger('SCEventShow');
$("#obj8092").trigger('SCEventShow');
$("#obj8106").trigger('SCEventShow');
$("#obj8104").trigger('SCEventShow');
$("#obj8102").trigger('SCEventShow');
$("#obj8100").trigger('SCEventShow');
$("#obj8114").trigger('SCEventShow');
$("#obj8112").trigger('SCEventShow');
$("#obj8110").trigger('SCEventShow');
$("#obj8108").trigger('SCEventShow');
$("#obj8116").trigger('SCEventShow');
$("#obj8118").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});