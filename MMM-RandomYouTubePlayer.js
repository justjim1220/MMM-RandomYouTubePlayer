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
 * version: 2.0.0
 *
 * By Jim Hallock (justjim1220@gmail.com)
 *
 * a huge, huge THANKS goes out to asimhsidd for his collaboration, hints, and pointers!!!
 * (Dude, you saved me from some major headaches!!!)
 *
 * Licensed with a crapload of good ole' Southern Sweet Tea
 * and a lot of Cheyenne Extreme Menthol cigars!!!
 */

"use strict",

Module.register("MMM-RandomYouTubePlayer", {
    defaults: {
        listType: "playlist",
        // playlist ID is found in the URL on YouTube:
        // https://www.youtube.com/playlist?list=PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW
        // whereas "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW" is the 'list' you need to replace below
        list: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",
        height: "394", // specified in pixels (px)
        width: "700", // specified in pixels (px)
        showinfo: false,
        rel: false,
        fs: true,
        modestbranding: true,
		autoplay: true,
        enablejsapi: true,
        controls: true,
        cc_load_policy: true,
		loop: false
    },
		
    /* other congiurable options
    volume: "50%", // percentage of starting sound 0-100
    color: "red", // shows status bar color on the player, "red" or "white"
    disablekb: "0", // enables or disables keyboard functions
    iv_load_policy: "1", // shows or hides video annotations
    */

    requiresVersion: "2.1.0",

    start: function () {

        self = this;
        self.loaded = false;

        var el = document.createElement("script");
        el.src = "https://www.youtube.com/iframe_api";

        el.onload = function() {
            self.loaded = true;
            setTimeout(function() {
                console.log("MMM-RandomYTPlayer: Video wrapper created!!!");
                var wrapper = document.getElementById(self.identifier + "_wrapper"),
                playerDiv = document.createElement("div");
                wrapper.innerHTML = "";
                wrapper.className = "";
                playerDiv.id = "YT_Player";
                wrapper.appendChild(playerDiv);

                self.player = new YT.Player("YT_Player", {
                    height: self.config.height,
                    width: self.config.width,
                    playerVars: {
                        listType: "playlist",
                        list: self.config.list,
                        showinfo: self.config.showinfo,
                        autoplay: self.config.autoplay,
                        enablejsapi: self.config.enablejsapi,
                        modestbranding: self.config.modestbranding,
                        rel: self.config.rel,
                        controls: self.config.controls,
                        fs: self.config.fs,
                        cc_load_policy: self.config.cc_load_policy,
                        loop: self.config.loop,
                    },
                    events: {
                        onReady: self.onPlayerReady,
                    },
                    
                });
            }, 2000);
        };
        document.querySelector("body").appendChild(el);
    },
    getDom: function() {
        var self = this;
        var wrapper = document.createElement("div");
        wrapper.id = self.identifier + "_wrapper";
        if (!self.loaded) {
            wrapper.innerHTML = this.translate("MMM-RandomYouTubePlayer is Loading.");
            wrapper.className = "normal regular medium";
            return wrapper;
        }
        return wrapper;
    },

    onPlayerReady: function(event) {
        console.log(event.data);
        var listArray = self.player.getPlaylist();
        var arrayLength = listArray.length;
        var index = Math.floor(Math.random() * arrayLength);
        event.target.setShuffle(true);
        event.target.playVideoAt(index);
    }
});