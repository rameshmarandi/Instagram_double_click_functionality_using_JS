{/*<i class="fas fa-heart"></i> */}
{/* <i class="fas fa-kiss-wink-heart"></i> */}

const clickArea = document.querySelector(".center_div");

const count = document.querySelector(".countIncrem");

let number = 0 ;

const heartShow = (e) =>{
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
  
    clickArea.appendChild(heart) ;

    setTimeout(() =>{
        heart.remove();
    }, 800)
    

}

const increament=() =>{
    clickArea.addEventListener("dblclick", (e)=>{
        count.innerHTML = ++number;
        heartShow(e);
    })

}
increament();