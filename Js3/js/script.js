const result = document.querySelector('#resultFirstExecise')

const result2 = document.querySelector('#resultSecondExecise')

const result3 = document.querySelector('#resultThirdExecise')

const result4 = document.querySelector('#resultFourthExecise')

const result5 = document.querySelector('#resultFifthExecise')

const result6 = document.querySelector('#resultSixthExecise')

const result7 = document.querySelector('#resultSeventhExecise')

const result8 = document.querySelector('#resultEigthExecise')

const result9 = document.querySelector('#resultNinthExecise')

function sumArray(arg1) {
    var a = 0;
    arg1.forEach(element => {a = a + element});   
    return a.toString()
}

result.textContent=sumArray([4,6,16,73,5])

function getAboveZero(arg1) {
    let getAboveZero1 = arg1.filter(function(number) {
        return number > 0
    })
    return getAboveZero1.toString();
}

result2.textContent=getAboveZero([1,-3,-2,4,10])

function getPonies(arg1, arg2) {
    let getAboveZero1 = arg1.find(function(number) {
        return number == arg2
    })
    return getAboveZero1.toString();
}

result3.textContent=(getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack','Rarity', 'Pinkie Pie', 'Fluttershy'],
    'AppleJack'))

function isTxIncluded(arg1, arg2) {
    return arg1.includes(arg2)
}

result4.textContent=isTxIncluded(["0xaea0","0x8f80", "0xf3ad", "0x17ec"],"0x9e0a")

function getSizes(arg1) {
    return arg1.map(function(number) {
        return number.length
    })
}

result5.textContent=getSizes(["Moscow","Coding","School"])

function getWithSpaces(arg1) {
    let a = sumArray(getSizes(arg1));
    let b = [];
    b[0] = arg1.join(" ");
    b[1] = a;
    return b
}

result6.textContent=getWithSpaces(["Moscow","Never","Sleep"])

function getEpisodes(arg1) {
    return `Аниме ${arg1.title} включает ${arg1.episodes} серий`
}

result7.textContent=getEpisodes({title:"Code Geass", episodes: 25})

const triple = (arg1) => {
    return arg1*3
}

result8.textContent = triple(2);

const getAvgGlucose = (arg1) => {
    return Math.round(sumArray(arg1)/arg1.length*10)/10
}

result9.textContent = getAvgGlucose([5.4, 8.1, 6.3, 4.9]) 