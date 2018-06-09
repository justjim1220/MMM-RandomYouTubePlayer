/**********************************************************************************
 * MagicMIrror Module - MMM-RandomYouTubePlayer
 *
 * This is a module for the [MagicMirror² By Michael Teeuw http://michaelteeuw.nl]
 * (https://github.com/MichMich/MagicMirror/).
 *
 * this module pulls a specified playlist from YouTube, shuffles the video list,
 * then gets a random video and plays it
 * it starts the player with a random video,
 * then continues to play random videos throughout the list
 *
 * NOT tested with Raspberry Pi or Linux-Based systems. I'm pretty sure it will
 * work with all platforme,
 * It DOES work with Windows 10!!!
 *
 * vs. -- 1.5.0
 *
 * By Jim Hallock (justjim1220@gmail.com)
 *
 * Licensed with a crapload of good ole' Southern Sweet Tea 
 * and a lot of Cheyenne Extreme Menthol cigars!!!
 *********************************************************************************/


Module.register("MMM-RandomYouTubePlayer", {
    defaults: {
        listType: "playlist",
        playlistId: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",
        volume: 50, //percentage of starting sound 0-100
        height: "420", // specified in pixels (px)
        width: "700", // specified in pixels (px)
        autoplay: "true", // to automatically play when player gets loaded
        loop: "true" // to replay the playlist continuously
    },

    requires: "youtube-random-video",

    getDom: function () {
        var wrapper = document.createElement("div");

        var scriptContainer = document.createElement('script');

        // var playlistId = "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW";
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: this.config.height,
                width: this.config.width,
                events: {
                    onReady: "onPlayerReady",
                    onStateChange: "onPlayerStateChange"
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
                listType: this.config.listType,
                list: this.config.playlistId
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
       
        }
      return wrapper;
    }
});
