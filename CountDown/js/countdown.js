const form = document.querySelector ('form'),
      input = document.querySelector ('#fecha');

form.addEventListener ("submit", function (e){
    e.preventDefault ();
    
    countdown (input.value, 'clock', 'Termino el contador');
});



function getRemaiTime (deadline){
    let now = new Date (),
        remainTime = (new Date (deadline) - now + 1000 ) / 1000,
        remainSeconds = Math.floor(remainTime % 60),
        remainMinutes = Math.floor(remainTime /60 % 60),
        remainHours = Math.floor(remainTime /3600 % 24),
        remainDays = Math.floor(remainTime /(3600 * 24));

    return{
        remainTime, remainSeconds, remainMinutes, remainHours, remainDays
    }
}

function countdown (deadline, elem, finalMessage){
    const el = document.getElementById (elem);

    const timerUpdate = setInterval (()=>{
        let t = getRemaiTime (deadline);
        
        el.children[0].children[1].innerHTML = t.remainDays;
        el.children[1].children[1].innerHTML = t.remainHours;
        el.children[2].children[1].innerHTML = t.remainMinutes;
        el.children[3].children[1].innerHTML = t.remainSeconds;

        if (t.remainTime <= 1){
            clearInterval(timerUpdate);
            //el.innerHTML = finalMessage;
        }
    }, 1000);
}