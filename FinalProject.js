var currentScene = 0;
var currentQuestion = 0;
var playerAnswer;
var score = 0;


//SCORE BOX
var drawScorebox = function(){
    stroke(0, 0, 0);
noFill();
rect(362, 13, 25, 120);

for (var i = 1;i<=10;i++){
    
line(362, 145 + i * -12, 386, 145 + i * -12);
}
};

// QUESTION POOL

var easyQuestions = [
    {
        questionNumber: 0,
        question: "Where does Spongebob Squarepants live?",
        answers: ["Pineapple", "Rock", "URI", "Penthouse"],
        correctAnswer: "Pineapple" },
        
        {
        questionNumber: 1,
        question: "Who is the main character in the Legend of Zelda series?",
        answers: ["Zelda", "Link", "Glup Shitto", "Jesus"],
        correctAnswer: "Link"},
        
         {
        questionNumber: 2,
        question: "Who has the most Olympic gold medals?" ,
        answers: ["Simone Biles", "Lionel Messi", "Michael Phelps", "Usain Bolt"],
        correctAnswer:"Michael Phelps"},
        
         {
        questionNumber: 3,
        question:"Which is NOT a programming language?" ,
        answers:["Python", "Java", "Mandarin", "C++"] ,
        correctAnswer:"Mandarin" },
        
         {
        questionNumber: 4,
        question:"How many points is a touchdown worth in \n        American football?",
        answers:["6","7","3","10"] ,
        correctAnswer:"6" },
        
         {
        questionNumber: 5,
        question: "What are the 3 primary colors?",
        answers:["Red Blue Green", "Yellow Red Blue", "Blue Green Purple", "Orange, Black, White" ] ,
        correctAnswer:"Yellow Red Blue" },
        
         {
        questionNumber: 6,
        question: "What is Harry Houdini known for?",
        answers:["Poetry","Boxing","Singing","Magic"] ,
        correctAnswer:"Magic" },
        
         {
        questionNumber: 7,
        question: "What animal species is Bambi?",
        answers:["Deer","Cat","Bird","Dog"] ,
        correctAnswer:"Deer" },
        
         {
        questionNumber: 8,
        question: "What company published the Mario Kart video game?" ,
        answers:["Game Freak","Nintendo","Disney","Rockstar Games"] ,
        correctAnswer:"Nintendo" },
        
         {
        questionNumber: 9,
        question: "Who is the first president of the United States?",
        answers:["Kanye West","Abraham Lincoln","Donald Trump","George Washington"] ,
        correctAnswer: "George Washington"},
        

    {
        questionNumber: 10,
        question: "The term in basketball for a player using their \n   body to block a teammate's defender is",
        answers: ["Screen","Shield","Safety","Tower"],
        correctAnswer: "Screen" },
        
        {
        questionNumber: 11,
        question: "Which rapper often uses the nickname Slim Shady?",
        answers: ["Jay Z","Eminem","Kanye West","Snoop Dogg"],
        correctAnswer: "Eminem" },
        
        {
        questionNumber:12 ,
        question: "What Language does the word Algebra come from?",
        answers: ["English","Hebrew","Arabic","Latin"],
        correctAnswer: "Arabic" },
        
        {
        questionNumber: 13,
        question: "What is the chemical symbol for iron?",
        answers: ["Fe","Ir","Cr","Ti"],
        correctAnswer: "Fe" },
        
        {
        questionNumber: 14,
        question: "What is the highest grossing movie of all time?",
        answers: ["Titanic","Avatar","Five Nights at Freddy's","Minions"],
        correctAnswer: "Avatar" },
        
        {
        questionNumber: 15,
        question: "How many bones are there in the human body?",
        answers: ["333","66","206","106"],
        correctAnswer: "206" },
        
        {
        questionNumber: 16,
        question: "What planet is closest to the sun?",
        answers: ["Venus","Mars","Earth","Mercury"],
        correctAnswer: "Mercury" },
        
        {
        questionNumber: 17,
        question: "What is the largest US state?",
        answers: ["Texas","California","Alaska","New York"],
        correctAnswer: "Alaska" },
        
        {
        questionNumber: 18,
        question: "What is the first name of the main character in \n     the Pokemon series?",
        answers: ["Ash","Asher","Gary","Pikachu"],
        correctAnswer: "Ash" },
        
        {
        questionNumber: 19,
        question: "Which actor played the prince of Bel-Air?",
        answers: ["Jordan Peele","Will Smith","Denzel Washington","Samuel L. Jackson"],
        correctAnswer: "Will Smith" },
        

    {
        questionNumber: 20,
        question: "Which country is both the smallest in area \n    and population?",
        answers: ["Vatican City", "Monaco","Russia","San Marino"],
        correctAnswer: "Vatican City" },
        
     {
        questionNumber: 21,
        question: "What is the largest mammal in the world?",
        answers: ["Giraffe","Elephant","Blue Whale","Grizzly Bear"],
        correctAnswer: "Blue Whale" },
        
     {
        questionNumber: 22,
        question: "The number 50 in Roman numerals is what?",
        answers: ["L","X","C","XII"],
        correctAnswer: "L" },
        
        {
        questionNumber: 23,
        question: "What is the name of the world's hottest chili pepper?",
        answers: ["Ghost pepper","Carolina Reaper","Habanero","Jalapeno"],
        correctAnswer: "Carolina Reaper" },
        
        {
        questionNumber: 24,
        question: "In bowling, what is the term for three consecutive strikes?",
        answers: ["Chicken","Goose","Pigeon","Turkey"],
        correctAnswer: "Turkey" },
        
        {
        questionNumber: 25,
        question: "Where is the world's largest active volcano located?",
        answers: ["Hawaii","Japan","Russia","Indonesia"],
        correctAnswer: "Hawaii" },
        
        {
        questionNumber: 26,
        question: "How many hearts does an octopus have?",
        answers: ["8","3","2","1"],
        correctAnswer: "3" },
        
        {
        questionNumber:27 ,
        question: "In which US state is Area 51 located?",
        answers: ["Nevada","Ohio","Arkansas","Oklahoma"],
        correctAnswer: "Nevada" },
        
        {
        questionNumber: 28,
        question: "The American football team Kansas City Chiefs are \n   based in which state?",
        answers: ["Kansas City","Missouri","Louisiana","Arkansas"],
        correctAnswer: "Missouri" },
        
        {
        questionNumber: 29,
        question: "The Netflix series Stranger Things takes place \n    in what decade?",
        answers: ["80's","90's","Early 2000's","Late 2000's"],
        correctAnswer: "80's" },
        
        ];
        
