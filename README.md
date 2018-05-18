# Module: MMM-RandomYouTubePlayer

The MMM-RandomYouTubePlayer module is a 3rd party module of the MagicMirror. 
This module loads a YouTube player and a specified playlist and will randomize the videos.

## Using the module

To use this module, add it to the modules array in the 'config/config.js' file:
```
modules: [
	{
	module: "MMM-RandomYoutubePlayer", 
	position: "top_center",	      // This can be any of the regions...
	config: {
	    playlistId: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",     // See Configuration Options below...
            height: 480,
            width: 720,
	    }
	}
]
```
	
Optional parameters: (defaults for the player as is. change per your needs...)

autoplay: true,
disablekb: true,
enablejsapi: true,
color: "red",
fs: false, 
volume: "100%",
cc_load_policy: true,
controls: false,
showinfo: false, 
rel: false, 
modestbranding: true,
loop: true,

## Configuration Options...
The following properties NEED to be configured:

| Config                | Description
| --------------------- | ---------------------------------------------------------------------
| playlist_ID: " "      | Youtube playlist id to display. You can get it from youtube url <br> **Example:** https://www.youtube.com/playlist?list=PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW <br>**playlist id:** PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW (playlist always starts with PL)
| width: 480            | YT player width <br> **size in pixels per your need**
| height: 700           | YT player height <br> **size in pixels per your need**

## Optional Configuration Options...
The following properties CAN be configured:

| Option                | Description
| -----------------     | ---------------------------------------------------------------------
| autoplay: true        | Autoplay video when it loaded <br> **true OR false**
| volume: true:         |  <br> **true OR false**
| color: "red"          | Player's video progress bar - color can only be "red" or "white <br> **red or white**
| controls: true        | Show youtube video controls bar <br> **true OR false**
| enablejsapi: true     |  <br> **true OR false**
| disablekb:            | Disables keyboard control <br> **true OR false**
| fs: false             | Displays the fullscreen button in player <br> **true OR false**
| loop: true            | Auto-play video again <br> **true OR false**
| cc_load_policy: true  | Displays captions if available for the video playing <br> **true OR false**
| modestbranding: false | Prevent the Youtube logo displaying in the controlbar. <br> **true OR false**
| rel: true             | Show related video at the end of video <br> **true OR false**
| showinfo: true        | Show video title and uploader <br> **true OR false**

