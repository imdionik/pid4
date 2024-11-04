pubcoder.projectID = pubcoder.projectID || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.id = pubcoder.project.id || "E0808FA1CD5D3E4DA868601626ACF1AB";
pubcoder.project.title = pubcoder.project.title || "Підприємництво і фінансова грамотність 8 клас";
pubcoder.page.id = pubcoder.page.id || 8258;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj8270_onTap_activeActionGroupIndex = -1;
var obj8270_onTap_runningActionsCount = 0;
var obj8270_onTap_loopCount = 0;
var obj8470_onTap_activeActionGroupIndex = -1;
var obj8470_onTap_runningActionsCount = 0;
var obj8470_onTap_loopCount = 0;
var obj8460_onTap_activeActionGroupIndex = -1;
var obj8460_onTap_runningActionsCount = 0;
var obj8460_onTap_loopCount = 0;
var obj8891_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8891_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8891_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8888_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8888_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8888_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8885_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8885_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8885_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8882_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8882_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8882_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8879_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8879_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8879_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8875_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8875_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8870_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8870_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8898_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8898_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8898_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8901_SCEventCounterReachedTargetValue_loopCount = 0;
var obj8854_onDrag_activeActionGroupIndex = -1;
var obj8854_onDrag_runningActionsCount = 0;
var obj8854_onDrag_loopCount = 0;
var obj8854_onTouchDown_activeActionGroupIndex = -1;
var obj8854_onTouchDown_runningActionsCount = 0;
var obj8854_onTouchDown_loopCount = 0;
var obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
var obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_6_loopCount = 0;
var obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_5_loopCount = 0;
var obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_4_loopCount = 0;
var obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_3_loopCount = 0;
var obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_2_loopCount = 0;
var obj8854_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj8854_droppedInsideTargetActions_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_loopCount = 0;
var obj8992_onDrag_activeActionGroupIndex = -1;
var obj8992_onDrag_runningActionsCount = 0;
var obj8992_onDrag_loopCount = 0;
var obj8992_onTouchDown_activeActionGroupIndex = -1;
var obj8992_onTouchDown_runningActionsCount = 0;
var obj8992_onTouchDown_loopCount = 0;
var obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
var obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_6_loopCount = 0;
var obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_5_loopCount = 0;
var obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_4_loopCount = 0;
var obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_3_loopCount = 0;
var obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_2_loopCount = 0;
var obj8992_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj8992_droppedInsideTargetActions_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_loopCount = 0;
var obj9060_onDrag_activeActionGroupIndex = -1;
var obj9060_onDrag_runningActionsCount = 0;
var obj9060_onDrag_loopCount = 0;
var obj9060_onTouchDown_activeActionGroupIndex = -1;
var obj9060_onTouchDown_runningActionsCount = 0;
var obj9060_onTouchDown_loopCount = 0;
var obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
var obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_6_loopCount = 0;
var obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_5_loopCount = 0;
var obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_4_loopCount = 0;
var obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_3_loopCount = 0;
var obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_2_loopCount = 0;
var obj9060_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9060_droppedInsideTargetActions_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_loopCount = 0;
var obj9123_onDrag_activeActionGroupIndex = -1;
var obj9123_onDrag_runningActionsCount = 0;
var obj9123_onDrag_loopCount = 0;
var obj9123_onTouchDown_activeActionGroupIndex = -1;
var obj9123_onTouchDown_runningActionsCount = 0;
var obj9123_onTouchDown_loopCount = 0;
var obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
var obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_6_loopCount = 0;
var obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_5_loopCount = 0;
var obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_4_loopCount = 0;
var obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_3_loopCount = 0;
var obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_2_loopCount = 0;
var obj9123_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9123_droppedInsideTargetActions_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_loopCount = 0;
var obj9233_onDrag_activeActionGroupIndex = -1;
var obj9233_onDrag_runningActionsCount = 0;
var obj9233_onDrag_loopCount = 0;
var obj9233_onTouchDown_activeActionGroupIndex = -1;
var obj9233_onTouchDown_runningActionsCount = 0;
var obj9233_onTouchDown_loopCount = 0;
var obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
var obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_6_loopCount = 0;
var obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_5_loopCount = 0;
var obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_4_loopCount = 0;
var obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_3_loopCount = 0;
var obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_2_loopCount = 0;
var obj9233_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9233_droppedInsideTargetActions_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_loopCount = 0;
var obj9370_onDrag_activeActionGroupIndex = -1;
var obj9370_onDrag_runningActionsCount = 0;
var obj9370_onDrag_loopCount = 0;
var obj9370_onTouchDown_activeActionGroupIndex = -1;
var obj9370_onTouchDown_runningActionsCount = 0;
var obj9370_onTouchDown_loopCount = 0;
var obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
var obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_6_loopCount = 0;
var obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_5_loopCount = 0;
var obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_4_loopCount = 0;
var obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_3_loopCount = 0;
var obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_2_loopCount = 0;
var obj9370_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9370_droppedInsideTargetActions_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj8891_counterValue = 0;
var obj8891_counterTargetValue = 2;
var obj8891_counterCanExceedTargetValue = false;
var obj8888_counterValue = 0;
var obj8888_counterTargetValue = 4;
var obj8888_counterCanExceedTargetValue = false;
var obj8885_counterValue = 0;
var obj8885_counterTargetValue = 3;
var obj8885_counterCanExceedTargetValue = false;
var obj8882_counterValue = 0;
var obj8882_counterTargetValue = 1;
var obj8882_counterCanExceedTargetValue = false;
var obj8879_counterValue = 0;
var obj8879_counterTargetValue = 5;
var obj8879_counterCanExceedTargetValue = false;
var obj8875_counterValue = 0;
var obj8875_counterTargetValue = 6;
var obj8875_counterCanExceedTargetValue = false;
var obj8870_counterValue = 0;
var obj8870_counterTargetValue = 6;
var obj8870_counterCanExceedTargetValue = false;
var obj8898_counterValue = 0;
var obj8898_counterTargetValue = 6;
var obj8898_counterCanExceedTargetValue = false;
var obj8901_counterValue = 0;
var obj8901_counterTargetValue = 1;
var obj8901_counterCanExceedTargetValue = false;

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
		
