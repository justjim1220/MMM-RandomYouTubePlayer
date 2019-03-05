# Module: MMM-RandomYouTubePlayer...

The MMM-RandomYouTubePlayer module is a 3rd party module of the <a href=https://github.com/MichMich/MagicMirror/tree/developMagicMirror>MagicMirror</a>
This module loads a YouTube player and a specified playlist and will randomize the videos.

## Using the module...

To use this module, add it to the modules array in the 'config/config.js' file:
```
modules: [
	{
	module: "MMM-RandomYouTubePlayer", 
	position: "top_center",	      // This can be any of the regions...
	config: {
	    playlistId: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",     // See Configuration Options below...
            height: 480,
            width: 720,
	    }
	},
]
```

## Install...
```
cd ~/MagicMirror/modules
git clone https://github.com/justjim1220/MMM-RandomYouTubePlayer.git
```

## Optional parameters: (defaults for the player as is. change per your needs...)
```
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
```

## Configuration Options...
The following properties NEED to be configured:

| Config                | Description
| --------------------- | ---------------------------------------------------------------------
| playlistId: " "      | Youtube playlist id to display. You can get it from youtube url <br> **Example:** https://www.youtube.com/playlist?list=PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW <br>**playlistId:** PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW (playlist always starts with PL)
| width: 480            | YT player width <br> **size in pixels per your need**
| height: 700           | YT player height <br> **size in pixels per your need**

## Optional Configuration Options...
The following properties CAN be configured:

| Option                | Description
| -----------------     | ---------------------------------------------------------------------
| autoplay: true        | Autoplays video when it loaded <br> **true OR false**
| volume: 75%:          | Sets the volume at a certain level when starting <br> **1 to 100 %**
| color: "red"          | Player's video progress bar - color can only be "red" or "white <br> **red or white**
| controls: true        | Show youtube video controls bar <br> **true OR false**
| enablejsapi: true     | Enables the player to be controlled via IFrame API calls. <br> **true OR false**
| disablekb:            | Disables keyboard control <br> **true OR false**
| fs: false             | Displays the fullscreen button in player <br> **true OR false**
| loop: true            | Auto-replays video again <br> **true OR false**
| cc_load_policy: true  | Displays captions if available for the video playing <br> **true OR false**
| modestbranding: false | Prevents the Youtube logo from displaying in the controlbar. <br> **true OR false**
| rel: true             | Shows related videos at the end of video <br> **true OR false**
| showinfo: true        | Shows video title and uploader <br> **true OR false**

## Screenshots...

On my TODO list...

## Known issues...

ONE... Player will only show a max of 200 videos loaded, but it will shuffle through the full playlist.
My current playlist has approx. 1600 videos, and it shuffles through them all.

TWO... Player will shuffle the videos, but you will get repeats. (still working on this)

## Acknowledgements...
I used code snippets from the MMM-EmbedYouTube module by @nitpum <br>
And from the MMM-YouTube-API by @C4TFLY <br> 
Thanks to them for giving me the snippets I needed to get started on this module!!! <br>
And, I added my own snippets to complete the project! <br>
<br>
I also want to thank @cowboysdude and @Mykle for their help as well! You guys are Awesome!!!