//--SHUFFLING ARRAYS--

// Function to shuffle an array (Fisher-Yates Shuffle)
        
var shuffleArray = function(array) {
    var currentIndex = array.length, randomIndex, temporaryValue;

    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// Shuffling in each difficulty
easyQuestions = shuffleArray(easyQuestions);
        
//DollarSign draw function

var drawDollarsign = function(x,y){
//vertical lines
    noStroke();
    fill(0, 255, 0);
    rect(x+130,y+31,10,100);
//S shape
    noFill();
    strokeWeight(17);
    stroke(0, 255, 0);
    arc(x+136,y+62,40,30,100,320);
    arc(x+132,y+97,40,40,270,507);

noStroke();
fill(0, 255, 0);
arc(x+135,y+31,10,10,180,360);
arc(x+135,y+130,10,10,0,180);
};

//Draw Crowd
var crowdFront = function(){

    var xPos = 15;
    for(var i = 0;i<=10;i++){
    fill(26, 26, 26);
    ellipse(xPos+20,69,20,30);
    arc(xPos+20,58,181,99,85,96);
    
     xPos +=30;
    }

};
var crowdBack = function(){

    var xPos = 15;
    for(var i = 0;i<=10;i++){
        noStroke();
        fill(99, 98, 99);
        ellipse(xPos+15,30,20,30);
        arc(xPos+15,15,181,99,85,96);
    
         xPos +=31;
    }

};

//Devin Bitmoji
var drawBitmojiShirt = function (shirtX, shirtY, height, shirtColor, initials) {
    // shirt
    fill(shirtColor);
    rect(shirtX + 147 * height/100, shirtY + 207 * height/100, 93 * height/100, 93 * height/100, 10);

    fill(255, 0, 255);

    fill(255, 255, 255);
    textSize(50 * height/100);
    if (initials === true){
        text("DC", shirtX + 158 * height/100, shirtY + 223 * height/100);
    }

};
var drawBitmojiFace=function(faceX, faceY, height) {
    noStroke();
    // face
    fill (235,171,127);
    ellipse (faceX+193 * height/100, faceY+159 * height/100, 90 * height/100, 108 * height/100);
    fill (255, 255, 255);

};
var drawBitmojiEyes = function(eyesX, eyesY, height){
    // eyes
    var eyesize=10;
    fill (0, 0, 0);
    ellipse (eyesX+214 * height/100, eyesY+150 * height/100, eyesize * height/100, eyesize * height/100);
    ellipse (eyesX+172 * height/100, eyesY+150 * height/100, eyesize * height/100, eyesize * height/100);
};
var drawBitmojiHat = function(hatX, hatY, height){
    //hat
    fill (0, 0, 0);
    rect (hatX+149 * height/100, hatY+59 * height/100, 87 * height/100, 66 * height/100, 20);
    rect (hatX+142 * height/100, hatY+116 * height/100, 101 * height/100, 14 * height/100, 10);
    fill (255, 255, 255);
    textSize(30 * height/100);
    text("A", hatX+182 * height/100, hatY+99 * height/100);

};
var drawBitmojiHair = function (hairX, hairY, height){
    //hair
    fill (0, 0, 0);
    arc (hairX+150 * height/100, hairY+128 * height/100, 13 * height/100, 82 * height/100, 0, 118);
    arc (hairX+235 * height/100, hairY+125 * height/100, 13 * height/100, 87 * height/100, 60, 180);
};
var drawBitmojiNose = function(noseX, noseY, height){
    //nose
    fill (235,171,127);
    stroke(0, 0, 0);
    bezier (noseX+192  * height/100, noseY+177 * height/100, noseX+200 * height/100, noseY+178 * height/100, noseX+211 * height/100, noseY+180 * height/100, noseX+192 * height/100, noseY+157 * height/100);
};
var drawBitmojiMouth = function (mouthX, mouthY, height){
    //mouth
    fill (255, 255, 255);
    arc (mouthX+193 * height/100, mouthY+189 * height/100, 42 * height/100, 18 * height/100, 0, 180);
    fill (0, 0, 0);
    line (mouthX+214 * height/100, mouthY+188 * height/100, mouthX+172 * height/100, mouthY+188 * height/100);
};

var drawDevinBitmoji=function(bitmojiObject){
    drawBitmojiShirt(bitmojiObject.x, bitmojiObject.y, bitmojiObject.height, bitmojiObject.shirtColor, bitmojiObject.initials);
    drawBitmojiFace(bitmojiObject.x, bitmojiObject.y, bitmojiObject.height);
    drawBitmojiEyes(bitmojiObject.x, bitmojiObject.y, bitmojiObject.height);
    drawBitmojiHat(bitmojiObject.x, bitmojiObject.y, bitmojiObject.height);
    drawBitmojiHair(bitmojiObject.x, bitmojiObject.y, bitmojiObject.height);
    drawBitmojiNose(bitmojiObject.x, bitmojiObject.y, bitmojiObject.height);
    drawBitmojiMouth(bitmojiObject.x, bitmojiObject.y, bitmojiObject.height);
};

//Alejo Bitmoji

var drawBitmojiHead = function (headX,headY,headH) {

var h = headH/100;

fill(189, 133, 73);
ellipse(headX+126*h,headY+129*h,80*h,100*h); //head
fill(255, 255, 255);
ellipse(headX+107*h,headY+123*h,20*h,13*h); //left eye
ellipse(headX+144*h,headY+123*h,20*h,13*h); //right eye
fill(61, 37, 16);
ellipse(headX+107*h,headY+123*h,8*h,7*h); //left iris
ellipse(headX+144*h,headY+123*h,8*h,7*h); //right iris
fill(0, 0, 0);
ellipse(headX+107*h,headY+123*h,5*h,5*h); //left pupil*h
ellipse(headX+144*h,headY+123*h,5*h,5*h); //right pupil
fill(0, 0, 0);
quad(headX+121*h,headY+114*h,headX+91*h,headY+111*h,headX+101*h,headY+105*h,headX+102*h,headY+106*h); //left brow
quad(headX+156*h,headY+114*h,headX+150*h,headY+108*h,headX+147*h,headY+109*h,headX+133*h,headY+115*h); //right brow
arc(headX+126*h,headY+95*h,59*h,32*h,180,360); //hair
fill(255, 0, 0);
line(headX+126*h,headY+131*h,headX+132*h,headY+144*h); //nose
line(headX+118*h,headY+144*h,headX+132*h,headY+144*h); //nose
fill(245, 19, 128);
noStroke();
ellipse(headX+140*h,headY+140*h,6*h,9*h);//birthmark
fill(0, 255, 77);
strokeWeight(1.5);
stroke(110, 241, 255);
point(headX+128*h,headY+142*h); //nose ring
fill(255, 255, 255);
stroke(255, 97, 221);
arc(headX+126*h,headY+157*h,33*h,-22*h,-180,0);
noStroke();
fill(189, 133, 73);
ellipse(headX+85*h,headY+130*h,13*h,22*h);
ellipse(headX+166*h,headY+130*h,13*h,22*h);
stroke(117, 109, 109);
line(headX+82*h,headY+135*h,headX+87*h,headY+135*h);
line(headX+168*h,headY+135*h,headX+164*h,headY+135*h);
line(headX+85*h,headY+131*h,headX+85*h,headY+139*h);
line(headX+167*h,headY+131*h,headX+167*h,headY+139*h);
stroke(74, 255, 237);
point(headX+83*h,headY+126*h); //helix piercing
stroke(0, 0, 0);
fill(0, 0, 0);
arc(headX+100*h,headY+106*h,21*h,32*h,152,311);
arc(headX+154*h,headY+106*h,16*h,27*h,227,404);

};
var drawBitmojiBody = function (bodyX,bodyY,bodyH) {

var h = bodyH/100;

noStroke();
fill(138, 86, 54);
ellipse(bodyX+127*h,bodyY+163*h,95*h,70*h); //hood
rect(bodyX+92*h,bodyY+167*h,72*h,78*h); //hoodie
stroke(0, 0, 0);
line(bodyX+138*h,bodyY+218*h,bodyX+138*h,bodyY+195*h);
arc(bodyX+139*h,bodyY+201*h,20*h,11*h,-90,90);
arc(bodyX+139*h,bodyY+212*h,24*h,13*h,-90,90);
line(bodyX+109*h,bodyY+218*h,bodyX+115*h,bodyY+195*h);
line(bodyX+124*h,bodyY+218*h,bodyX+115*h,bodyY+195*h);
line(bodyX+120*h,bodyY+209*h,bodyX+111*h,bodyY+209*h);


};
var drawBitmoji = function(x,y,h) {


drawBitmojiBody(x,y,h);
drawBitmojiHead(x,y,h);

};

//Khan Button Class

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255, 215, 0);    
    textSize(35);
    textAlign(LEFT, TOP);
    text(this.label, this.x+6, this.y+this.height/7);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClickBtn1 = function() {
    if (currentScene === 0 && this.isMouseInside()) {
        this.onClick();}
        
};

