
let juke = document.querySelector('#juke');


const music = {
    pop: [
        {
            artist: "Ariana Grande",
            song: "Positions",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/4b/46/1e/4b461ecb-6e26-cc80-0a11-e61a008e7363/mzaf_18287149748935113510.plus.aac.p.m4a"
        },
        {
            artist: "Kid Laroi",
            song: "Stay",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c2/73/76/c27376ee-77bf-4408-fa67-49d66cf578df/mzaf_14194545279247312737.plus.aac.p.m4a"
        },
        {
            artist: "Justin Bieber",
            song: "Ghost",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f1/c6/4d/f1c64de7-f813-6d3a-abf3-d980882070ab/mzaf_12341366234979933796.plus.aac.p.m4a"
        },
        {
            artist: "Maroon 5",
            song: "Daylight",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/14/04/c8/1404c885-be96-ff63-46d4-489e9f9846bb/mzaf_8446252306743678587.plus.aac.p.m4a"
        },
        {
            artist: "Adele",
            song: "Water Under the Bridge",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/aa/d6/f8/aad6f877-8900-84aa-628f-692607665495/mzaf_16143436458520831241.plus.aac.p.m4a"
        },
        {
            artist: "Olivia Rodrigo",
            song: "Favorite Crime",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1a/b7/45/1ab7459d-cb7a-57b6-28a9-861e0916efb1/mzaf_7708913053635343801.plus.aac.p.m4a"
        },
        {
            artist: "Taylor Swift",
            song: "I Did Something Bad",
            url: " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ea/40/d4/ea40d452-1b60-5ac8-b04d-fa818f361b12/mzaf_15171648957195629825.plus.aac.p.m4a"
        },
        {
            artist: "Arctic Monkeys",
            song: "Do I Wanna Know?",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/db/17/c8/db17c8b1-b82a-396f-b642-b851795d964c/mzaf_7008457994754977918.plus.aac.p.m4a"
        },
        {
            artist: "Dua Lipa",
            song: "Levitating",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/c4/de/a4/c4dea463-eb97-fb07-50d3-6a2ee330627d/mzaf_17295419310919907918.plus.aac.p.m4a"
        },
        {
            artist: "Doja Cat",
            song: "Kiss Me More",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/1f/08/ae/1f08ae82-c226-2895-ff8f-07ce401a9be6/mzaf_1312196870707838526.plus.aac.p.m4a"
        },
        {
            artist: "Lizzo",
            song: "Good As Hell",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b3/2a/66/b32a6623-2e31-9d64-1db8-1233dae36105/mzaf_3281102179733296457.plus.aac.p.m4a"
        },
        {
            artist: "Post Malone",
            song: "Circles",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/5a/44/7d/5a447de0-495f-f546-ed92-37727744dad4/mzaf_7023149222437161687.plus.aac.p.m4a"
        },
        {
            artist: "Billie Eilish",
            song: "Happier Than Ever",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d6/6f/58/d66f58c4-50ad-4978-971c-b19c022a440b/mzaf_3392528453380582564.plus.aac.p.m4a"
        },
        {
            artist: "Normani",
            song: "Motivation",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/45/bf/ec/45bfec29-48b8-a6c8-6b40-205c50324fcd/mzaf_16727115048569432772.plus.aac.p.m4a"
        },
        {
            artist: "Frank Ocean",
            song: "Lost",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/04/d7/ab/04d7abc5-358b-eac3-da65-8ab33042aaaa/mzaf_3819037996539775303.plus.aac.p.m4a"
        },
        {
            artist: "Paloma Faith",
            song: "Only Love Can Hurt Like This",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/46/1a/0e/461a0ee9-e017-e44a-d27b-219e12eb7b31/mzaf_7254219147230659225.plus.aac.p.m4a"
        },
        {
            artist: "HRVY",
            song: "Personal",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/79/a8/4e/79a84e0a-2010-a808-6e37-47de8c1d9e8a/mzaf_13467990634414067380.plus.aac.p.m4a"
        },
        {
            artist: "Bruno Mars",
            song: "Leave The Door Open",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/41/e6/29/41e629b3-44fc-7f0d-e292-060c4e98187c/mzaf_13613096699867304011.plus.aac.p.m4a"
        },
        {
            artist: "Chloe",
            song: "Have Mercy",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/ce/07/47ce07d5-8611-54fc-418b-13151f6f48f7/mzaf_2017293278362012141.plus.aac.p.m4a"
        },
        {
            artist: "Zendaya & Zac Efron",
            song: "Rewrite The Stars",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fe/8d/82/fe8d829d-9f61-48de-a745-2739a339ee8f/mzaf_1393965076044991071.plus.aac.p.m4a"
        },
        {
            artist: "Drake",
            song: "Take Care",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/58/ad/51/58ad51ab-f8b1-d780-adcd-c4fd999786bc/mzaf_10001172154329955832.plus.aac.p.m4a"
        },
        {
            artist: "5SOS",
            song: "Don't Stop",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/16/fd/02/16fd02c1-47ea-2ca4-4bfe-ab4424da8a3b/mzaf_638908834579621831.plus.aac.p.m4a"
        },
        {
            artist: "Paramore",
            song: "Misery Business",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/60/73/a2/6073a215-21a6-2841-b0bc-758e6b1caf33/mzaf_11620530201984077029.plus.aac.p.m4a"
        },
        {
            artist: "Camila Cabello",
            song: "Bam Bam",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/12/3e/6c/123e6cbd-db27-3b38-464b-a66853cf5828/mzaf_15549270629484795328.plus.aac.p.m4a"
        },
        {
            artist: "Beyonce",
            song: "Drunk in Love",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/62/b8/3d/62b83d23-76b2-e662-3a05-0e7e9a8c1859/mzaf_17923547908440223776.plus.aac.p.m4a"
        },
        {
            artist: "Blackpink",
            song: "Hope Not",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/10/02/47/1002472b-7cc1-b058-e3bd-13397c77b2c2/mzaf_3812734250921463293.plus.aac.p.m4a"
        },
        {
            artist: "LISA",
            song: "Money",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/03/59/82/035982a5-020d-dadd-28f1-3a8edbe351a2/mzaf_16817159732592863141.plus.aac.p.m4a"
        },
        {
            artist: "Jennie",
            song: "SOLO",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/07/2d/78/072d781a-cc43-ed37-71b0-05024934e765/mzaf_10147715758979437465.plus.aac.p.m4a"
        },
        {
            artist: "Fall out Boy",
            song: "Centuries",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5f/0e/af/5f0eaf98-6ff5-198a-9072-6ea6926bf1f5/mzaf_15335856401957582795.plus.aac.p.m4a"
        },
        {
            artist: "Taeyang",
            song: "Wedding Dress",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/c7/89/0fc78963-f2b5-d1eb-97a5-ec614665feee/mzaf_6939451434371227722.plus.aac.p.m4a"
        },
        {
            artist: "Fifth Harmony",
            song: "Work From Home",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/01/c6/f3/01c6f3a9-3fa2-a3b0-a4c5-f7dd413e93c7/mzaf_16146462595782401074.plus.aac.p.m4a"
        },
        {
            artist: "Shawn Mendes & Camila Cabello",
            song: "Senorita",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/b1/e7/40b1e737-af42-95da-af00-a186ea92e93e/mzaf_9059128553570340657.plus.aac.p.m4a"
        },
        {
            artist: "Ariana Grande",
            song: "One Last Time",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/64/a2/d4/64a2d4ea-e638-0dd3-58e4-7c394734e0ea/mzaf_14021780212720445574.plus.aac.p.m4a"
        },
        {
            artist: "Ariana Grande",
            song: "The Way",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0b/4c/8a/0b4c8a91-69c6-6394-2cc2-c7dfa8ee0420/mzaf_11296310706148707296.plus.aac.p.m4a"
        },
        {
            artist: "BTS",
            song: "Fake Love",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d8/bb/b4/d8bbb4de-a5de-c1ca-2821-675105a5c9f0/mzaf_15329193825294067514.plus.aac.p.m4a"
        },
        {
            artist: "BTS",
            song: "Dynamite",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/f1/26/86/f126864f-7a17-432a-6434-83f12e6632a2/mzaf_4574238385595157992.plus.aac.p.m4a"
        },
        {
            artist: "Lemonade Mouth",
            song: "Determinate",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9b/e9/2a/9be92a14-cd81-19b7-65c4-3f6fa0124885/mzaf_787367204489114318.plus.aac.p.m4a"
        },
        {
            artist: "Maroon 5",
            song: "Sugar",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4e/08/33/4e083355-bf41-9bea-1649-aecf68ab714e/mzaf_9913929852186132997.plus.aac.p.m4a"
        },
        {
            artist: "Drake",
            song: "Headlines",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7d/8d/ef/7d8def46-edbc-e2e6-12d0-322c8f0993a6/mzaf_300727651408745133.plus.aac.p.m4a"
        },
        {
            artist: "Neyo",
            song: "Miss Independent",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/69/09/1c/69091c1f-8880-2861-26f1-ca690f8034ea/mzaf_1746161769152968298.plus.aac.p.m4a"
        },
        {
            artist: "iKon",
            song: "Love Scenario",
            url: " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/51/f9/0f/51f90f28-cf43-2e5f-efc0-b9efa89006a6/mzaf_11692268688381106180.plus.aac.p.m4a"
        },
        {
            artist: "A-Wall",
            song: "Loverboy",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f8/6d/83/f86d83de-4fa6-3f02-c1e7-b443c362d5b0/mzaf_16014994193129249386.plus.aac.p.m4a"
        },
        {
            artist: "Zayn & Taylor Swift",
            song: "I Don't Wanna Love Forever",
            url: " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ea/2d/7c/ea2d7c72-abae-e123-f1c6-4a5f41096843/mzaf_428598420597401683.plus.aac.p.m4a"
        },
        {
            artist: "Panic! at the Disco",
            song: "Nine In the Afternoon",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bb/1f/f3/bb1ff37a-6330-d3ab-f076-ff4208631493/mzaf_9615577773614087529.plus.aac.p.m4a"
        },
        {
            artist: "Panic! at the Disco",
            song: "I Write Sins Not Tragedies",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/c1/13/91c11394-7357-5807-bd99-b3109eaf43bc/mzaf_9003654864131597490.plus.aac.p.m4a"
        },
        {
            artist: "BlackPink",
            song: "Pretty Savage",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0e/30/ef/0e30efd6-cec1-5eed-cc9e-59b8bcfa8123/mzaf_8798171934980781478.plus.aac.p.m4a"
        },
        {
            artist: "Sam Smith",
            song: "Stay With Me",
            url: " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/90/0c/2a/900c2a77-b7ce-0896-7aca-f38d16d51dfe/mzaf_10157501413144083336.plus.aac.p.m4a"
        },
        {
            artist: "Kelly Clarkson",
            song: "My Life Would Suck Without You",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/94/52/15/9452150e-7bd2-cf87-f703-28b26ae561b9/mzaf_10202904272777292673.plus.aac.p.m4a"
        },
        {
            artist: "One Direction",
            song: "Perfect",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7c/f2/28/7cf228eb-3d7e-63b6-866e-02046ac0287b/mzaf_6967391765231745117.plus.aac.p.m4a"
        },
        {
            artist: "Ed Sheeran",
            song: "Lego House",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e6/15/11/e61511af-0fc9-d164-4ce8-a804162d1d23/mzaf_120390265874883412.plus.aac.p.m4a"
        },
        {
            artist: "Taylor Swift",
            song: "Mine",
            url: " https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d2/48/c3/d248c39d-2e1b-c0d6-4a20-2abe33c36cf5/mzaf_12878555343665947075.plus.aac.p.m4a"
        },
        {
            artist: "Taylor Swift",
            song: "Crazier",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cd/fb/e6/cdfbe61a-5271-1108-f68e-aa04dda69cb5/mzaf_3627915187491597976.plus.aac.p.m4a"
        },
        {
            artist: "Taylor Swift",
            song: "Love Story",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ff/71/db/ff71db4b-d274-3c59-33ba-30457e5e2a42/mzaf_14476080943421271519.plus.aac.p.m4a"
        },
        {
            artist: "Miley Cyrus",
            song: "See you Again",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e3/7f/ec/e37fec48-d12b-96b7-bc91-d0426244b77b/mzaf_16297839925461662063.plus.aac.p.m4a"
        },
        
        {
            artist: "Taylor Swift",
            song: "Love Story",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ff/71/db/ff71db4b-d274-3c59-33ba-30457e5e2a42/mzaf_14476080943421271519.plus.aac.p.m4a"
        },
        
        {
            artist: "Olivia Rodrigo",
            song: "Traitor",
            url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3f/bd/25/3fbd25f6-84a6-b3cb-07a1-882a930abd86/mzaf_4307700299818065502.plus.aac.p.m4a"
        },
        
        
    ]
}

