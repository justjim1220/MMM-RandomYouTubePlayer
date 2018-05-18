/* MagicMIrror Module - MMM-RandomYouTubePlayer
 *
 * This is a module for the [MagicMirror² By Michael Teeuw http://michaelteeuw.nl]
 * (https://github.com/MichMich/MagicMirror/).
 *
 * this module pulls a specified playlist from YouTube, shuffles the video list,
 * then gets a random video and plays it
 * it starts the player with a random video,
 * then continues to play random videos throughout the list
 *
 * NOT tested with Raspberry Pi or Linux-Based systems.
 * It DOES work with Windows 10!!!
 *
 * vs. -- 1.4.0
 *
 * By Jim Hallock (justjim1220@gmail.com)
 *
 * Licensed with a crapload of good ole' Southern Sweet Tea 
 * and a lot of Cheyenne Extreme Menthol cigars!!!
 */

Module.register("MMM-RandomYouTubePlayer", {
	defaults: {
		playlist_ID: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",
		volume: "100",
		height: "420",
		width: "700",
		loop: "true"
	},

    getDom: function() {
	var wrapper = document.createElement("div");

	var scriptContainer = document.createElement('script');

	var playlistId = " & + this.config.playlist_ID + ";	

    function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	    height: '480',
	    width: '720',
	    events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange,
	    }
	});
    }

	var playlistArray;
	var playListArrayLength;
	var maxNumber;
	var oldNumber = 0;
	var NewNumber = 0;

    function newRandomNumber() {
	oldNumber = NewNumber;
	NewNumber = Math.floor(Math.random() * maxNumber);
	if (NewNumber == oldNumber) {
	    newRandomNumber();
	} else {
	    return NewNumber;
	}
    }

    function onPlayerReady(event) {
	player.loadPlaylist({
	    'listType': 'playlist',
	    'list': playlistId,
	});
    }

	var firstLoad = true;

    function onPlayerStateChange(event) {
    console.log(event.data);
	if (event.data == YT.PlayerState.ENDED) {
	    player.playVideoAt(newRandomNumber());
	} else {
	if (firstLoad && event.data == YT.PlayerState.PLAYING) {
	    firstLoad = false;

	playlistArray = player.getPlaylist();
	playListArrayLength = playlistArray.length;
	maxNumber = playListArrayLength;
	NewNumber = newRandomNumber();
	player.playVideoAt(newRandomNumber());
	}
    }

	wrapper.appendChild(scriptContainer);

	var TempDiv = document.createElement('div');
	wrapper.appendChild(TempDiv);
	TempDiv.setAttribute("player");

	var tag = document.createElement('script');
	wrapper.appendChild(tag);
	tag.src = "https://www.youtube.com/iframe_api";

	var firstScriptTag = document.getElementsByTagName('script')[0];
        wrapper.appendChild(firstScriptTag);
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
        var done = false;

	wrapper.innerHTML = "<iframe width=\"" + this.config.width +"\" height=\"" + this.config.height + "\" src=\"https://www.youtube.com/embed/" + "listType" + "&list" +  "frameborder=\"0\"></iframe>";

	return wrapper;
}
});