Button.prototype.handleMouseClickBtn2And3 = function() {
    if (currentScene === 1 && this.isMouseInside()) {
        this.onClick();}
        
};
 
Button.prototype.handleMouseClickBtn4 = function() {
    if (currentScene === 4 || currentScene === 5 && this.isMouseInside()) {
        this.onClick();}
        
};
 


var btn1 = new Button({
    x: 122,
    y: 215,
    label: "    Start!",
    onClick: function() {
    currentScene = 1;
    }
});

var btn2 = new Button({
    x: 30,
    y: 50,
    label: "    Devin",
    onClick: function() {
    currentScene = 2;
    }
});

var btn3 = new Button({
    x: 215,
    y: 50,
    label: "Alejandro",
    onClick: function() {
    currentScene = 3;
    }
});

var btn4 = new Button({
    x: 123,
    y: 280,
    label: " Restart?",
    onClick: function() {
    currentScene = 0;
    score = 0;
    currentQuestion = 0;
     easyQuestions = shuffleArray(easyQuestions);
    }
});



mouseClicked = function() {
    btn1.handleMouseClickBtn1();
    btn2.handleMouseClickBtn2And3();
    btn3.handleMouseClickBtn2And3();
    btn4.handleMouseClickBtn4();
    
    if (currentScene === 2 || currentScene === 3) {
       
        if (mouseX > 50 && mouseX < 150 && mouseY > 290 && mouseY < 390) {
           
            var index = floor((mouseY - 290) / 25);
            playerAnswer = easyQuestions[currentQuestion].answers[index];

            //Correct answer check
            if (playerAnswer === easyQuestions[currentQuestion].correctAnswer) {
                
                score += 100000;

                
                currentQuestion++;

               //When player answered all questions right go to congrats screen
                if (score === 1000000) {
                  
                    currentScene = 5;
                }
            } else {
               //Player answers wrong go to game over screen
                currentScene = 4;
            }
        }
    }
};


