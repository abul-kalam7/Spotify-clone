console.log('Lets write JavaScript');
 
const playHTML =  ` <div class="play">
              <svg width="20" height="20 n" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
            </div>`;

            document.querySelectorAll(".card").forEach( card =>{
            card.insertAdjacentHTML('beforeend', playHTML)
           })

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}

async function main() {
    let songs = await getSongs();
    console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        
        
                <img class="invert" src="img/music.svg" alt="" srcset="">
                <div class="info">
                  <div> ${song.replaceAll("%20", " ")}</div>
                  <div>Song Artist</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                  <img class="invert" src="img/play.svg" alt="" srcset="">
                  
                </div>
             
        
        
        
        
        </li>`;
    }
    
}
main() 