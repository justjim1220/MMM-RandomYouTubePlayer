# Module: MMM-RandomYouTubePlayer...

The MMM-RandomYouTubePlayer module is a 3rd party module of the <a href=https://github.com/MichMich/MagicMirror/tree/developMagicMirror>MagicMirror</a>
This module loads a YouTube player and a specified playlist and will randomize the videos.

## Using the module...

To use this module, add it to the modules array in the 'config/config.js' file:
```
modules: [
	module: "MMM-RandomYouTubePlayer",
			header: "Just Jim's Faves...",
			position: "top_center",
			config: {
				listType: "playlist",
				list: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",
				cc_load_policy: "true",
				color: "red",
				controls: "true",
				disablekb: "0",
				enablejsapi: "true",
				fs: "false",
				iv_load_policy: "1",
				modestbranding: "true",
				showinfo: "true",
				rel: "false",
				volume: "100",
				height: "394",
				width: "700",
				autoplay: "true",
				loop: "true"
			}
		},

]
```

## Install...
```
cd ~/MagicMirror/modules
git clone https://github.com/justjim1220/MMM-RandomYouTubePlayer.git
cd MMM-RandomYouTubePlayer
npm install
```

## Optional parameters: (defaults for the player as is. change per your needs...)
```
listType: "playlist",
// playlist ID is found in the URL on YouTube:
// https://www.youtube.com/playlist?list=PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW
// whereas "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW" is the 'list' you need to replace below
list: "PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW",
cc_load_policy: "true", // shows or hides closed captions if available
color: "red", // shows status bar color on the player, "red" or "white"
controls: "true", // shows or hides the player controls
disablekb: "0", // Enables the player to be controlled via IFrame API calls
enablejsapi: "true", // enables the help and use of the js api
fs: "false", // enables or disables the fullscreen player
iv_load_policy: "1", // shows or hides video annotations
modestbranding: "true", // shows or hides the YouTube logo on the player
showinfo: "true", // shows or hides the video's information
rel: "false", // shows or hides related videos at end of video
volume: "100", // percentage of starting sound 0-100
height: "394", // specified in pixels (px)
width: "700", // specified in pixels (px)
autoplay: "true", // to automatically play when player gets loaded
loop: "true" // to replay the playlist continuously
```

## Configuration Options...
The following properties NEED to be configured:

| Config                   | Description
| ------------------------ | ---------------------------------------------------------------------------------------
| listType: "playlist"     | determines the type of list to cue
| playlist_ID: " "         | Youtube playlist id to display. You can get it from youtube url <br> **Example:** https://www.youtube.com/playlist?list=PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW <br>**playlist id:** PLl_KM23gznEAZW-INW8ty4QNaHH8JCnNW (playlist always starts with PL)
| width: "394"             | YT player width <br> **size in pixels per your need**
| height: "700"            | YT player height <br> **size in pixels per your need**

## Optional Configuration Options...
The following properties CAN be configured:

| Option                   | Description
| ------------------------ | -------------------------------------------------------------------------------------
| autoplay: "true"         | Autoplays video when it loaded <br> **true OR false**
| volume: "75%"            | Sets the volume at a certain level when starting <br> **1 to 100 %**
| color: "red"             | Player's video progress bar - color can only be "red" or "white <br> **red or white**
| controls: "true"         | Show youtube video controls bar <br> **true OR false**
| enablejsapi: "true"      | Enables the player to be controlled via IFrame API calls. <br> **true OR false**
| disablekb: "0"           | Disables keyboard control <br> **true (1) OR false (0)**
| iv_load_policy: "1"      | Shows or hides video annotations <br> **1 OR 3**
| fs: "false"              | Displays the fullscreen button in player <br> **true OR false**
| loop: "true"             | Auto-replays video again <br> **true OR false**
| cc_load_policy: "true"   | Displays captions if available for the video playing <br> **true OR false**
| modestbranding: "false"  | Prevents the Youtube logo from displaying in the controlbar. <br> **true OR false**
| rel: "false"             | Shows related videos at the end of video <br> **true OR false**
| showinfo: "true"         | Shows video title and uploader <br> **true OR false**

## Screenshots...

On my TODO list...

## Known issues...

ONE... Player will only show a max of 200 videos loaded, but it will shuffle through the full playlist.
My current playlist has approx. 1600 videos, and it shuffles through them all.

TWO... Player will shuffle the videos, but you will get repeats. (still working on this)

THREE... Player will always start with the first video in the Playlist, But will shuffle and play at random thereafter.

## Acknowledgements...
I used code snippets from the MMM-EmbedYouTube module by @nitpum <br>
And from the MMM-YouTube-API by @C4TFLY <br> 
Thanks to them for giving me the snippets I needed to get started on this module!!! <br>
And, I added my own snippets to complete the project! <br>
<br>
I also want to thank @cowboysdude and @Mykle for their help as well! You guys are Awesome!!! <br>
<br>**And a huge, huge, HUGE THANKS!!!! goes out to @asimhsidd for his collaboration, hints, and pointers!!!
<br><i>(Dude, you saved me from some major headaches!!!)</br></i>
