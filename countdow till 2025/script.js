const dayNight = document.querySelector(".dayNight");
const banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})
 
let typingEffect = new Typed("#text",{
    strings:["A Journey","An Amazing Year"],
    loop:true,
    typeSpeed:50,
    backDelay:1000

})


const targetDate = new Date('2025-01-01T00:00:00')

        function updateCountdown(){
            const currentDate = new Date();

            const timeDifference = targetDate - currentDate

            const days = Math.floor(timeDifference/(1000 * 60 * 60 * 24));

            const hours = Math.floor((timeDifference/(1000 * 60 * 60 * 24))/(1000 * 60 * 60));

            const minutes = Math.floor((timeDifference % (1000 * 60 * 60))/(1000 * 60));

            const seconds = Math.floor((timeDifference % (1000 * 60))/1000);

            document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

            setTimeout(updateCountdown,1000)
        

        }

        updateCountdown() 
