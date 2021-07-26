const lyrics = ["My heart's been borrowed and yours has been blue / All's well that ends well to end up with you",
                "I once believed love would be burning red / But it's golden",
                "I'd like to be my old self again, but I'm still trying to find it",
                "Barefoot in the kitchen, sacred new beginnings / That became my religion, listen",
                "There'll be happiness after you / But there was happiness because of you / Both of these things can be true",
                "You call me up again / Just to break me like a promise / So casually cruel in the name of being honest",
                "And you understand now why they lost their minds and fought the wars / And why I’ve spent my whole life trying to put it into words",
                "Long live all the mountains we moved / I had the time of my life / Fighting dragons with you",
                "You booked the night train for a reason / So you could sit there in this hurt",
                "Long story short, I survived"
];

document.getElementById("click-here").addEventListener("click",
 function songLyric() {
  for (let i = lyrics.length -1; i > 0; i--) {
   let j = Math.floor(Math.random() * i)
   let k = lyrics[i]
   lyrics[i] = lyrics[j]
   lyrics[j] = k
  }
  console.log(songLyric);
  document.getElementById("swift-song").innerHTML = lyrics[0];
 }, false
);