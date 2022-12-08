
let links = document.getElementsByTagName('li')
let other_Links = document.querySelector('.other-links')
links[3].addEventListener('mouseenter', () => {
    other_Links.style.display = "block";
})
links[3].addEventListener('mouseleave', () => {
    other_Links.style.display="none"
})
other_Links.addEventListener('mouseenter', () => {
    other_Links.style.display="block"
})
other_Links.addEventListener('mouseleave', () => {
    other_Links.style.display="none"
})
let span_prog = document.querySelectorAll('.span-prog')
let Our_Skills = document.querySelector('#our-skills')
window.addEventListener("scroll", () => {
    if (window.scrollY  >= Our_Skills.offsetTop - 50)
    {
    span_prog.forEach(e => {
            e.style.width = e.dataset.prog
        })
    }  
})
setInterval(()=>{
    let dayes = document.querySelector('.dayes')
    let houres = document.querySelector('.hours')
    let minutes = document.querySelector('.minutes')
    let seconds = document.querySelector('.seconds')
    let next_year = document.querySelector('.next-year')
const date = new Date()
let month = ((((date.getFullYear()+1)*12) - ((date.getFullYear() * 12 )+((date.getMonth()+1))))*31);
let Dayes = (30 - date.getDate());
let Houres = (date.getHours())
let Minutes = (date.getMinutes())
let Seconds = (date.getSeconds());
let totalDayes = (month + Dayes);
    next_year.innerHTML = date.getFullYear()+1
//Set Dayes
let netDayes = totalDayes
if (netDayes < 10) {
        dayes.innerHTML ="0"+ netDayes
    }else dayes.innerHTML = netDayes
//Set Houres
let netHoures = Houres - 23
if (netHoures * -1 < 10) {
    houres.innerHTML = "0"+ netHoures * -1
}else houres.innerHTML = netHoures * -1
//Set Minutes
let netMinutes = Minutes - 59
if (netMinutes * -1 < 10) {
        minutes.innerHTML ="0"+ netMinutes *-1
    }else minutes.innerHTML = netMinutes * -1
//Set Seconds
let netSeconds = Seconds - 59
    if (netSeconds * -1 < 10) {
        seconds.innerHTML = "0" + netSeconds * -1;
    } else seconds.innerHTML = netSeconds * -1;
}, 1000)
let awesome = document.getElementById('awesome')
window.addEventListener('scroll', () => {
    if (window.scrollY >= awesome.offsetTop - 200) {
let awesome_box = document.querySelectorAll('.awesome-count')
setTimeout(() => {
setInterval(() => {
    awesome_box.forEach((e) => {
        if (Number(e.innerHTML) < Number(e.dataset.count))
            e.innerHTML++
            else {
                clearInterval(1)
            }
    })
},8)
}, 1500)
    }
})
let scroll_button = document.querySelector(".scroll-button");
let go_down = document.querySelector('.go-down');
let social_box = document.querySelector(".social-share");
window.addEventListener('scroll', () => {
        social_box.style.display = "block";
    if (window.scrollY <= go_down.offsetTop) {
        scroll_button.style.display ="none"
    } else {
        scroll_button.style.display ="block"
    }
})
document.onmouseover = () => {
    setTimeout(() => {
        social_box.style.display = "none";
    },10000)
}
scroll_button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
})
//Swith Dark mode
let dark_mode = document.querySelector('.dark-mode');
let span_dark_mode = document.querySelector('.sp-dark');
if (window.localStorage.getItem('them')) {
    document.documentElement.setAttribute('data-them', window.localStorage.getItem('them'))
    if (window.localStorage.getItem('them') === "dark") {
        span_dark_mode.classList.add("fa-moon");
    } else {
        span_dark_mode.classList.add("fa-sun");
    }
}
document.documentElement.getAttribute('data-them') === "dark" ? span_dark_mode.classList.add("dark") : "";
let main_color = document.getElementById("in1");
let section_color = document.getElementById("in2");
let text_color = document.getElementById("in3");
let body_color = document.getElementById("in4");

if (window.localStorage.getItem('them') === "dark") {
    main_color.value = "#ffffff";
    section_color.value = "#302e2e";
    text_color.value = "#d1d1d1";
    body_color.value = "#444444";
}

