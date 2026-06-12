//script principal

const { sleep } = require('./utils');
const { Musica } = require('./musica');
const { Parte } = require('./parte');

const boompala = new Musica('BOOMPALA', 'LE SSERAFIM');
const macarena1 = `Dale a tu cuerpo alegría, Macarena \n Que tu cuerpo es pa' darle alegría y cosa buena`;
const macarena2 = `Dale a tu cuerpo alegría, Macarena \n Eh, Macarena (¡ay!)`;
const sserafimBaby = `SSERAFIM, baby \n boompala`;
const boompala2 = `Uh, boompala, boompala, boompala, ayy \n Uh, boompala, boompala, boompala, ayy`;
const youCantHoldOn = `You can't hold on to the clouds in the air \n Uh, boompala, boompala, boompala, ayy`;
const wakeUpsayin = `Wake up sayin' hi to the mirror \n Tryna find the light where the fear were`;
const babySayGoodbye = `Baby, say goodbye if you see her \n She's only an illusion, don't feed her`;
const beatinUpAll = `Beatin' up all inner drama \n Savin' the shame for mañana`;
const pauseForASecond = `Pause for a second, like, comma \n Put the fear to bed, pajama`;
const nothingsForever = `Nothing's forever so nothing's to fear \n Uh, boompala, boompala, boompala, ayy`;
const onMyChest1 = `On my chest, on my heart, I'm drumming \n Only loving on myself, I'm coming`;
const myCelestial1 = `My celestial chakra is stunning \n Namaste, namaste, I'ma stay up`;
const onMyChest2 = `On my chest, on my heart, I'm drumming \n Only betting on myself, I run it`;
const myCelestial2 = `My celestial chakra is stunning \n One, two, three, bye-bye`;
const holdinOnToo = `Holdin' on too tight, gotta let it flow \n Feelin' like a wave in the undertow`;
const permanentIs = `Permanent is something that I'm lettin' go \n I gotta let it go, yeah`;
const imGoing = `I'm goin', goin', goin', goin', goin', goin' crazy, yeah \n I couldn't be more in touch if you paid me`;
const selflove = `Self-love is the mommy, I'm the baby \n Zen out, meditate on the daily`;
const everythingsWater = `Everything's water and everything's air`;
const boompala1 = `Uh, boompala, boompala, boompala, ayy`;
const everythingsEmpty = `Everything's empty so everything's clear`;

//verificar partes faltantes e criar.
//começa a adicionar as partes da música, com letra, tempo e tag1
function estrofeMacarena(){  
    boompala.addParte(
        new Parte(macarena1, 7000, 'verso1')
    );
    boompala.addParte(
        new Parte(macarena2, 5000, 'verso2')
    );
}
estrofeMacarena();
// silêncio de 3s
boompala.addParte(
    new Parte (sserafimBaby, 8000, 'verso3')
)
function refrao(){
    boompala.addParte(
        new Parte (boompala2, 4000, 'verso4')
    )
    boompala.addParte(
        new Parte (youCantHoldOn, 5000, 'verso5')
    )
}
refrao();
boompala.addParte(
    new Parte (wakeUpsayin, 5000, 'verso6')
)
boompala.addParte(
    new Parte (babySayGoodbye, 4000, 'verso7')
)
boompala.addParte(
    new Parte (beatinUpAll, 5000, 'verso8')
)
boompala.addParte(
    new Parte (pauseForASecond, 3000, 'verso9') //46
)
refrao();

async function play() {
    try {
        // para cada parte da música, deve imprimir qual parte é, letra e pausar o tempo necessário
        //ex.:
        for (const parte of boompala.partes) {
            //imprime parte e letra
            console.log( " -- " + parte.tag + " --" );
            console.log( "> " + parte.letra );
            //agurda o tempo para a letra
            await sleep( parte.tempoEspera );
        }
    } catch (error) {
        console.log("Erro ao tocar música: " + error.message);
    }
}


play();
