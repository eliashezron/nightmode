const moonPath = 
"M15 29C15 44.1878 28.5 55 28.5 55C28.5 55 0.5 44.1878 0.5 29C0.5 13.8122 13.3122 0 28.5 0C28.5 0 15 13.8122 15 29Z";

const sunPath = 
"M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"

const darkMode = document.querySelector('#darkMode')

let toggle = false

// we need to click on the sun

darkMode.addEventListener('click', ()=>{
    // we need to use anime.js
    // we set up the timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo'
    })

    // add different animations to the timeline
    timeline.add({
        targets:'.sun',
        d:[
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets:'#darkMode',
        rotate:320
    }, '-=350')
    .add({
        targets: 'section',
        backgroundColor: toggle ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)',
        color: toggle ? 'rgb(22,22,22)':'rgb(255, 255, 255)'
    }, '-=900')
    // every time we click on the sun, i want the toggle to switch from false to true the back to false again
    if(!toggle){
        toggle=true;
    }else{
        toggle = false;
    }

})