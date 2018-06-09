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
 * vs. -- 1.5.0
 *
 * By Jim Hallock (justjim1220@gmail.com)
 *
 * Licensed with a crapload of good ole' Southern Sweet Tea 
 * and a lot of Cheyenne Extreme Menthol cigars!!!
 */

Module.register("MMM-RandomYouTubePlayer", {
	defaults: {
		listType: "playlist",
		list: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",
		volume: "100", //percentage of starting sound 0-100
        height: "480", // specified in pixels (px)
        width: "720", // specified in pixels (px)
		autoplay: "true", // to automatically play when player gets loaded
		loop: "true" // to replay the playlist continuously
	},
	
	// playlist ID is found in the URL on YouTube: 
	// https://www.youtube.com/playlist?list=PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW
	// whereas "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW" is the ID

	/* Other Parameters that can be configured - for full explanation of each,
		go to https://developers.google.com/youtube/player_parameters#Parameters
        cc_load_policy: "true",
		color: "red",
		controls: "false",
        disablekb: "true",
        enablejsapi: "true",
		fs: "false",
		iv_load_policy: "3",
		modestbranding: "false",
        showinfo: "false",
        rel: "false",
    */
	

	getDom: function() { // to override Dom generator
		// creates the html container for the player
		var wrapper = document.createElement("div");
		// loads the IFrame Player API code asynchronously
		var scriptContainer = document.createElement('script');

		// creates an <iframe> (and YouTube player) after the API code downloads
    	function onYouTubeIframeAPIReady() {
			var player = new YT.Player("player", {
				volume: "100",
				height: "480",
				width: "720",
				autoplay: "true",
				loop: "true",
		    	events: {
				onReady: onPlayerReady,
				onStateChange: onPlayerStateChange,
	    		}
			});
    	}

		var maxNumber;
		var oldNumber = 0;
		var NewNumber = 0;

    	function newRandomNumber() {
			oldNumber = NewNumber;
			NewNumber = Math.floor(Math.random() * maxNumber);
			if (NewNumber == oldNumber) {
			    newRandomNumber();
			}
				else {
			    	return NewNumber;
			  	}
   		}

    	function onPlayerReady(event) {
			player.loadPlaylist();

			// event.target.setShuffle(true);
    	}

		var firstLoad = true;
		var playlistArray;
		var playListArrayLength;

    	function onPlayerStateChange(event) {
			console.log(event.data.playlist);
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
		}

		wrapper.appendChild(scriptContainer);

		var tag = document.createElement("script");	
		tag.src = "https://www.youtube.com/iframe_api";
		wrapper.appendChild(tag);

		var firstScriptTag = document.getElementsByTagName("script")[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		wrapper.appendChild(firstScriptTag);

		var TempDiv = document.createElement("div");
		TempDiv.setAttribute(this.config.list, "player");
		wrapper.appendChild(TempDiv);

        var done = false;

		wrapper.innerHTML = "<iframe ID=player width=\"" + this.config.width +"\" height=\"" + this.config.height + "\" src=\"https://www.youtube.com/embed/?" + this.config.listType + "&" + this.config.list + "frameborder=\"0\"></iframe>";

		return wrapper;
	}
});