// Splash Screen
var splashScreen=function(){
    background(17, 20, 102);
    
    var f = createFont("fantasy");
    textFont(f,50);
    fill(255, 215, 0);
    text("MILLIONAIRE TRIVIA", 7, 13);
    
    //start button
    btn1.draw();
    
    //
    drawDollarsign(-61,58);
    drawDollarsign(62,58);
    drawDollarsign(190,58);
    
    //Subtitle
    fill(255, 215, 0);
    textSize(27);
    text("How far can you go!?",88,284);
    
    //Credits
    fill(255, 255, 255);
    textSize(20);
    text("Created by: Alejandro & Devin",14,372);
    strokeWeight(1);
    drawDevinBitmoji(
        {x:283,
        y:309,
        height:31,
        shirtColor:color(0, 0, 0),
        initials:true}
    );
    drawBitmoji(244,318,32);
};


// Character Select Screen
var charSelect = function(){
    background(130, 130, 130);
    fill(0, 0, 0);
    textSize(36);
    text("Choose your character!", 28, 316);
    //Draw Devins Bitmoji
     drawDevinBitmoji(
        {x:-25,
        y:70,
        height:70,
        shirtColor:color(0, 0, 0),
        initials:true}
    );
 
//Draw Alejo bitmoji
      drawBitmoji(180,63,90);
      
    
btn2.draw();
btn3.draw();
    
};