var allTracks = [];
for (var i = 0; i < music.pop.length; i++) {
    var track = music.pop[i].song;
    allTracks.push(track);
}


//prevent same number being picked again

var temp = [];
var curTitle = "";
var pick;
var setCounter = 0; 
var firstSet = false; 
var score = 0;
let bg = document.querySelector('#bg');
let outer = document.querySelector("#outer");

function player() {
    setCounter++; 

    if (setCounter > 1) {
        document.getElementById("start").disabled = false;
    } 
    
    if (setCounter == 16) {
        showStats();
    } else {

    pick = Math.floor(Math.random() * music.pop.length);
    //console.log(pick);


    let tune = music.pop[pick].url;
    curTitle = music.pop[pick].song;

    juke.innerHTML = "";
    juke.innerHTML = "<audio id='musicPlayer' crossOrigin='anonymous' src=" + tune + " type='audio/m4a'></audio>";
    juke.innerHTML += "<button id='playbtn' onclick='play()'>Play</button>";
    juke.innerHTML += "<button id='pausebtn' onclick='pause()'>Pause</button>";


    var rem = music.pop.splice(pick, 1);
    //console.log(music.pop.length);
    temp.push(rem);

    //console.log("rem length");
    for (var i = 0; i < temp.length; i++) {
        console.log(temp[i]);
    }
    selections();
    }
}


