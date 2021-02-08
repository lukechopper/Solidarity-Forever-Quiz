//Opening
let firstContainer = $("#first-container");
let logo = $("#logo");
let startBtn = $("#start-btn");
//Video
let theVideo = document.getElementById("video");
let secondContainer = $("#second-container");
let beginBtn = $("#begin-btn");

//Quiz
let thirdContainer = $("#third-container");
let headerQ = $("#header-q");
let qQ = $("#q-q");
let bTO = $("#bt-o");
let bTT = $("#bt-t");
let bTF = $("#bt-f");

//Questions
let questionStack = ["Rockefeller created ‘Trilateral Commission’ described the popular social movements of the 60s as a ‘crisis of democracy’, they said that it led to ‘excess democracy’ that needed to be dealt with.",
"In the Theory of Moral Sentiments Adam Smith (the father of economics) wrote about how empathy has intrinsic to the human species. Thorstein Veblen wrote about ‘conspicuous consumption’ and how the functioning’s of a capitalist system has perverted the human psyche to be materialistic and attracted to the superfluous.",
"In 2007 just before the financial crash, Wall Street shared 40% of all corporate profits in the US.",
"In Aristotle’s Politics, Book III, chapter 8. He postulated that a true democracy would result in socialism because the poor majority would have the democratic means to take away the property of the rich.",
"Historically unions were very effective in achieving labour rights such as the 8-hour day and scrapping child labour. The UK Government deprived workers of the right to strike in 1992.",
"For Thatcher, having no society only individuals were an ideal. For Marx it was a criticism, as it would turn people into ‘sacks of potatoes’ who have no means of influencing policy.",
"Thatcher labelled the 1984 strikers as ‘the enemy within’. Despite this she undemocratically crushed them and used Soviet like secret police to infiltrate and weaken them from the inside.",
"Neo-liberalism is founded on the idea that citizens should be turned into consumers instead of being active participants in a democratic society. Lassie faire markets is inimical to human nature because it is linked to higher depression, eating disorders, deaths of despair and addiction.",
"Founding father James Madison revealed that the role of Government is to ‘protect the minority of the opulent against the majority’.",
"Economist Alan Greenspan said that Federal Reserve policy is designed to promote worker insecurity because the higher insecurity, the more you can get away with paying workers lower wages.",
"Writer of famous anti-Soviet books Animal Farm and 1984 George Orwell described himself as a socialist and clarified that the books were not anti-revolution, they were a critique of revolution where ‘Kronstadt’ was unsuccessful and people are unable to ‘put their foot down’.",
"In totalitarian states phrases such as ‘anti-Soviet’ and ‘anti-Brazilian’ are used to condemn people for their lack of loyalty.",
"In the early 70s the ‘Powell Memorandum’ said that the capitalist class was the most persecuted class in America and that something needed to be done about the growth in democratic change in the 60s as it threatened their power.",
"In the ‘Wealth of Nations’ Adam Smith wrote that ‘the principal architects of policy’ were the people who owned the society, in his day they were the ‘merchants and manufacturers.’",
"By the 1980s ‘General Electric’ could make more profits by shifting money around then it could by producing. They pay zero taxes.",
"During the 50s and 60s when economic growth was more egalitarian corporate and personal taxes were a lot higher. This is no longer the case. Workers spend their money on goods which there is demand for, the rich spends their money on yachts…",
"Henry Ford doubled the minimum wage of his employees so they could buy cars. He believed that keeping wages high was essential to a prosperous economy.",
"One of the leading political scientists in America Martin Gilens, revealed that 70% of the population have no influence on policy, they might as well be in another country.",
"Adam smith described ‘All for ourselves, nothing for anyone else’ as a ‘vile maxim’ he also believed that the division of labour would lead to equality of outcome.",
"The book ‘The Industrial Worker, 1840–1860’ documents the beliefs of the working class during the enlightenment. Despite never hearing of Karl Marx they believed that the workers of the factory should own them and critiques capitalism with the slogan ‘gain wealth, forgetting all but self.’",
"20th century intellectual Walter Lipmann said that ‘The public must be put in their place’ so that the responsible men can make decisions without interference from the ‘bewildered herd.’",
"Advertiser Edward Bernays used feminism to normalise female smoking in the 30s. He admitted that media outlets constituted an ‘invisible Government’ which was the ‘true ruling power’ of the country."]
let answerStack = [];
let qNumber = 0;

let partHornSfx = new Audio("sfx/DrumRollAndHorn.ogg");
let score = $("#score");


startBtn.click(async function(){
    firstContainer.addClass("hide");
    await theVideo.play();
    secondContainer.removeClass("hide");

    setTimeout(function(){
        beginBtn.removeClass("hide");
    },55000);
    
})


beginBtn.click(function(){
    theVideo.pause();
    theVideo.currentTime = 0;
    secondContainer.addClass("hide");
    thirdContainer.removeClass("hide");
});

//Start Quiz
bTO.click(function(){
    bTO.addClass("hide");
    bTT.removeClass("hide");
    bTF.removeClass("hide");

    newQuestion();

});

bTT.click(function(){
    answerStack.push("t");

    newQuestion();
});

bTF.click(function(){
    newQuestion();
})

function newQuestion(){

    $(".gray-card").scrollTop(0);

    qNumber++;

    headerQ.html(`Question ${qNumber} out of 22`);
    qQ.html(questionStack[qNumber - 1]);

    if(qNumber == 23){
        thirdContainer.addClass("hide");
        score.removeClass("hide");
        showScore();
    }
}

async function showScore() {
    await partHornSfx.play();
    setTimeout(function(){
        if(answerStack.length == 22){
            score.append(" <span style='color: green;'>Sane</span>")
        }else if(answerStack.length >= 12){
            score.append(" <span style='color: orange;'>Normal</span>")
        }else{
            score.append(" <span style='color: red;'>Insane</span>")
        }
    },3869)
}