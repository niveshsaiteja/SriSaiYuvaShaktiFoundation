let counter1 =0;
let counter2 =0;
let counter3 =0;
let counter4 =0;
let counter5 =0;
let counter6 =0;
let counter7 =0;

let incr1 = document.getElementById("incrHead1");
let incr2 = document.getElementById("incrHead2");
let incr3 = document.getElementById("incrHead3");
let incr4 = document.getElementById("incrHead4");
let incr5 = document.getElementById("incrHead5");
let incr6 = document.getElementById("incrHead6");
let incr7 = document.getElementById("incrHead7");

let returnid1 = setInterval(function(){
    incr1.textContent= counter1+"+";
    counter1 = counter1+1;
    if (counter1===514)
    {
        clearInterval(returnid1);
    }

},5);

let returnid2 = setInterval(function(){
    incr2.textContent= counter2+"+";
    counter2 = counter2+1;
    if (counter2===344)
    {
        clearInterval(returnid2);
    }

},5);

let returnid3 = setInterval(function(){
    incr3.textContent= counter3+"+";
    counter3 = counter3+1;
    if (counter3===124)
    {
        clearInterval(returnid3);
    }

},5);

let returnid4 = setInterval(function(){
    incr4.textContent= counter4+"+";
    counter4 = counter4+1;
    if (counter4===384)
    {
        clearInterval(returnid4);
    }

},5);

let returnid5 = setInterval(function(){
    incr5.textContent= counter5+"+";
    counter5 = counter5+1;
    if (counter5===264)
    {
        clearInterval(returnid5);
    }

},5);

let returnid6 = setInterval(function(){
    incr6.textContent= counter6+"+";
    counter6 = counter6+1;
    if (counter6===643)
    {
        clearInterval(returnid6);
    }

},5);
let returnid7 = setInterval(function(){
    incr7.textContent= counter7+"+";
    counter7 = counter7+1;
    if (counter7===129)
    {
        clearInterval(returnid7);
    }

},5);