obj8270_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8270_onTap_activeActionGroupIndex = -1;
		$("#obj8270").trigger("obj8270_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8270) {
				console.warn("de-queueing event obj8270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8270_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_8272();
function goToPage_8272() {
	window.obj8270_onTap_runningActionsCount = obj8270_onTap_runningActionsCount + 1;

	$("#anchor57")[0].click();
	window.obj8270_onTap_runningActionsCount = window.obj8270_onTap_runningActionsCount - 1;

if (window.obj8270_onTap_runningActionsCount < 0) {
	window.obj8270_onTap_runningActionsCount = 0;
} else if (window.obj8270_onTap_runningActionsCount == 0) {
	obj8270_onTap_actionGroup1();
}
}










































};
obj8270_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8270_onTap_activeActionGroupIndex = -1;
		$("#obj8270").trigger("obj8270_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8270) {
				console.warn("de-queueing event obj8270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8270_onTap_activeActionGroupIndex = 1;
	











































};
obj8470_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8470_onTap_activeActionGroupIndex = -1;
		$("#obj8470").trigger("obj8470_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8470) {
				console.warn("de-queueing event obj8470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8470_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj8460
(function(){
	window.obj8470_onTap_runningActionsCount = obj8470_onTap_runningActionsCount + 1;


	var selector = "#obj8460";
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
					window.obj8470_onTap_runningActionsCount = window.obj8470_onTap_runningActionsCount - 1;

if (window.obj8470_onTap_runningActionsCount < 0) {
	window.obj8470_onTap_runningActionsCount = 0;
} else if (window.obj8470_onTap_runningActionsCount == 0) {
	obj8470_onTap_actionGroup1();
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
				window.obj8470_onTap_runningActionsCount = window.obj8470_onTap_runningActionsCount - 1;

if (window.obj8470_onTap_runningActionsCount < 0) {
	window.obj8470_onTap_runningActionsCount = 0;
} else if (window.obj8470_onTap_runningActionsCount == 0) {
	obj8470_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8470_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8470_onTap_activeActionGroupIndex = -1;
		$("#obj8470").trigger("obj8470_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8470) {
				console.warn("de-queueing event obj8470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8470_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj8468
(function(){
	window.obj8470_onTap_runningActionsCount = obj8470_onTap_runningActionsCount + 1;


	var selector = "#obj8468";
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
	
		var animationType = "slideInRight";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8470_onTap_runningActionsCount = window.obj8470_onTap_runningActionsCount - 1;

if (window.obj8470_onTap_runningActionsCount < 0) {
	window.obj8470_onTap_runningActionsCount = 0;
} else if (window.obj8470_onTap_runningActionsCount == 0) {
	obj8470_onTap_actionGroup2();
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
				window.obj8470_onTap_runningActionsCount = window.obj8470_onTap_runningActionsCount - 1;

if (window.obj8470_onTap_runningActionsCount < 0) {
	window.obj8470_onTap_runningActionsCount = 0;
} else if (window.obj8470_onTap_runningActionsCount == 0) {
	obj8470_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj8466
(function(){
	window.obj8470_onTap_runningActionsCount = obj8470_onTap_runningActionsCount + 1;


	var selector = "#obj8466";
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
	
		var animationType = "slideInRight";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj8470_onTap_runningActionsCount = window.obj8470_onTap_runningActionsCount - 1;

if (window.obj8470_onTap_runningActionsCount < 0) {
	window.obj8470_onTap_runningActionsCount = 0;
} else if (window.obj8470_onTap_runningActionsCount == 0) {
	obj8470_onTap_actionGroup2();
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
				window.obj8470_onTap_runningActionsCount = window.obj8470_onTap_runningActionsCount - 1;

if (window.obj8470_onTap_runningActionsCount < 0) {
	window.obj8470_onTap_runningActionsCount = 0;
} else if (window.obj8470_onTap_runningActionsCount == 0) {
	obj8470_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8470_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8470_onTap_activeActionGroupIndex = -1;
		$("#obj8470").trigger("obj8470_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8470) {
				console.warn("de-queueing event obj8470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8470_onTap_activeActionGroupIndex = 2;
	











































};
obj8460_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8460_onTap_activeActionGroupIndex = -1;
		$("#obj8460").trigger("obj8460_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8460) {
				console.warn("de-queueing event obj8460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8460_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8460 
hide_8463();
function hide_8463() {
	var selector = "#obj8460";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8460_onTap_runningActionsCount = obj8460_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8463(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj8470
(function(){
	window.obj8460_onTap_runningActionsCount = obj8460_onTap_runningActionsCount + 1;


	var selector = "#obj8470";
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
					window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup1();
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
				window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8460_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8460_onTap_activeActionGroupIndex = -1;
		$("#obj8460").trigger("obj8460_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8460) {
				console.warn("de-queueing event obj8460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8460_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj8466 
hide_8464();
function hide_8464() {
	var selector = "#obj8466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8460_onTap_runningActionsCount = obj8460_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8464(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8468 
hide_8465();
function hide_8465() {
	var selector = "#obj8468";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8460_onTap_runningActionsCount = obj8460_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8465(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8460_onTap_runningActionsCount = window.obj8460_onTap_runningActionsCount - 1;

if (window.obj8460_onTap_runningActionsCount < 0) {
	window.obj8460_onTap_runningActionsCount = 0;
} else if (window.obj8460_onTap_runningActionsCount == 0) {
	obj8460_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8460_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8460_onTap_activeActionGroupIndex = -1;
		$("#obj8460").trigger("obj8460_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8460) {
				console.warn("de-queueing event obj8460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8460_onTap_activeActionGroupIndex = 2;
	











































};
obj8891_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8891_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8891").trigger("obj8891_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8891) {
				console.warn("de-queueing event obj8891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8891_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_8893();
function switchText_8893() {
	window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount = obj8891_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>2/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj8894_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj8894_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj8894").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj8894_content");
			setTimeout(function () {
				window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8891_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj8894 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8891_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8891_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj8891_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8891_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8891").trigger("obj8891_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8891) {
				console.warn("de-queueing event obj8891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8891_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj8888_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8888_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8888").trigger("obj8888_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8888) {
				console.warn("de-queueing event obj8888." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8888").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8888_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_8890();
function switchText_8890() {
	window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount = obj8888_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>4/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj8894_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj8894_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj8894").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj8894_content");
			setTimeout(function () {
				window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8888_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj8894 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8888_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8888_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj8888_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8888_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8888").trigger("obj8888_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8888) {
				console.warn("de-queueing event obj8888." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8888").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8888_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj8885_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8885_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8885").trigger("obj8885_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8885) {
				console.warn("de-queueing event obj8885." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8885").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8885_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_8887();
function switchText_8887() {
	window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount = obj8885_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>3/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj8894_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj8894_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj8894").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj8894_content");
			setTimeout(function () {
				window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8885_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj8894 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8885_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8885_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj8885_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8885_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8885").trigger("obj8885_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8885) {
				console.warn("de-queueing event obj8885." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8885").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8885_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj8882_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8882_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8882").trigger("obj8882_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8882) {
				console.warn("de-queueing event obj8882." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8882").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8882_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_8884();
function switchText_8884() {
	window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount = obj8882_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>1/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj8894_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj8894_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj8894").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj8894_content");
			setTimeout(function () {
				window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8882_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj8894 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8882_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8882_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj8882_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8882_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8882").trigger("obj8882_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8882) {
				console.warn("de-queueing event obj8882." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8882").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8882_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj8879_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8879_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8879").trigger("obj8879_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8879) {
				console.warn("de-queueing event obj8879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8879_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_8881();
function switchText_8881() {
	window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount = obj8879_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>5/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj8894_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj8894_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj8894").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj8894_content");
			setTimeout(function () {
				window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8879_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj8894 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8879_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8879_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj8879_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8879_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8879").trigger("obj8879_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8879) {
				console.warn("de-queueing event obj8879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8879_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj8875_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8875").trigger("obj8875_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8875) {
				console.warn("de-queueing event obj8875." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8875").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_8877();
function wait_8877() {
	window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount = obj8875_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8875_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj8875_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8875").trigger("obj8875_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8875) {
				console.warn("de-queueing event obj8875." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8875").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_8878();
function goToPage_8878() {
	window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount = obj8875_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor58")[0].click();
	window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8875_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8875_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj8875_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8875").trigger("obj8875_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8875) {
				console.warn("de-queueing event obj8875." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8875").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj8870_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8870").trigger("obj8870_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8870) {
				console.warn("de-queueing event obj8870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_8872();
function wait_8872() {
	window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount = obj8870_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8870_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1500);
}


























};
obj8870_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8870").trigger("obj8870_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8870) {
				console.warn("de-queueing event obj8870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_8873();
function goToPage_8873() {
	window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount = obj8870_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor59")[0].click();
	window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8870_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8870_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj8870_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8870").trigger("obj8870_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8870) {
				console.warn("de-queueing event obj8870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj8898_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8898_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8898").trigger("obj8898_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8898) {
				console.warn("de-queueing event obj8898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8898_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	






























//	action: Switch Text
switchText_8900();
function switchText_8900() {
	window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount = obj8898_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong>6/6</strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj8894_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj8894_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj8894").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj8894_content");
			setTimeout(function () {
				window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8898_SCEventCounterReachedTargetValue_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj8894 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8898_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8898_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
	}
}












};
obj8898_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8898_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8898").trigger("obj8898_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8898) {
				console.warn("de-queueing event obj8898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8898_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	











































};
obj8901_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8901").trigger("obj8901_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8901) {
				console.warn("de-queueing event obj8901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj8891 
incrementCounter_8904();
function incrementCounter_8904() {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = obj8901_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj8891_counterValue;
	obj8891_counterValue = obj8891_counterValue + 1;
	if (! obj8891_counterCanExceedTargetValue && obj8891_counterValue > obj8891_counterTargetValue) {
		obj8891_counterValue = obj8891_counterTargetValue;
	}

	if (oldValue != obj8891_counterValue) {
		$("#obj8891").trigger('SCEventCounterValueChange');
		$("#obj8891").trigger('SCEventCounterIncrease');
		if (obj8891_counterValue == obj8891_counterTargetValue)
			$("#obj8891").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8901_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj8882 
incrementCounter_8905();
function incrementCounter_8905() {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = obj8901_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj8882_counterValue;
	obj8882_counterValue = obj8882_counterValue + 1;
	if (! obj8882_counterCanExceedTargetValue && obj8882_counterValue > obj8882_counterTargetValue) {
		obj8882_counterValue = obj8882_counterTargetValue;
	}

	if (oldValue != obj8882_counterValue) {
		$("#obj8882").trigger('SCEventCounterValueChange');
		$("#obj8882").trigger('SCEventCounterIncrease');
		if (obj8882_counterValue == obj8882_counterTargetValue)
			$("#obj8882").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8901_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj8888 
incrementCounter_8906();
function incrementCounter_8906() {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = obj8901_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj8888_counterValue;
	obj8888_counterValue = obj8888_counterValue + 1;
	if (! obj8888_counterCanExceedTargetValue && obj8888_counterValue > obj8888_counterTargetValue) {
		obj8888_counterValue = obj8888_counterTargetValue;
	}

	if (oldValue != obj8888_counterValue) {
		$("#obj8888").trigger('SCEventCounterValueChange');
		$("#obj8888").trigger('SCEventCounterIncrease');
		if (obj8888_counterValue == obj8888_counterTargetValue)
			$("#obj8888").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8901_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj8885 
incrementCounter_8907();
function incrementCounter_8907() {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = obj8901_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj8885_counterValue;
	obj8885_counterValue = obj8885_counterValue + 1;
	if (! obj8885_counterCanExceedTargetValue && obj8885_counterValue > obj8885_counterTargetValue) {
		obj8885_counterValue = obj8885_counterTargetValue;
	}

	if (oldValue != obj8885_counterValue) {
		$("#obj8885").trigger('SCEventCounterValueChange');
		$("#obj8885").trigger('SCEventCounterIncrease');
		if (obj8885_counterValue == obj8885_counterTargetValue)
			$("#obj8885").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8901_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj8879 
incrementCounter_8908();
function incrementCounter_8908() {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = obj8901_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj8879_counterValue;
	obj8879_counterValue = obj8879_counterValue + 1;
	if (! obj8879_counterCanExceedTargetValue && obj8879_counterValue > obj8879_counterTargetValue) {
		obj8879_counterValue = obj8879_counterTargetValue;
	}

	if (oldValue != obj8879_counterValue) {
		$("#obj8879").trigger('SCEventCounterValueChange');
		$("#obj8879").trigger('SCEventCounterIncrease');
		if (obj8879_counterValue == obj8879_counterTargetValue)
			$("#obj8879").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8901_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}
//	action: increment counter
//	target: obj8898 
incrementCounter_8903();
function incrementCounter_8903() {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = obj8901_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj8898_counterValue;
	obj8898_counterValue = obj8898_counterValue + 1;
	if (! obj8898_counterCanExceedTargetValue && obj8898_counterValue > obj8898_counterTargetValue) {
		obj8898_counterValue = obj8898_counterTargetValue;
	}

	if (oldValue != obj8898_counterValue) {
		$("#obj8898").trigger('SCEventCounterValueChange');
		$("#obj8898").trigger('SCEventCounterIncrease');
		if (obj8898_counterValue == obj8898_counterTargetValue)
			$("#obj8898").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8901_SCEventCounterReachedTargetValue_actionGroup1();
} }, 1);
}











};
obj8901_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8901").trigger("obj8901_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8901) {
				console.warn("de-queueing event obj8901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
































//	action: decrement counter
//	target: obj8901 
decrementCounter_8909();
function decrementCounter_8909() {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = obj8901_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var oldValue = obj8901_counterValue;
	obj8901_counterValue = obj8901_counterValue - 1;
	if (obj8901_counterValue < 0) {
		obj8901_counterValue = 0;
	}

	if (oldValue != obj8901_counterValue) {
		$("#obj8901").trigger('SCEventCounterValueChange');
		$("#obj8901").trigger('SCEventCounterDecrease');
		if (obj8901_counterValue == obj8901_counterTargetValue)
			$("#obj8901").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj8901_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj8901_SCEventCounterReachedTargetValue_actionGroup2();
} }, 1);
}










};
obj8901_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj8901").trigger("obj8901_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8901) {
				console.warn("de-queueing event obj8901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj8854_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_onTouchDown_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj8854");

//	action: dragDrop
//	target: obj8854 
dragDrop_8859();
function dragDrop_8859() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj8854_onTouchDown_runningActionsCount = obj8854_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj8854');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj8854_onTouchDown_runningActionsCount = window.obj8854_onTouchDown_runningActionsCount - 1;

if (window.obj8854_onTouchDown_runningActionsCount < 0) {
	window.obj8854_onTouchDown_runningActionsCount = 0;
} else if (window.obj8854_onTouchDown_runningActionsCount == 0) {
	obj8854_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj8850","#obj8916","#obj8931","#obj8946","#obj8960","#obj8974");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_8859 = false;
    	var dropped_id_8859;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_8859 = true;
					dropped_id_8859 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_8859) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj8854").trigger('SCActionDragDrop8859_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj8854_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_onTouchDown_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_8988();
function playAudioFile_8988() {
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8988")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8988");
			$("#obj_audio_playSoundFile8988").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
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
				window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj8854 
move_8989();
function move_8989() {
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj8854");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 90;
	var moveY = 758;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj8854_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8854 
hide_8981();
function hide_8981() {
	var selector = "#obj8854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = obj8854_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8981(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8974 
hide_8982();
function hide_8982() {
	var selector = "#obj8974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = obj8854_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8982(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8854_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8983();
function playAudioFile_8983() {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = obj8854_droppedInsideTargetActions_6_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8983")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8983");
			$("#obj_audio_playSoundFile8983").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup2();
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
				window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup2();
}
			}, false);
		} else {
			window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8854_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj8972
(function(){
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = obj8854_droppedInsideTargetActions_6_runningActionsCount + 1;


	var selector = "#obj8972";
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
					window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup3();
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
				window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8854_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_8985();
function incrementCounter_8985() {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = obj8854_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_6_runningActionsCount = window.obj8854_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}











};
obj8854_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	











































};
obj8854_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8854 
hide_8967();
function hide_8967() {
	var selector = "#obj8854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = obj8854_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8967(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8960 
hide_8968();
function hide_8968() {
	var selector = "#obj8960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = obj8854_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8968(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8854_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8969();
function playAudioFile_8969() {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = obj8854_droppedInsideTargetActions_5_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8969")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8969");
			$("#obj_audio_playSoundFile8969").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup2();
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
				window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup2();
}
			}, false);
		} else {
			window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8854_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj8958
(function(){
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = obj8854_droppedInsideTargetActions_5_runningActionsCount + 1;


	var selector = "#obj8958";
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
					window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup3();
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
				window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8854_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_8971();
function incrementCounter_8971() {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = obj8854_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_5_runningActionsCount = window.obj8854_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}











};
obj8854_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	











































};
obj8854_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8854 
hide_8953();
function hide_8953() {
	var selector = "#obj8854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = obj8854_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8953(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8946 
hide_8954();
function hide_8954() {
	var selector = "#obj8946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = obj8854_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8954(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8854_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8955();
function playAudioFile_8955() {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = obj8854_droppedInsideTargetActions_4_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8955")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8955");
			$("#obj_audio_playSoundFile8955").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup2();
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
				window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup2();
}
			}, false);
		} else {
			window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8854_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj8944
(function(){
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = obj8854_droppedInsideTargetActions_4_runningActionsCount + 1;


	var selector = "#obj8944";
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
					window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup3();
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
				window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8854_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_8957();
function incrementCounter_8957() {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = obj8854_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_4_runningActionsCount = window.obj8854_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}











};
obj8854_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	











































};
obj8854_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8854 
hide_8938();
function hide_8938() {
	var selector = "#obj8854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = obj8854_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8938(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8931 
hide_8939();
function hide_8939() {
	var selector = "#obj8931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = obj8854_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8939(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8854_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8940();
function playAudioFile_8940() {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = obj8854_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8940")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8940");
			$("#obj_audio_playSoundFile8940").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8854_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj8929
(function(){
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = obj8854_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj8929";
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
					window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8854_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9051();
function incrementCounter_9051() {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = obj8854_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_3_runningActionsCount = window.obj8854_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj8854_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj8854_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8854 
hide_8923();
function hide_8923() {
	var selector = "#obj8854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = obj8854_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8923(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8916 
hide_8924();
function hide_8924() {
	var selector = "#obj8916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = obj8854_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8924(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8854_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8925();
function playAudioFile_8925() {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = obj8854_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8925")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8925");
			$("#obj_audio_playSoundFile8925").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8854_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj8914
(function(){
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = obj8854_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj8914";
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
					window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8854_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_8927();
function incrementCounter_8927() {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = obj8854_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_2_runningActionsCount = window.obj8854_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj8854_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj8854_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8854 
hide_8861();
function hide_8861() {
	var selector = "#obj8854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_runningActionsCount = obj8854_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8861(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8850 
hide_8868();
function hide_8868() {
	var selector = "#obj8850";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8854_droppedInsideTargetActions_runningActionsCount = obj8854_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8868(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8854_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8862();
function playAudioFile_8862() {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = obj8854_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8862")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8862");
			$("#obj_audio_playSoundFile8862").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup2();
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
				window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8854_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj8866
(function(){
	window.obj8854_droppedInsideTargetActions_runningActionsCount = obj8854_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj8866";
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
					window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup3();
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
				window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8854_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_8911();
function incrementCounter_8911() {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = obj8854_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8875 
incrementCounter_9056();
function incrementCounter_9056() {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = obj8854_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8875_counterValue;
	obj8875_counterValue = obj8875_counterValue + 1;
	if (! obj8875_counterCanExceedTargetValue && obj8875_counterValue > obj8875_counterTargetValue) {
		obj8875_counterValue = obj8875_counterTargetValue;
	}

	if (oldValue != obj8875_counterValue) {
		$("#obj8875").trigger('SCEventCounterValueChange');
		$("#obj8875").trigger('SCEventCounterIncrease');
		if (obj8875_counterValue == obj8875_counterTargetValue)
			$("#obj8875").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8901 
incrementCounter_9057();
function incrementCounter_9057() {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = obj8854_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8901_counterValue;
	obj8901_counterValue = obj8901_counterValue + 1;
	if (! obj8901_counterCanExceedTargetValue && obj8901_counterValue > obj8901_counterTargetValue) {
		obj8901_counterValue = obj8901_counterTargetValue;
	}

	if (oldValue != obj8901_counterValue) {
		$("#obj8901").trigger('SCEventCounterValueChange');
		$("#obj8901").trigger('SCEventCounterIncrease');
		if (obj8901_counterValue == obj8901_counterTargetValue)
			$("#obj8901").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8854_droppedInsideTargetActions_runningActionsCount = window.obj8854_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8854_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8854_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8854_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8854_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj8854_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8854").trigger("obj8854_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8854) {
				console.warn("de-queueing event obj8854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8854_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj8992_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_onTouchDown_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj8992");

//	action: dragDrop
//	target: obj8992 
dragDrop_8995();
function dragDrop_8995() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj8992_onTouchDown_runningActionsCount = obj8992_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj8992');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj8992_onTouchDown_runningActionsCount = window.obj8992_onTouchDown_runningActionsCount - 1;

if (window.obj8992_onTouchDown_runningActionsCount < 0) {
	window.obj8992_onTouchDown_runningActionsCount = 0;
} else if (window.obj8992_onTouchDown_runningActionsCount == 0) {
	obj8992_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj8850","#obj8916","#obj8931","#obj8946","#obj8960","#obj8974");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_8995 = false;
    	var dropped_id_8995;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_8995 = true;
					dropped_id_8995 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_8995) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj8992").trigger('SCActionDragDrop8859_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj8992_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_onTouchDown_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_9035();
function playAudioFile_9035() {
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9035")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9035");
			$("#obj_audio_playSoundFile9035").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
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
				window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj8992 
move_9036();
function move_9036() {
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj8992");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 261;
	var moveY = 760;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj8992_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8992 
hide_9029();
function hide_9029() {
	var selector = "#obj8992";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = obj8992_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9029(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8974 
hide_9030();
function hide_9030() {
	var selector = "#obj8974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = obj8992_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9030(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8992_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9031();
function playAudioFile_9031() {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = obj8992_droppedInsideTargetActions_6_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9031")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9031");
			$("#obj_audio_playSoundFile9031").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup2();
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
				window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup2();
}
			}, false);
		} else {
			window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8992_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9037
(function(){
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = obj8992_droppedInsideTargetActions_6_runningActionsCount + 1;


	var selector = "#obj9037";
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
					window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup3();
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
				window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8992_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9033();
function incrementCounter_9033() {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = obj8992_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_6_runningActionsCount = window.obj8992_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}











};
obj8992_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	











































};
obj8992_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8992 
hide_9023();
function hide_9023() {
	var selector = "#obj8992";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = obj8992_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9023(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8960 
hide_9024();
function hide_9024() {
	var selector = "#obj8960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = obj8992_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9024(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8992_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9025();
function playAudioFile_9025() {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = obj8992_droppedInsideTargetActions_5_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9025")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9025");
			$("#obj_audio_playSoundFile9025").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup2();
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
				window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup2();
}
			}, false);
		} else {
			window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8992_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9039
(function(){
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = obj8992_droppedInsideTargetActions_5_runningActionsCount + 1;


	var selector = "#obj9039";
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
					window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup3();
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
				window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8992_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9027();
function incrementCounter_9027() {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = obj8992_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_5_runningActionsCount = window.obj8992_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}











};
obj8992_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	











































};
obj8992_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8992 
hide_9017();
function hide_9017() {
	var selector = "#obj8992";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = obj8992_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9017(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8946 
hide_9018();
function hide_9018() {
	var selector = "#obj8946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = obj8992_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9018(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8992_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9019();
function playAudioFile_9019() {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = obj8992_droppedInsideTargetActions_4_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9019")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9019");
			$("#obj_audio_playSoundFile9019").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup2();
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
				window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup2();
}
			}, false);
		} else {
			window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8992_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9041
(function(){
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = obj8992_droppedInsideTargetActions_4_runningActionsCount + 1;


	var selector = "#obj9041";
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
					window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup3();
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
				window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8992_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9021();
function incrementCounter_9021() {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = obj8992_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_4_runningActionsCount = window.obj8992_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}











};
obj8992_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	











































};
obj8992_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8992 
hide_9011();
function hide_9011() {
	var selector = "#obj8992";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = obj8992_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9011(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8931 
hide_9012();
function hide_9012() {
	var selector = "#obj8931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = obj8992_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9012(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8992_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9013();
function playAudioFile_9013() {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = obj8992_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9013")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9013");
			$("#obj_audio_playSoundFile9013").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8992_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9043
(function(){
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = obj8992_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj9043";
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
					window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8992_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9015();
function incrementCounter_9015() {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = obj8992_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8875 
incrementCounter_9054();
function incrementCounter_9054() {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = obj8992_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8875_counterValue;
	obj8875_counterValue = obj8875_counterValue + 1;
	if (! obj8875_counterCanExceedTargetValue && obj8875_counterValue > obj8875_counterTargetValue) {
		obj8875_counterValue = obj8875_counterTargetValue;
	}

	if (oldValue != obj8875_counterValue) {
		$("#obj8875").trigger('SCEventCounterValueChange');
		$("#obj8875").trigger('SCEventCounterIncrease');
		if (obj8875_counterValue == obj8875_counterTargetValue)
			$("#obj8875").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8901 
incrementCounter_9055();
function incrementCounter_9055() {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = obj8992_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8901_counterValue;
	obj8901_counterValue = obj8901_counterValue + 1;
	if (! obj8901_counterCanExceedTargetValue && obj8901_counterValue > obj8901_counterTargetValue) {
		obj8901_counterValue = obj8901_counterTargetValue;
	}

	if (oldValue != obj8901_counterValue) {
		$("#obj8901").trigger('SCEventCounterValueChange');
		$("#obj8901").trigger('SCEventCounterIncrease');
		if (obj8901_counterValue == obj8901_counterTargetValue)
			$("#obj8901").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_3_runningActionsCount = window.obj8992_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj8992_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj8992_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8992 
hide_9005();
function hide_9005() {
	var selector = "#obj8992";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = obj8992_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9005(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8916 
hide_9006();
function hide_9006() {
	var selector = "#obj8916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = obj8992_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9006(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8992_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9007();
function playAudioFile_9007() {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = obj8992_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9007")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9007");
			$("#obj_audio_playSoundFile9007").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8992_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9045
(function(){
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = obj8992_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj9045";
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
					window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8992_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9009();
function incrementCounter_9009() {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = obj8992_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_2_runningActionsCount = window.obj8992_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj8992_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj8992_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8992 
hide_8997();
function hide_8997() {
	var selector = "#obj8992";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_runningActionsCount = obj8992_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8997(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8850 
hide_8998();
function hide_8998() {
	var selector = "#obj8850";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8992_droppedInsideTargetActions_runningActionsCount = obj8992_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8998(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj8992_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_8999();
function playAudioFile_8999() {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = obj8992_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile8999")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8999");
			$("#obj_audio_playSoundFile8999").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup2();
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
				window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj8992_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9047
(function(){
	window.obj8992_droppedInsideTargetActions_runningActionsCount = obj8992_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj9047";
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
					window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup3();
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
				window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj8992_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9002();
function incrementCounter_9002() {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = obj8992_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj8992_droppedInsideTargetActions_runningActionsCount = window.obj8992_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj8992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj8992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj8992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj8992_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj8992_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj8992").trigger("obj8992_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8992) {
				console.warn("de-queueing event obj8992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8992_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj9060_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9060");

//	action: dragDrop
//	target: obj9060 
dragDrop_9063();
function dragDrop_9063() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9060_onTouchDown_runningActionsCount = obj9060_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9060');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj9060_onTouchDown_runningActionsCount = window.obj9060_onTouchDown_runningActionsCount - 1;

if (window.obj9060_onTouchDown_runningActionsCount < 0) {
	window.obj9060_onTouchDown_runningActionsCount = 0;
} else if (window.obj9060_onTouchDown_runningActionsCount == 0) {
	obj9060_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj8850","#obj8916","#obj8931","#obj8946","#obj8960","#obj8974");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9063 = false;
    	var dropped_id_9063;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_9063 = true;
					dropped_id_9063 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9063) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9060").trigger('SCActionDragDrop8859_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj9060_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_9103();
function playAudioFile_9103() {
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9103")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9103");
			$("#obj_audio_playSoundFile9103").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
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
				window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj9060 
move_9104();
function move_9104() {
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj9060");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 478;
	var moveY = 758;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj9060_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9060 
hide_9097();
function hide_9097() {
	var selector = "#obj9060";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = obj9060_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9097(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8974 
hide_9098();
function hide_9098() {
	var selector = "#obj8974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = obj9060_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9098(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9060_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9099();
function playAudioFile_9099() {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = obj9060_droppedInsideTargetActions_6_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9099")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9099");
			$("#obj_audio_playSoundFile9099").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup2();
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
				window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup2();
}
			}, false);
		} else {
			window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9060_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9106
(function(){
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = obj9060_droppedInsideTargetActions_6_runningActionsCount + 1;


	var selector = "#obj9106";
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
					window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup3();
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
				window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9060_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9101();
function incrementCounter_9101() {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = obj9060_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_6_runningActionsCount = window.obj9060_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}











};
obj9060_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	











































};
obj9060_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9060 
hide_9091();
function hide_9091() {
	var selector = "#obj9060";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = obj9060_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9091(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8960 
hide_9092();
function hide_9092() {
	var selector = "#obj8960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = obj9060_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9092(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9060_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9093();
function playAudioFile_9093() {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = obj9060_droppedInsideTargetActions_5_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9093")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9093");
			$("#obj_audio_playSoundFile9093").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup2();
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
				window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup2();
}
			}, false);
		} else {
			window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9060_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9108
(function(){
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = obj9060_droppedInsideTargetActions_5_runningActionsCount + 1;


	var selector = "#obj9108";
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
					window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup3();
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
				window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9060_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9095();
function incrementCounter_9095() {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = obj9060_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8875 
incrementCounter_9118();
function incrementCounter_9118() {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = obj9060_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8875_counterValue;
	obj8875_counterValue = obj8875_counterValue + 1;
	if (! obj8875_counterCanExceedTargetValue && obj8875_counterValue > obj8875_counterTargetValue) {
		obj8875_counterValue = obj8875_counterTargetValue;
	}

	if (oldValue != obj8875_counterValue) {
		$("#obj8875").trigger('SCEventCounterValueChange');
		$("#obj8875").trigger('SCEventCounterIncrease');
		if (obj8875_counterValue == obj8875_counterTargetValue)
			$("#obj8875").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8901 
incrementCounter_9119();
function incrementCounter_9119() {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = obj9060_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8901_counterValue;
	obj8901_counterValue = obj8901_counterValue + 1;
	if (! obj8901_counterCanExceedTargetValue && obj8901_counterValue > obj8901_counterTargetValue) {
		obj8901_counterValue = obj8901_counterTargetValue;
	}

	if (oldValue != obj8901_counterValue) {
		$("#obj8901").trigger('SCEventCounterValueChange');
		$("#obj8901").trigger('SCEventCounterIncrease');
		if (obj8901_counterValue == obj8901_counterTargetValue)
			$("#obj8901").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_5_runningActionsCount = window.obj9060_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}











};
obj9060_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	











































};
obj9060_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9060 
hide_9085();
function hide_9085() {
	var selector = "#obj9060";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = obj9060_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9085(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8946 
hide_9086();
function hide_9086() {
	var selector = "#obj8946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = obj9060_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9086(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9060_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9087();
function playAudioFile_9087() {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = obj9060_droppedInsideTargetActions_4_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9087")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9087");
			$("#obj_audio_playSoundFile9087").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup2();
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
				window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup2();
}
			}, false);
		} else {
			window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9060_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9110
(function(){
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = obj9060_droppedInsideTargetActions_4_runningActionsCount + 1;


	var selector = "#obj9110";
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
					window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup3();
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
				window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9060_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9089();
function incrementCounter_9089() {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = obj9060_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_4_runningActionsCount = window.obj9060_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}











};
obj9060_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	











































};
obj9060_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9060 
hide_9079();
function hide_9079() {
	var selector = "#obj9060";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = obj9060_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9079(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8931 
hide_9080();
function hide_9080() {
	var selector = "#obj8931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = obj9060_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9080(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9060_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9081();
function playAudioFile_9081() {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = obj9060_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9081")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9081");
			$("#obj_audio_playSoundFile9081").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9060_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9112
(function(){
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = obj9060_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj9112";
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
					window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9060_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9083();
function incrementCounter_9083() {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = obj9060_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_3_runningActionsCount = window.obj9060_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj9060_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj9060_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9060 
hide_9073();
function hide_9073() {
	var selector = "#obj9060";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = obj9060_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9073(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8916 
hide_9074();
function hide_9074() {
	var selector = "#obj8916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = obj9060_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9074(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9060_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9075();
function playAudioFile_9075() {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = obj9060_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9075")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9075");
			$("#obj_audio_playSoundFile9075").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9060_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9114
(function(){
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = obj9060_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj9114";
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
					window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9060_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9077();
function incrementCounter_9077() {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = obj9060_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_2_runningActionsCount = window.obj9060_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj9060_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj9060_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9060 
hide_9065();
function hide_9065() {
	var selector = "#obj9060";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_runningActionsCount = obj9060_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9065(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8850 
hide_9066();
function hide_9066() {
	var selector = "#obj8850";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9060_droppedInsideTargetActions_runningActionsCount = obj9060_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9066(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9060_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9067();
function playAudioFile_9067() {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = obj9060_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9067")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9067");
			$("#obj_audio_playSoundFile9067").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup2();
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
				window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9060_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9116
(function(){
	window.obj9060_droppedInsideTargetActions_runningActionsCount = obj9060_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj9116";
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
					window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup3();
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
				window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9060_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9069();
function incrementCounter_9069() {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = obj9060_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9060_droppedInsideTargetActions_runningActionsCount = window.obj9060_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9060_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9060_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9060_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9060_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj9060_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9060").trigger("obj9060_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9060) {
				console.warn("de-queueing event obj9060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9060_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj9123_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9123");

//	action: dragDrop
//	target: obj9123 
dragDrop_9126();
function dragDrop_9126() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9123_onTouchDown_runningActionsCount = obj9123_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9123');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj9123_onTouchDown_runningActionsCount = window.obj9123_onTouchDown_runningActionsCount - 1;

if (window.obj9123_onTouchDown_runningActionsCount < 0) {
	window.obj9123_onTouchDown_runningActionsCount = 0;
} else if (window.obj9123_onTouchDown_runningActionsCount == 0) {
	obj9123_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj8850","#obj8916","#obj8931","#obj8946","#obj8960","#obj8974");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9126 = false;
    	var dropped_id_9126;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_9126 = true;
					dropped_id_9126 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9126) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9123").trigger('SCActionDragDrop8859_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj9123_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_9166();
function playAudioFile_9166() {
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9166")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9166");
			$("#obj_audio_playSoundFile9166").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
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
				window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj9123 
move_9167();
function move_9167() {
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj9123");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 723;
	var moveY = 758;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj9123_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9123 
hide_9160();
function hide_9160() {
	var selector = "#obj9123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = obj9123_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9160(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8974 
hide_9161();
function hide_9161() {
	var selector = "#obj8974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = obj9123_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9161(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9123_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9162();
function playAudioFile_9162() {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = obj9123_droppedInsideTargetActions_6_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9162")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9162");
			$("#obj_audio_playSoundFile9162").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup2();
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
				window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup2();
}
			}, false);
		} else {
			window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9123_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9169
(function(){
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = obj9123_droppedInsideTargetActions_6_runningActionsCount + 1;


	var selector = "#obj9169";
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
					window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup3();
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
				window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9123_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9164();
function incrementCounter_9164() {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = obj9123_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_6_runningActionsCount = window.obj9123_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}











};
obj9123_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	











































};
obj9123_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9123 
hide_9152();
function hide_9152() {
	var selector = "#obj9123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = obj9123_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9152(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8960 
hide_9153();
function hide_9153() {
	var selector = "#obj8960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = obj9123_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9153(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9123_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9154();
function playAudioFile_9154() {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = obj9123_droppedInsideTargetActions_5_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9154")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9154");
			$("#obj_audio_playSoundFile9154").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup2();
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
				window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup2();
}
			}, false);
		} else {
			window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9123_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9171
(function(){
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = obj9123_droppedInsideTargetActions_5_runningActionsCount + 1;


	var selector = "#obj9171";
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
					window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup3();
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
				window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9123_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9156();
function incrementCounter_9156() {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = obj9123_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_5_runningActionsCount = window.obj9123_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}











};
obj9123_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	











































};
obj9123_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9123 
hide_9146();
function hide_9146() {
	var selector = "#obj9123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = obj9123_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9146(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8946 
hide_9147();
function hide_9147() {
	var selector = "#obj8946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = obj9123_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9147(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9123_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9148();
function playAudioFile_9148() {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = obj9123_droppedInsideTargetActions_4_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9148")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9148");
			$("#obj_audio_playSoundFile9148").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup2();
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
				window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup2();
}
			}, false);
		} else {
			window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9123_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9173
(function(){
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = obj9123_droppedInsideTargetActions_4_runningActionsCount + 1;


	var selector = "#obj9173";
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
					window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup3();
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
				window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9123_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9150();
function incrementCounter_9150() {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = obj9123_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_4_runningActionsCount = window.obj9123_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}











};
obj9123_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	











































};
obj9123_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9123 
hide_9140();
function hide_9140() {
	var selector = "#obj9123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = obj9123_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9140(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8931 
hide_9141();
function hide_9141() {
	var selector = "#obj8931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = obj9123_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9141(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9123_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9142();
function playAudioFile_9142() {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = obj9123_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9142")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9142");
			$("#obj_audio_playSoundFile9142").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9123_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9175
(function(){
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = obj9123_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj9175";
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
					window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9123_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9144();
function incrementCounter_9144() {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = obj9123_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_3_runningActionsCount = window.obj9123_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj9123_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj9123_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9123 
hide_9134();
function hide_9134() {
	var selector = "#obj9123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = obj9123_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9134(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8916 
hide_9135();
function hide_9135() {
	var selector = "#obj8916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = obj9123_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9135(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9123_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9136();
function playAudioFile_9136() {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = obj9123_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9136")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9136");
			$("#obj_audio_playSoundFile9136").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9123_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9177
(function(){
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = obj9123_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj9177";
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
					window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9123_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9138();
function incrementCounter_9138() {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = obj9123_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8875 
incrementCounter_9181();
function incrementCounter_9181() {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = obj9123_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8875_counterValue;
	obj8875_counterValue = obj8875_counterValue + 1;
	if (! obj8875_counterCanExceedTargetValue && obj8875_counterValue > obj8875_counterTargetValue) {
		obj8875_counterValue = obj8875_counterTargetValue;
	}

	if (oldValue != obj8875_counterValue) {
		$("#obj8875").trigger('SCEventCounterValueChange');
		$("#obj8875").trigger('SCEventCounterIncrease');
		if (obj8875_counterValue == obj8875_counterTargetValue)
			$("#obj8875").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8901 
incrementCounter_9182();
function incrementCounter_9182() {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = obj9123_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8901_counterValue;
	obj8901_counterValue = obj8901_counterValue + 1;
	if (! obj8901_counterCanExceedTargetValue && obj8901_counterValue > obj8901_counterTargetValue) {
		obj8901_counterValue = obj8901_counterTargetValue;
	}

	if (oldValue != obj8901_counterValue) {
		$("#obj8901").trigger('SCEventCounterValueChange');
		$("#obj8901").trigger('SCEventCounterIncrease');
		if (obj8901_counterValue == obj8901_counterTargetValue)
			$("#obj8901").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_2_runningActionsCount = window.obj9123_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj9123_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj9123_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9123 
hide_9128();
function hide_9128() {
	var selector = "#obj9123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_runningActionsCount = obj9123_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9128(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8850 
hide_9129();
function hide_9129() {
	var selector = "#obj8850";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9123_droppedInsideTargetActions_runningActionsCount = obj9123_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9129(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9123_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9130();
function playAudioFile_9130() {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = obj9123_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9130")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9130");
			$("#obj_audio_playSoundFile9130").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup2();
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
				window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9123_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9179
(function(){
	window.obj9123_droppedInsideTargetActions_runningActionsCount = obj9123_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj9179";
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
					window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup3();
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
				window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9123_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9132();
function incrementCounter_9132() {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = obj9123_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9123_droppedInsideTargetActions_runningActionsCount = window.obj9123_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9123_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9123_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9123_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9123_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj9123_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9123").trigger("obj9123_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9123) {
				console.warn("de-queueing event obj9123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9123_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj9233_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9233");

//	action: dragDrop
//	target: obj9233 
dragDrop_9236();
function dragDrop_9236() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9233_onTouchDown_runningActionsCount = obj9233_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9233');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj9233_onTouchDown_runningActionsCount = window.obj9233_onTouchDown_runningActionsCount - 1;

if (window.obj9233_onTouchDown_runningActionsCount < 0) {
	window.obj9233_onTouchDown_runningActionsCount = 0;
} else if (window.obj9233_onTouchDown_runningActionsCount == 0) {
	obj9233_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj8850","#obj8916","#obj8931","#obj8946","#obj8960","#obj8974");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9236 = false;
    	var dropped_id_9236;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_9236 = true;
					dropped_id_9236 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9236) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9233").trigger('SCActionDragDrop8859_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj9233_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_9276();
function playAudioFile_9276() {
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9276")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9276");
			$("#obj_audio_playSoundFile9276").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
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
				window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj9233 
move_9277();
function move_9277() {
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj9233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 964;
	var moveY = 758;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj9233_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9233 
hide_9270();
function hide_9270() {
	var selector = "#obj9233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = obj9233_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9270(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8974 
hide_9271();
function hide_9271() {
	var selector = "#obj8974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = obj9233_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9271(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9233_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9272();
function playAudioFile_9272() {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = obj9233_droppedInsideTargetActions_6_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9272")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9272");
			$("#obj_audio_playSoundFile9272").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup2();
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
				window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup2();
}
			}, false);
		} else {
			window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9233_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9279
(function(){
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = obj9233_droppedInsideTargetActions_6_runningActionsCount + 1;


	var selector = "#obj9279";
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
					window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup3();
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
				window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9233_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9274();
function incrementCounter_9274() {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = obj9233_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_6_runningActionsCount = window.obj9233_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}











};
obj9233_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	











































};
obj9233_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9233 
hide_9264();
function hide_9264() {
	var selector = "#obj9233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = obj9233_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9264(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8960 
hide_9265();
function hide_9265() {
	var selector = "#obj8960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = obj9233_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9265(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9233_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9266();
function playAudioFile_9266() {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = obj9233_droppedInsideTargetActions_5_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9266")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9266");
			$("#obj_audio_playSoundFile9266").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup2();
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
				window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup2();
}
			}, false);
		} else {
			window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9233_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9281
(function(){
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = obj9233_droppedInsideTargetActions_5_runningActionsCount + 1;


	var selector = "#obj9281";
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
					window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup3();
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
				window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9233_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9268();
function incrementCounter_9268() {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = obj9233_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_5_runningActionsCount = window.obj9233_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}











};
obj9233_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	











































};
obj9233_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9233 
hide_9258();
function hide_9258() {
	var selector = "#obj9233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = obj9233_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9258(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8946 
hide_9259();
function hide_9259() {
	var selector = "#obj8946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = obj9233_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9259(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9233_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9260();
function playAudioFile_9260() {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = obj9233_droppedInsideTargetActions_4_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9260")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9260");
			$("#obj_audio_playSoundFile9260").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup2();
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
				window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup2();
}
			}, false);
		} else {
			window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9233_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9283
(function(){
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = obj9233_droppedInsideTargetActions_4_runningActionsCount + 1;


	var selector = "#obj9283";
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
					window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup3();
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
				window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9233_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9262();
function incrementCounter_9262() {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = obj9233_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8875 
incrementCounter_9291();
function incrementCounter_9291() {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = obj9233_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8875_counterValue;
	obj8875_counterValue = obj8875_counterValue + 1;
	if (! obj8875_counterCanExceedTargetValue && obj8875_counterValue > obj8875_counterTargetValue) {
		obj8875_counterValue = obj8875_counterTargetValue;
	}

	if (oldValue != obj8875_counterValue) {
		$("#obj8875").trigger('SCEventCounterValueChange');
		$("#obj8875").trigger('SCEventCounterIncrease');
		if (obj8875_counterValue == obj8875_counterTargetValue)
			$("#obj8875").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8901 
incrementCounter_9292();
function incrementCounter_9292() {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = obj9233_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8901_counterValue;
	obj8901_counterValue = obj8901_counterValue + 1;
	if (! obj8901_counterCanExceedTargetValue && obj8901_counterValue > obj8901_counterTargetValue) {
		obj8901_counterValue = obj8901_counterTargetValue;
	}

	if (oldValue != obj8901_counterValue) {
		$("#obj8901").trigger('SCEventCounterValueChange');
		$("#obj8901").trigger('SCEventCounterIncrease');
		if (obj8901_counterValue == obj8901_counterTargetValue)
			$("#obj8901").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_4_runningActionsCount = window.obj9233_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}











};
obj9233_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	











































};
obj9233_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9233 
hide_9252();
function hide_9252() {
	var selector = "#obj9233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = obj9233_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9252(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8931 
hide_9253();
function hide_9253() {
	var selector = "#obj8931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = obj9233_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9253(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9233_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9254();
function playAudioFile_9254() {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = obj9233_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9254")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9254");
			$("#obj_audio_playSoundFile9254").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9233_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9285
(function(){
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = obj9233_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj9285";
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
					window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9233_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9256();
function incrementCounter_9256() {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = obj9233_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_3_runningActionsCount = window.obj9233_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj9233_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj9233_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9233 
hide_9244();
function hide_9244() {
	var selector = "#obj9233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = obj9233_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9244(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8916 
hide_9245();
function hide_9245() {
	var selector = "#obj8916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = obj9233_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9245(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9233_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9246();
function playAudioFile_9246() {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = obj9233_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9246")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9246");
			$("#obj_audio_playSoundFile9246").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9233_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9287
(function(){
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = obj9233_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj9287";
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
					window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9233_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9248();
function incrementCounter_9248() {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = obj9233_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_2_runningActionsCount = window.obj9233_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj9233_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj9233_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9233 
hide_9238();
function hide_9238() {
	var selector = "#obj9233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_runningActionsCount = obj9233_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9238(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8850 
hide_9239();
function hide_9239() {
	var selector = "#obj8850";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9233_droppedInsideTargetActions_runningActionsCount = obj9233_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9239(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9233_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9240();
function playAudioFile_9240() {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = obj9233_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9240")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9240");
			$("#obj_audio_playSoundFile9240").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup2();
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
				window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9233_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9289
(function(){
	window.obj9233_droppedInsideTargetActions_runningActionsCount = obj9233_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj9289";
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
					window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup3();
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
				window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9233_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9242();
function incrementCounter_9242() {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = obj9233_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9233_droppedInsideTargetActions_runningActionsCount = window.obj9233_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9233_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj9233_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9233").trigger("obj9233_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9233) {
				console.warn("de-queueing event obj9233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9233_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
obj9370_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9370");

//	action: dragDrop
//	target: obj9370 
dragDrop_9373();
function dragDrop_9373() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9370_onTouchDown_runningActionsCount = obj9370_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9370');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj9370_onTouchDown_runningActionsCount = window.obj9370_onTouchDown_runningActionsCount - 1;

if (window.obj9370_onTouchDown_runningActionsCount < 0) {
	window.obj9370_onTouchDown_runningActionsCount = 0;
} else if (window.obj9370_onTouchDown_runningActionsCount == 0) {
	obj9370_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj8850","#obj8916","#obj8931","#obj8946","#obj8960","#obj8974");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9373 = false;
    	var dropped_id_9373;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_9373 = true;
					dropped_id_9373 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9373) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9370").trigger('SCActionDragDrop8859_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj9370_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_9413();
function playAudioFile_9413() {
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9413")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9413");
			$("#obj_audio_playSoundFile9413").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
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
				window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj9370 
move_9414();
function move_9414() {
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj9370");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1205;
	var moveY = 760;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2();
}
		}, 1);
	});
}







































};
obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj9370_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9370 
hide_9407();
function hide_9407() {
	var selector = "#obj9370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = obj9370_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9407(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8974 
hide_9408();
function hide_9408() {
	var selector = "#obj8974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = obj9370_droppedInsideTargetActions_6_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9408(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9370_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9409();
function playAudioFile_9409() {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = obj9370_droppedInsideTargetActions_6_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9409")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9409");
			$("#obj_audio_playSoundFile9409").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup2();
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
				window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup2();
}
			}, false);
		} else {
			window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9370_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9415
(function(){
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = obj9370_droppedInsideTargetActions_6_runningActionsCount + 1;


	var selector = "#obj9415";
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
					window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup3();
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
				window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9370_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9411();
function incrementCounter_9411() {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = obj9370_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8875 
incrementCounter_9427();
function incrementCounter_9427() {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = obj9370_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8875_counterValue;
	obj8875_counterValue = obj8875_counterValue + 1;
	if (! obj8875_counterCanExceedTargetValue && obj8875_counterValue > obj8875_counterTargetValue) {
		obj8875_counterValue = obj8875_counterTargetValue;
	}

	if (oldValue != obj8875_counterValue) {
		$("#obj8875").trigger('SCEventCounterValueChange');
		$("#obj8875").trigger('SCEventCounterIncrease');
		if (obj8875_counterValue == obj8875_counterTargetValue)
			$("#obj8875").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}
//	action: increment counter
//	target: obj8901 
incrementCounter_9428();
function incrementCounter_9428() {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = obj9370_droppedInsideTargetActions_6_runningActionsCount + 1;


	var oldValue = obj8901_counterValue;
	obj8901_counterValue = obj8901_counterValue + 1;
	if (! obj8901_counterCanExceedTargetValue && obj8901_counterValue > obj8901_counterTargetValue) {
		obj8901_counterValue = obj8901_counterTargetValue;
	}

	if (oldValue != obj8901_counterValue) {
		$("#obj8901").trigger('SCEventCounterValueChange');
		$("#obj8901").trigger('SCEventCounterIncrease');
		if (obj8901_counterValue == obj8901_counterTargetValue)
			$("#obj8901").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_6_runningActionsCount = window.obj9370_droppedInsideTargetActions_6_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_6_actionGroup4();
} }, 1);
}











};
obj9370_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_6_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	











































};
obj9370_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9370 
hide_9401();
function hide_9401() {
	var selector = "#obj9370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = obj9370_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9401(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8960 
hide_9402();
function hide_9402() {
	var selector = "#obj8960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = obj9370_droppedInsideTargetActions_5_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9402(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9370_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9403();
function playAudioFile_9403() {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = obj9370_droppedInsideTargetActions_5_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9403")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9403");
			$("#obj_audio_playSoundFile9403").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup2();
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
				window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup2();
}
			}, false);
		} else {
			window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9370_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9417
(function(){
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = obj9370_droppedInsideTargetActions_5_runningActionsCount + 1;


	var selector = "#obj9417";
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
					window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup3();
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
				window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9370_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9405();
function incrementCounter_9405() {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = obj9370_droppedInsideTargetActions_5_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_5_runningActionsCount = window.obj9370_droppedInsideTargetActions_5_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_5_actionGroup4();
} }, 1);
}











};
obj9370_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_5_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	











































};
obj9370_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9370 
hide_9395();
function hide_9395() {
	var selector = "#obj9370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = obj9370_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9395(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8946 
hide_9396();
function hide_9396() {
	var selector = "#obj8946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = obj9370_droppedInsideTargetActions_4_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9396(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9370_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9397();
function playAudioFile_9397() {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = obj9370_droppedInsideTargetActions_4_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9397")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9397");
			$("#obj_audio_playSoundFile9397").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup2();
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
				window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup2();
}
			}, false);
		} else {
			window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9370_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9419
(function(){
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = obj9370_droppedInsideTargetActions_4_runningActionsCount + 1;


	var selector = "#obj9419";
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
					window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup3();
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
				window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9370_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9399();
function incrementCounter_9399() {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = obj9370_droppedInsideTargetActions_4_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_4_runningActionsCount = window.obj9370_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_4_actionGroup4();
} }, 1);
}











};
obj9370_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	











































};
obj9370_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9370 
hide_9387();
function hide_9387() {
	var selector = "#obj9370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = obj9370_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9387(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8931 
hide_9388();
function hide_9388() {
	var selector = "#obj8931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = obj9370_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9388(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9370_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9389();
function playAudioFile_9389() {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = obj9370_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9389")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9389");
			$("#obj_audio_playSoundFile9389").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup2();
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
				window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup2();
}
			}, false);
		} else {
			window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9370_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9421
(function(){
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = obj9370_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj9421";
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
					window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup3();
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
				window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9370_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9391();
function incrementCounter_9391() {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = obj9370_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_3_runningActionsCount = window.obj9370_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_3_actionGroup4();
} }, 1);
}











};
obj9370_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	











































};
obj9370_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9370 
hide_9381();
function hide_9381() {
	var selector = "#obj9370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = obj9370_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9381(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8916 
hide_9382();
function hide_9382() {
	var selector = "#obj8916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = obj9370_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9382(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9370_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9383();
function playAudioFile_9383() {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = obj9370_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9383")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9383");
			$("#obj_audio_playSoundFile9383").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup2();
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
				window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup2();
}
			}, false);
		} else {
			window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9370_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9423
(function(){
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = obj9370_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj9423";
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
					window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup3();
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
				window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9370_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9385();
function incrementCounter_9385() {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = obj9370_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_2_runningActionsCount = window.obj9370_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_2_actionGroup4();
} }, 1);
}











};
obj9370_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	











































};
obj9370_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9370 
hide_9375();
function hide_9375() {
	var selector = "#obj9370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_runningActionsCount = obj9370_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9375(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj8850 
hide_9376();
function hide_9376() {
	var selector = "#obj8850";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9370_droppedInsideTargetActions_runningActionsCount = obj9370_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9376(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9370_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_9377();
function playAudioFile_9377() {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = obj9370_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9377")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9377");
			$("#obj_audio_playSoundFile9377").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup2();
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
				window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup2();
}
			}, false);
		} else {
			window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj9370_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9425
(function(){
	window.obj9370_droppedInsideTargetActions_runningActionsCount = obj9370_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj9425";
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
					window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup3();
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
				window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9370_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = 3;
	































//	action: increment counter
//	target: obj8870 
incrementCounter_9379();
function incrementCounter_9379() {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = obj9370_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj8870_counterValue;
	obj8870_counterValue = obj8870_counterValue + 1;
	if (! obj8870_counterCanExceedTargetValue && obj8870_counterValue > obj8870_counterTargetValue) {
		obj8870_counterValue = obj8870_counterTargetValue;
	}

	if (oldValue != obj8870_counterValue) {
		$("#obj8870").trigger('SCEventCounterValueChange');
		$("#obj8870").trigger('SCEventCounterIncrease');
		if (obj8870_counterValue == obj8870_counterTargetValue)
			$("#obj8870").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj9370_droppedInsideTargetActions_runningActionsCount = window.obj9370_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj9370_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj9370_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj9370_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_droppedInsideTargetActions_actionGroup4();
} }, 1);
}











};
obj9370_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9370) {
				console.warn("de-queueing event obj9370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9370_droppedInsideTargetActions_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj8270: Event Touch Down
 *
 */

$("#obj8270").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8270_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8270_onTap is still running");
	return;
}
var obj8270_onTap_runningActionsCount = 0;
var obj8270_onTap_loopCount = 0;
obj8270_onTap_actionGroup0();
});











































































/*
 *
 *   obj8470: Event Touch Down
 *
 */

$("#obj8470").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8470_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8470_onTap is still running");
	return;
}
var obj8470_onTap_runningActionsCount = 0;
var obj8470_onTap_loopCount = 0;
obj8470_onTap_actionGroup0();
});


















/*
 *
 *   obj8460: Event Touch Down
 *
 */

$("#obj8460").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8460_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8460_onTap is still running");
	return;
}
var obj8460_onTap_runningActionsCount = 0;
var obj8460_onTap_loopCount = 0;
obj8460_onTap_actionGroup0();
});













































































































































/*
 *
 *   obj8891: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8891").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8891_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8891_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8891_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8891_SCEventCounterReachedTargetValue_loopCount = 0;
obj8891_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8888: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8888").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8888_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8888_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8888_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8888_SCEventCounterReachedTargetValue_loopCount = 0;
obj8888_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8885: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8885").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8885_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8885_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8885_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8885_SCEventCounterReachedTargetValue_loopCount = 0;
obj8885_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8882: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8882").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8882_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8882_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8882_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8882_SCEventCounterReachedTargetValue_loopCount = 0;
obj8882_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8879: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8879").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8879_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8879_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8879_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8879_SCEventCounterReachedTargetValue_loopCount = 0;
obj8879_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8875: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8875").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8875_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8875_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8875_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8875_SCEventCounterReachedTargetValue_loopCount = 0;
obj8875_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8870: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8870").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8870_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8870_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8870_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8870_SCEventCounterReachedTargetValue_loopCount = 0;
obj8870_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8898: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8898").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8898_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8898_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8898_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8898_SCEventCounterReachedTargetValue_loopCount = 0;
obj8898_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj8901: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj8901").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj8901_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8901_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj8901_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj8901_SCEventCounterReachedTargetValue_loopCount = 0;
obj8901_SCEventCounterReachedTargetValue_actionGroup0();
});







































































































































































































































































































































































































/*
 *
 *   obj8854: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj8854");
	var winTarget = document.getElementById("obj8854");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj8854").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj8854_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj8854_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj8854_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_onTouchDown is still running");
	return;
}
var obj8854_onTouchDown_runningActionsCount = 0;
var obj8854_onTouchDown_loopCount = 0;
obj8854_onTouchDown_actionGroup0();
});






/*
 *
 *   obj8854: Event SCActionDragDrop8859_droppedOutsideTargetActions
 *
 */

$("#obj8854").bind("SCActionDragDrop8859_droppedOutsideTargetActions", function(event) {
	if (window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_SCActionDragDrop8859_droppedOutsideTargetActions is still running");
	return;
}
var obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
obj8854_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj8854: Event droppedInsideTargetActions_6
 *
 */

$("#obj8854").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj8854_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_droppedInsideTargetActions_6 is still running");
	return;
}
var obj8854_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_6_loopCount = 0;
obj8854_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj8854: Event droppedInsideTargetActions_5
 *
 */

$("#obj8854").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj8854_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_droppedInsideTargetActions_5 is still running");
	return;
}
var obj8854_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_5_loopCount = 0;
obj8854_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj8854: Event droppedInsideTargetActions_4
 *
 */

$("#obj8854").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj8854_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_droppedInsideTargetActions_4 is still running");
	return;
}
var obj8854_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_4_loopCount = 0;
obj8854_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj8854: Event droppedInsideTargetActions_3
 *
 */

$("#obj8854").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj8854_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_droppedInsideTargetActions_3 is still running");
	return;
}
var obj8854_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_3_loopCount = 0;
obj8854_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj8854: Event droppedInsideTargetActions_2
 *
 */

$("#obj8854").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj8854_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_droppedInsideTargetActions_2 is still running");
	return;
}
var obj8854_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_2_loopCount = 0;
obj8854_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj8854: Event droppedInsideTargetActions
 *
 */

$("#obj8854").bind("droppedInsideTargetActions", function(event) {
	if (window.obj8854_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8854_droppedInsideTargetActions is still running");
	return;
}
var obj8854_droppedInsideTargetActions_runningActionsCount = 0;
var obj8854_droppedInsideTargetActions_loopCount = 0;
obj8854_droppedInsideTargetActions_actionGroup0();
});





























































































































/*
 *
 *   obj8992: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj8992");
	var winTarget = document.getElementById("obj8992");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj8992").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj8992_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj8992_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj8992_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_onTouchDown is still running");
	return;
}
var obj8992_onTouchDown_runningActionsCount = 0;
var obj8992_onTouchDown_loopCount = 0;
obj8992_onTouchDown_actionGroup0();
});






/*
 *
 *   obj8992: Event SCActionDragDrop8859_droppedOutsideTargetActions
 *
 */

$("#obj8992").bind("SCActionDragDrop8859_droppedOutsideTargetActions", function(event) {
	if (window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_SCActionDragDrop8859_droppedOutsideTargetActions is still running");
	return;
}
var obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
obj8992_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj8992: Event droppedInsideTargetActions_6
 *
 */

$("#obj8992").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj8992_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_droppedInsideTargetActions_6 is still running");
	return;
}
var obj8992_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_6_loopCount = 0;
obj8992_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj8992: Event droppedInsideTargetActions_5
 *
 */

$("#obj8992").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj8992_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_droppedInsideTargetActions_5 is still running");
	return;
}
var obj8992_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_5_loopCount = 0;
obj8992_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj8992: Event droppedInsideTargetActions_4
 *
 */

$("#obj8992").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj8992_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_droppedInsideTargetActions_4 is still running");
	return;
}
var obj8992_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_4_loopCount = 0;
obj8992_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj8992: Event droppedInsideTargetActions_3
 *
 */

$("#obj8992").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj8992_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_droppedInsideTargetActions_3 is still running");
	return;
}
var obj8992_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_3_loopCount = 0;
obj8992_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj8992: Event droppedInsideTargetActions_2
 *
 */

$("#obj8992").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj8992_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_droppedInsideTargetActions_2 is still running");
	return;
}
var obj8992_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_2_loopCount = 0;
obj8992_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj8992: Event droppedInsideTargetActions
 *
 */

$("#obj8992").bind("droppedInsideTargetActions", function(event) {
	if (window.obj8992_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8992_droppedInsideTargetActions is still running");
	return;
}
var obj8992_droppedInsideTargetActions_runningActionsCount = 0;
var obj8992_droppedInsideTargetActions_loopCount = 0;
obj8992_droppedInsideTargetActions_actionGroup0();
});





























































































































/*
 *
 *   obj9060: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9060");
	var winTarget = document.getElementById("obj9060");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj9060").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9060_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9060_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9060_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_onTouchDown is still running");
	return;
}
var obj9060_onTouchDown_runningActionsCount = 0;
var obj9060_onTouchDown_loopCount = 0;
obj9060_onTouchDown_actionGroup0();
});






/*
 *
 *   obj9060: Event SCActionDragDrop8859_droppedOutsideTargetActions
 *
 */

$("#obj9060").bind("SCActionDragDrop8859_droppedOutsideTargetActions", function(event) {
	if (window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_SCActionDragDrop8859_droppedOutsideTargetActions is still running");
	return;
}
var obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
obj9060_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9060: Event droppedInsideTargetActions_6
 *
 */

$("#obj9060").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj9060_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_droppedInsideTargetActions_6 is still running");
	return;
}
var obj9060_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_6_loopCount = 0;
obj9060_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj9060: Event droppedInsideTargetActions_5
 *
 */

$("#obj9060").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj9060_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_droppedInsideTargetActions_5 is still running");
	return;
}
var obj9060_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_5_loopCount = 0;
obj9060_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj9060: Event droppedInsideTargetActions_4
 *
 */

$("#obj9060").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj9060_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_droppedInsideTargetActions_4 is still running");
	return;
}
var obj9060_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_4_loopCount = 0;
obj9060_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj9060: Event droppedInsideTargetActions_3
 *
 */

$("#obj9060").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj9060_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_droppedInsideTargetActions_3 is still running");
	return;
}
var obj9060_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_3_loopCount = 0;
obj9060_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj9060: Event droppedInsideTargetActions_2
 *
 */

$("#obj9060").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj9060_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_droppedInsideTargetActions_2 is still running");
	return;
}
var obj9060_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_2_loopCount = 0;
obj9060_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj9060: Event droppedInsideTargetActions
 *
 */

$("#obj9060").bind("droppedInsideTargetActions", function(event) {
	if (window.obj9060_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9060_droppedInsideTargetActions is still running");
	return;
}
var obj9060_droppedInsideTargetActions_runningActionsCount = 0;
var obj9060_droppedInsideTargetActions_loopCount = 0;
obj9060_droppedInsideTargetActions_actionGroup0();
});





























































































































/*
 *
 *   obj9123: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9123");
	var winTarget = document.getElementById("obj9123");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj9123").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9123_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9123_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9123_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_onTouchDown is still running");
	return;
}
var obj9123_onTouchDown_runningActionsCount = 0;
var obj9123_onTouchDown_loopCount = 0;
obj9123_onTouchDown_actionGroup0();
});






/*
 *
 *   obj9123: Event SCActionDragDrop8859_droppedOutsideTargetActions
 *
 */

$("#obj9123").bind("SCActionDragDrop8859_droppedOutsideTargetActions", function(event) {
	if (window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_SCActionDragDrop8859_droppedOutsideTargetActions is still running");
	return;
}
var obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
obj9123_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9123: Event droppedInsideTargetActions_6
 *
 */

$("#obj9123").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj9123_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_droppedInsideTargetActions_6 is still running");
	return;
}
var obj9123_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_6_loopCount = 0;
obj9123_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj9123: Event droppedInsideTargetActions_5
 *
 */

$("#obj9123").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj9123_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_droppedInsideTargetActions_5 is still running");
	return;
}
var obj9123_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_5_loopCount = 0;
obj9123_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj9123: Event droppedInsideTargetActions_4
 *
 */

$("#obj9123").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj9123_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_droppedInsideTargetActions_4 is still running");
	return;
}
var obj9123_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_4_loopCount = 0;
obj9123_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj9123: Event droppedInsideTargetActions_3
 *
 */

$("#obj9123").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj9123_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_droppedInsideTargetActions_3 is still running");
	return;
}
var obj9123_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_3_loopCount = 0;
obj9123_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj9123: Event droppedInsideTargetActions_2
 *
 */

$("#obj9123").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj9123_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_droppedInsideTargetActions_2 is still running");
	return;
}
var obj9123_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_2_loopCount = 0;
obj9123_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj9123: Event droppedInsideTargetActions
 *
 */

$("#obj9123").bind("droppedInsideTargetActions", function(event) {
	if (window.obj9123_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9123_droppedInsideTargetActions is still running");
	return;
}
var obj9123_droppedInsideTargetActions_runningActionsCount = 0;
var obj9123_droppedInsideTargetActions_loopCount = 0;
obj9123_droppedInsideTargetActions_actionGroup0();
});





























































































































/*
 *
 *   obj9233: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9233");
	var winTarget = document.getElementById("obj9233");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj9233").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9233_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9233_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9233_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_onTouchDown is still running");
	return;
}
var obj9233_onTouchDown_runningActionsCount = 0;
var obj9233_onTouchDown_loopCount = 0;
obj9233_onTouchDown_actionGroup0();
});






/*
 *
 *   obj9233: Event SCActionDragDrop8859_droppedOutsideTargetActions
 *
 */

$("#obj9233").bind("SCActionDragDrop8859_droppedOutsideTargetActions", function(event) {
	if (window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_SCActionDragDrop8859_droppedOutsideTargetActions is still running");
	return;
}
var obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
obj9233_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9233: Event droppedInsideTargetActions_6
 *
 */

$("#obj9233").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj9233_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_droppedInsideTargetActions_6 is still running");
	return;
}
var obj9233_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_6_loopCount = 0;
obj9233_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj9233: Event droppedInsideTargetActions_5
 *
 */

$("#obj9233").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj9233_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_droppedInsideTargetActions_5 is still running");
	return;
}
var obj9233_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_5_loopCount = 0;
obj9233_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj9233: Event droppedInsideTargetActions_4
 *
 */

$("#obj9233").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj9233_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_droppedInsideTargetActions_4 is still running");
	return;
}
var obj9233_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_4_loopCount = 0;
obj9233_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj9233: Event droppedInsideTargetActions_3
 *
 */

$("#obj9233").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj9233_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_droppedInsideTargetActions_3 is still running");
	return;
}
var obj9233_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_3_loopCount = 0;
obj9233_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj9233: Event droppedInsideTargetActions_2
 *
 */

$("#obj9233").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj9233_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_droppedInsideTargetActions_2 is still running");
	return;
}
var obj9233_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_2_loopCount = 0;
obj9233_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj9233: Event droppedInsideTargetActions
 *
 */

$("#obj9233").bind("droppedInsideTargetActions", function(event) {
	if (window.obj9233_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9233_droppedInsideTargetActions is still running");
	return;
}
var obj9233_droppedInsideTargetActions_runningActionsCount = 0;
var obj9233_droppedInsideTargetActions_loopCount = 0;
obj9233_droppedInsideTargetActions_actionGroup0();
});





























































































































/*
 *
 *   obj9370: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9370");
	var winTarget = document.getElementById("obj9370");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj9370").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9370_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9370_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9370_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_onTouchDown is still running");
	return;
}
var obj9370_onTouchDown_runningActionsCount = 0;
var obj9370_onTouchDown_loopCount = 0;
obj9370_onTouchDown_actionGroup0();
});






/*
 *
 *   obj9370: Event SCActionDragDrop8859_droppedOutsideTargetActions
 *
 */

$("#obj9370").bind("SCActionDragDrop8859_droppedOutsideTargetActions", function(event) {
	if (window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_SCActionDragDrop8859_droppedOutsideTargetActions is still running");
	return;
}
var obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_loopCount = 0;
obj9370_SCActionDragDrop8859_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9370: Event droppedInsideTargetActions_6
 *
 */

$("#obj9370").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj9370_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_droppedInsideTargetActions_6 is still running");
	return;
}
var obj9370_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_6_loopCount = 0;
obj9370_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj9370: Event droppedInsideTargetActions_5
 *
 */

$("#obj9370").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj9370_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_droppedInsideTargetActions_5 is still running");
	return;
}
var obj9370_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_5_loopCount = 0;
obj9370_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj9370: Event droppedInsideTargetActions_4
 *
 */

$("#obj9370").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj9370_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_droppedInsideTargetActions_4 is still running");
	return;
}
var obj9370_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_4_loopCount = 0;
obj9370_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj9370: Event droppedInsideTargetActions_3
 *
 */

$("#obj9370").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj9370_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_droppedInsideTargetActions_3 is still running");
	return;
}
var obj9370_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_3_loopCount = 0;
obj9370_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj9370: Event droppedInsideTargetActions_2
 *
 */

$("#obj9370").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj9370_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_droppedInsideTargetActions_2 is still running");
	return;
}
var obj9370_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_2_loopCount = 0;
obj9370_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj9370: Event droppedInsideTargetActions
 *
 */

$("#obj9370").bind("droppedInsideTargetActions", function(event) {
	if (window.obj9370_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9370_droppedInsideTargetActions is still running");
	return;
}
var obj9370_droppedInsideTargetActions_runningActionsCount = 0;
var obj9370_droppedInsideTargetActions_loopCount = 0;
obj9370_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj8259").trigger('SCEventShow');
$("#obj8266").trigger('SCEventShow');
$("#obj8270").trigger('SCEventShow');
$("#obj8273").trigger('SCEventShow');
$("#obj8275").trigger('SCEventShow');
$("#obj8458").trigger('SCEventShow');
$("#obj8470").trigger('SCEventShow');
$("#obj8846").trigger('SCEventShow');
$("#obj8848").trigger('SCEventShow');
$("#obj8850").trigger('SCEventShow');
$("#obj8896").trigger('SCEventShow');
$("#obj8894").trigger('SCEventShow');
$("#obj8920").trigger('SCEventShow');
$("#obj8918").trigger('SCEventShow');
$("#obj8916").trigger('SCEventShow');
$("#obj8935").trigger('SCEventShow');
$("#obj8933").trigger('SCEventShow');
$("#obj8931").trigger('SCEventShow');
$("#obj8950").trigger('SCEventShow');
$("#obj8948").trigger('SCEventShow');
$("#obj8946").trigger('SCEventShow');
$("#obj8964").trigger('SCEventShow');
$("#obj8962").trigger('SCEventShow');
$("#obj8960").trigger('SCEventShow');
$("#obj8978").trigger('SCEventShow');
$("#obj8976").trigger('SCEventShow');
$("#obj8974").trigger('SCEventShow');
$("#obj8854").trigger('SCEventShow');
$("#obj8992").trigger('SCEventShow');
$("#obj9060").trigger('SCEventShow');
$("#obj9123").trigger('SCEventShow');
$("#obj9233").trigger('SCEventShow');
$("#obj9370").trigger('SCEventShow');
	document.querySelector('html').setAttribute('translate', 'no');

});