dark_mode.addEventListener('click', () => {
    dark_mode.classList.toggle('active');
    span_dark_mode.classList.toggle('dark');
    let switched = document.documentElement.getAttribute('data-them');
    let setAtt = switched === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-them", setAtt);
    window.localStorage.setItem('them', setAtt);
    span_dark_mode.classList.contains('fa-sun') ? span_dark_mode.className = ('fas fa-moon sp-dark dark') : span_dark_mode.className = ('fas fa-sun sp-dark')
    window.localStorage.removeItem('main-color');
    window.localStorage.removeItem('text-color');
    window.localStorage.removeItem('section-color');
    window.localStorage.removeItem('whit-color');
    if (window.localStorage.getItem('them') === "dark") {
    main_color.value = "#ffffff";
    section_color.value = "#302e2e";
    text_color.value = "#d1d1d1";
    body_color.value = "#444444";
    } else {
            main_color.value = "#2196f3";
            section_color.value = "#ececec";
            text_color.value = "#000000";
            body_color.value = "#ffffff";
}

});


//Show Setting Bar
let sid_bar = document.getElementById('setting');
let sit_btn = document.getElementById('sitt_btn');
sit_btn.addEventListener('click', () => {
    if (sid_bar.style.left === "0px") {
        sid_bar.style.left = "-166px" 
        sit_btn.style.cssText ="animation-name:rotate;animation-duration:4s;animation-iteration-count:infinite;animation-timing-function: linear; "
    } else {
        sid_bar.style.left = "0px";
        sit_btn.style.animation ="none"
    } 
})
sid_bar.onmouseleave = () => {
    setTimeout(() => {
        sid_bar.style.left = "-166px"
        sit_btn.style.cssText ="animation-name:rotate;animation-duration:4s;animation-iteration-count:infinite;animation-timing-function: linear; "
    },3000)
}
//Change Color of Site
let inp = document.querySelectorAll('.color input')
//Set Main Color
if (window.localStorage.getItem('main-color')) {
    document.documentElement.style.setProperty('--main-color', window.localStorage.getItem('main-color'));
    inp[0].value = window.localStorage.getItem('main-color')
}
inp[0].addEventListener("change",() => {
    document.documentElement.style.setProperty('--main-color', inp[0].value)
    window.localStorage.setItem('main-color',inp[0].value)
})
//Set Section Color
if (window.localStorage.getItem('section-color')) {
    document.documentElement.style.setProperty('--section-background', window.localStorage.getItem('section-color'));
    inp[1].value = window.localStorage.getItem('section-color')
}
inp[1].addEventListener("change",() => {
    document.documentElement.style.setProperty('--section-background', inp[1].value)
        window.localStorage.setItem('section-color',inp[1].value)
})
//Set Text Color
if (window.localStorage.getItem('text-color')) {
    document.documentElement.style.setProperty('--text-color', window.localStorage.getItem('text-color'));
    inp[2].value = window.localStorage.getItem('text-color')
}
inp[2].addEventListener("change",() => {
    document.documentElement.style.setProperty('--text-color', inp[2].value)
        window.localStorage.setItem('text-color',inp[2].value)
})
//Set whit Color
if (window.localStorage.getItem('whit-color')) {
    document.documentElement.style.setProperty('--whit-color', window.localStorage.getItem('whit-color'))
    inp[3].value = window.localStorage.getItem('whit-color')
}
inp[3].addEventListener("change",() => {
    document.documentElement.style.setProperty('--whit-color', inp[3].value)
        window.localStorage.setItem('whit-color',inp[3].value)
})
//Reset Defaulte Color Of Sit
let btn_default = document.getElementById('default-setting')
btn_default.addEventListener('click', () => {
    window.localStorage.removeItem('main-color')
    window.localStorage.removeItem('text-color')
    window.localStorage.removeItem('section-color')
    window.localStorage.removeItem('whit-color')
    window.location.reload()
})

//Add social Media Share Button

let facebookBtn =document.querySelector(".facebook-share")
let twitterBtn =document.querySelector(".twitter-share")
let likedinBtn = document.querySelector(".linkedin-share")

function init() {
    let postTitle = "Hello ";
    let postUrl = document.location.href
    facebookBtn.href = `https://www.facebook.com/sharer.php?u=${postUrl}`
    twitterBtn.href = `https://twitter.com/share?url=${postUrl}&text=${postTitle}&via=[via]&hashtags=[hashtags]`
    likedinBtn.href = `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postUrl}`
}
init()
