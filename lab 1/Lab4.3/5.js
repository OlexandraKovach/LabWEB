let mood = [
    { 
        mood:"Веселий",
        url:"https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png "
    },
    {
       mood:"Сумний",
       url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png "
    }
]

document.getElementById("number").onchange = () =>
{
    let Mood = document.getElementById("number").value
    document.getElementById("img").innerHTML = `<img src="${mood[Mood-1].url}">`
}