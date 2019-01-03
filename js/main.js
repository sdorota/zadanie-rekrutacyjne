$(document).ready(function(){

    $("sendButton").click(function () {

        var videoID = $(this).attr("id");

        $(this).animate({ 
        width: "445px",
        height: "364px"
        }, 600, function() { 

            $(this).replaceWith("<object id=\"" + videoID + "\" class=\"yt\" width=\"425\" height=\"344\"><param name=\"movie\" value=\"http://www.youtube.com/v/" + videoID + "&hl=en&fs=1&color1=0x3a3a3a&color2=0x999999\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param><embed src=\"http://www.youtube.com/v/" + videoID + "&hl=en&fs=1&color1=0x3a3a3a&color2=0x999999\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"425\" height=\"344\"></embed></object><span class=\"close\"><a href=\"#\">x</a></span>");
        });
    });

});

//   var tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/player_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   var videoId = document.getElementById("movieID").value;
//   var player;
//   function onYouTubePlayerAPIReady() {
//     player = new YT.Player('ytplayer', {
//       height: '360',
//       width: '640',
//       videoId: 'M7lc1UVf-VE'
//     });
//   }