// Draw Game Screen
var drawUI = function(){
    // Text Bubble
    fill(255, 255, 255);
    ellipse(200, 200, 383, 91);
    noStroke();
    triangle(200, 135, 225, 170, 175, 170);
 
    
    
    //Answer Box
    rect(10, 290, 380, 100);
    
    //Level Box/ & Score
stroke(0, 0, 0);
noFill();
rect(362, 13, 25, 120);

for (var i = 1;i<=10;i++){
    
line(362, 145 + i * -12, 386, 145 + i * -12);
    
}
};


// Draw Game Screen
var gameScreenDev = function() {
    background(51, 51, 128);
    crowdBack();
    crowdFront();
     drawBitmoji(110, -45, 70);
    drawUI();
    drawDevinBitmoji( 
        {x:-41,
        y:270,
        height:39,
        shirtColor:color(0, 0, 0),
        initials:true});
        
    //Display Question
    fill(0, 0, 0);
    textSize(15);
    textAlign(LEFT, TOP);
    text(easyQuestions[currentQuestion].question, 39, 192);
    
    //Display question number
    var questionNumber = currentQuestion + 1;
    text("Question #" + questionNumber, 157, 165);
    
    //Display money
    textSize(25);
    text("Current Money:", 220, 295);
    fill(145, 255, 145);
    textSize(35);
    text("$"+score, 229, 334);
    textSize(15);
    
    //Display Answer
    for (var i = 0; i < easyQuestions[currentQuestion].answers.length; i++) {
        fill(255, 255, 255);
        rect(65, 295 + i * 25, 133, 18);
    }
    for (var i = 0; i < easyQuestions[currentQuestion].answers.length; i++) {
        fill(0, 0, 0);
        text(easyQuestions[currentQuestion].answers[i], 71, 296 + i * 25);
    }
    
};

