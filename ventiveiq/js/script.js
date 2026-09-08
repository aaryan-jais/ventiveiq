/* ==========================
   AOS ANIMATION
========================== */

AOS.init({
    duration:1200,
    once:true
});


/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll",function(){

    let navbar=document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background="#ffffff";
        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,0.08)";

    }
    else{

        navbar.style.background="#ffffff";
        navbar.style.boxShadow="none";

    }

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters=document.querySelectorAll('#about h3');

counters.forEach(counter=>{

    const target=+counter.innerText.replace('+','');

    let count=0;

    const speed=40;

    const updateCounter=()=>{

        if(count < target){

            count += Math.ceil(target/100);

            counter.innerText=count+"+";

            setTimeout(updateCounter,speed);

        }
        else{

            counter.innerText=target+"+";

        }

    }

    updateCounter();

});


/* ==========================
   ACTIVE MENU
========================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset >= sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener('click',function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({

            behavior:'smooth'

        });

    });

});


/* ==========================
   HERO TEXT TYPING EFFECT
========================== */

const text =
"We Are Your Data Solutions Audience Marketing Partner";

let i = 0;

function typingEffect(){

    const heading=document.querySelector(".hero-section h1");

    if(!heading) return;

    heading.innerHTML="";

    function type(){

        if(i < text.length){

            heading.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,50);

        }

    }

    type();

}

window.onload=typingEffect;


/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:90px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#F7BE71;
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 5px 15px rgba(0,0,0,.2);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* ==========================
   COURSE CARD EFFECT
========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/* ==========================
   LOADER
========================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});


/* ==========================
   CONTACT FORM ALERT
========================== */

const form=document.querySelector("form");

if(form){

    form.addEventListener("submit",function(e){

        e.preventDefault();

        alert(
            "Thank You! Your enquiry has been submitted successfully."
        );

        form.reset();

    });

}
/* ==========================
   MOBILE MENU AUTO CLOSE
========================== */

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {

    link.addEventListener('click', () => {

        const navbarCollapse = document.querySelector('.navbar-collapse');

        if(navbarCollapse.classList.contains('show')){

            new bootstrap.Collapse(navbarCollapse).hide();

        }

    });

});