/* MagicMIrror Module - MMM-RandomYouTube */

/* this module pulls a specified playlist from YouTube, shuffles the video list, then gets a random video and plays it
 * it starts the player with a random video, then continues to play random videos throughout the list 
 * (code working with HTML script)
 *
 * By Jim Hallock (justjim1220@gmail.com)
 * Licensed with a crapload of good ole' Southern Sweet Tea and a lot of cigars!!!
 */

requiresVersion: "2.1.0",

Module.register("MMM-RandomYouTube", {
    defaults: {
        playbackRate: "1",
        volume: "100",
        height: "480",
        width: "700",
        loop: "true",
        autoplay: "true",
        controls: "true",
        disablekb: "false",
        showinfo: "true",
        rel: "false",
        fs: "false",
        modestbranding: "false"
    },

    getScripts: function() {
        return [
            'moment.js',
            'https://code.jquery.com/jquery-2.2.3.min.js',
        ]
    },

    start: function () {
        var playlistID = 'PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW';
        var playlistArray;
        var playListArrayLength;
        var maxNumber;
        var oldNumber = 0;
        var NewNumber = 0;
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";

        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },

    getDom: function () {
        var wrapper = document.createElement("div");
            
        function onYouTubeIframeAPIReady() {
            var player = new YT.Player("player", {
                height: '411',
                width: '548'
            },

            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        }

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
            player.loadPlaylist({
                'listType': 'playlist',
                'list': playlistId
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
        wrapper.innerHTML = "<iframe src=\"https://www.youtube.com/embed/" + this.config.listType & list + params + "</iframe>";
        return wrapper;

    }
});