var temp2 = []; // numbers 
var opts = []; // songs using all tracks 


function selections() {
    opts = [];
    for (var i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * allTracks.length);
        //console.log(allTracks[random]);

        if (allTracks[random] == curTitle) {
            i--; 
        } else {
            opts[i] = allTracks[random];
            var rem2 = allTracks.splice(random, 1);
            temp2.push(rem2);
        }
    }
    opts.push(curTitle);
    opts.sort();



    let buildList = document.querySelector('#userInput');
    buildList.length = 0;
    buildList.innerHTML = "<option disabled selected value>-- select an option --</option>";

    for (var i = 0; i < opts.length; i++) {
        buildList.innerHTML += "<option value=" + i + ">" + opts[i] + "</option>";
    }


    console.log(buildList.length);
    console.log(opts.length);

}



function compare() {
    let answer = document.querySelector('#userInput');
    var output = answer.options[answer.selectedIndex].value;
    let reaction = document.querySelector('#response');
    
    
    //console.log("answer " + answer);
    //console.log("output " + output);
    
    if (opts[output] == curTitle) {
        console.log("correct");
        //reaction.innerHTML = "correct";
        bg.style.backgroundColor = "green";
        outer.style.backgroundColor = "green";
        score++;
        console.log("score " + score);
        player(); 
    } else {
       // reaction.innerHTML = "Wrong";
       bg.style.backgroundColor = "red";
       outer.style.backgroundColor = "red";
        console.log("wrong");
        player();
    
    }

} // compare

function showStats() {
    
    console.log("in stat");
    //let outer = document.querySelector("#outer");
    bg.style.backgroundColor = "#3356c2";
    outer.style.backgroundColor = "#3356c2";

    var msg = document.querySelector('#msg');
    var theScore = document.querySelector('#theScore');
    msg.innerHTML = "Your Score";
    theScore.innerHTML = score + "/15";

    outer.innerHTML += "<div id='backdiv'><button id='back' onclick='reopen()'>Try Again</button></div>";


}

function reopen() {
    window.location.href='game.html'
}


function play() {
    bg.style.backgroundColor = "#5c55b4";
    //console.log("change color");
    outer.style.backgroundColor = "#5c55b4";
    document.getElementById('musicPlayer').play();
    
}



function pause() {
    document.getElementById('musicPlayer').pause();
}