var gameScreenAle = function() {
    background(51, 51, 128);
    crowdBack();
    crowdFront();

    drawDevinBitmoji(
        {x:102,
        y:-20,
        height:50,
        shirtColor:color(0, 0, 0),
        initials:true}
    );
    drawUI();
    drawBitmoji(-25,261,49);
    
    //Display Question
    fill(0, 0, 0);
    textSize(15);
    textAlign(LEFT, TOP);
    text(easyQuestions[currentQuestion].question, 39, 192);
    
    //Display question number
    var questionNumber = currentQuestion + 1;
    text("Question #" + questionNumber, 157, 165);
    
    //Display money
    textSize(25);
    text("Current Money:", 220, 295);
    fill(145, 255, 145);
    textSize(35);
    text("$"+score, 229, 334);
    textSize(15);
    
    //Display Answer
    for (var i = 0; i < easyQuestions[currentQuestion].answers.length; i++) {
        fill(255, 255, 255);
        rect(65, 295 + i * 25, 133, 18);
    }
    for (var i = 0; i < easyQuestions[currentQuestion].answers.length; i++) {
        fill(0, 0, 0);
        text(easyQuestions[currentQuestion].answers[i], 71, 296 + i * 25);
    }
    
};

var gameOver = function(){
    
    background(0, 0, 0);
    fill(245, 0, 0);
    textSize(65);
    text("TOO BAD!",80,64);
    //score
    textSize(33);
    fill(255, 255, 255);
    text("You Finished With:", 80, 145);
    text("$" + score, 135, 198);
    textSize(18);
    text("Restart to Try Again and Earn Even More Money!!", 35, 250);
   
    //back to main menu button
    btn4.draw();
    
   
};

var congrats = function(){
    
    background(0, 0, 0);
    fill(37, 245, 0);
    textSize(66);
    text("CONGRATS!!!",43,64);
    //score
    textSize(33);
    fill(255, 255, 255);
    text("You Finished With:", 80, 145);
    text("$" + score, 135, 198);
    textSize(20);
    text("Wow you're a millionaire!",95,252);
   
    //back to main menu button
    btn4.draw();
    
    //score = 0;
};


// Score Bar Levels
var scoreMeter = function(y,h){
    noStroke();
    fill(47, 255, 0);
    rect(363,110+y,24,11+h);
};


 
drawScorebox();



// Draw Function to Change Scene
draw = function() {
    if (currentScene === 0){
        splashScreen();
    } else if (currentScene===1){
        charSelect();
    }
    else if (currentScene===2){
        gameScreenDev();   
    }
    else if (currentScene===3){
        gameScreenAle();
    }
    else if (currentScene===4){
        gameOver();
    }
    else if (currentScene===5){
     congrats();   
    }
    
    if (score===100000 && (currentScene === 2 || currentScene === 3)){
    
    scoreMeter(12,0);
    drawScorebox();
}
else if(score===200000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(0,12);
 drawScorebox();
}
else if(score===300000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(-12,24);  
 drawScorebox();
}
else if(score===400000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(-24,36);
 drawScorebox();
}
else if(score===500000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(-36,48);
 drawScorebox();
}
else if(score===600000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(-48,60);
 drawScorebox();
}
else if(score===700000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(-60,72);
 drawScorebox();
}
else if(score===800000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(-72,84);
 drawScorebox();
}
else if(score===900000 && (currentScene === 2 || currentScene === 3))
{
 scoreMeter(-84,96);
 drawScorebox();
}

};