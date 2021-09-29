let currentTheme="purple", isOpen=false, currentColor="#9c06ff", isNight=false;

window.onload = function () {
    let config = {
        duration: 800,
        delay: 0
    };

    Waves.attach('.card', null);
    Waves.init(config);
};

// Alert Option Use For The Main Restart Of The Web App
// alert(" 🌡️ Use the Setting ⛮ icon to change the Theme 🎨.\n\n 🌡️ Use the Toggle Button for Night Mode 🌃 okay!");

function toggleNightMode(checkBox) {

    let body = document.getElementsByTagName("body")[0];
    let card = document.getElementsByClassName('card')[0];
    let social = document.getElementsByClassName('social')[0];
    let slider = document.getElementsByClassName('slider')[0];
    let github = document.getElementsByClassName("fa-github")[0];
    let instagram = document.getElementsByClassName("fa-instagram")[0];
    let twitter =  document.getElementsByClassName("fa-twitter")[0];

    if(checkBox.checked) {
        night();
    }else {
        day();
    }

    function night(){
        isNight=true;
        slider.style.backgroundColor=currentColor;
        card.style.cssText="background-color:#373737; box-shadow: 10px 10px 8px rgba(235, 235, 235, 0.3);";
        body.style.backgroundColor="#0f0f0f";
        github.style.color="white";
        instagram.style.color="white";
        twitter.style.color="white";
        social.style.color="white";
    }

    function day(){
        isNight=false;
        slider.style.backgroundColor="#cccccc";
        cardStyle(card);
        body.style.backgroundColor="#ebebeb";
        github.style.color="black";
        instagram.style.color="black";
        twitter.style.color="black";
        social.style.color="black";
    }
}

function changeTheme(color) {
    let svg1s = document.getElementById("svg1s");
    let svg1e = document.getElementById("svg1e");
    let svg2s = document.getElementById("svg2s");
    let svg2e = document.getElementById("svg2e");
    let followMe = document.getElementsByClassName("follow-me")[0];
    let card = document.getElementsByClassName('card')[0];
    let nav_bar = document.getElementsByClassName("theme-nav")[0];
    let slider = document.getElementsByClassName("slider")[0];

    currentTheme = color;

    nav_bar.style.animation = "collapse 1s";
    nav_bar.style.animationFillMode = "forwards";
    document.getElementsByClassName("setting")[0].style.color="white";
    isOpen = false;

    switch (currentTheme) {
        case "red":
            setTheme("#ff808d",
                "#ff2740",
                "rgba(255, 128, 141, 0.6);",
                "box-shadow: 2px 5px 8px rgba(255, 39, 64, 0.6); background: linear-gradient(90deg, #ff2740, #ff808d);",
                "rgba(255, 39, 64, 0.6);");
            break;

        case "yellow":
            setTheme("#ff682b",
                "#ffd100",
                "rgba(255, 104, 43, 0.6);",
                "box-shadow: 2px 5px 8px rgba(255,104,43,0.6); background: linear-gradient(90deg, #ffd100, #ff682b);",
                "rgba(255,104,43,0.6);");
            break;

        case "purple":
            setTheme("#F353FB",
                "#9c06ff",
                "rgba(243, 83, 251, 0.6);",
                "box-shadow: 2px 5px 8px rgba(156,6,255,0.6); background: linear-gradient(90deg, #9c06ff, #F353FB);",
                "rgba(156,6,255,0.6);");
            break;

        case "green":
            setTheme("#89db74",
                "#16d73d",
                "rgba(137,219,116,0.6);",
                "box-shadow: 2px 5px 8px rgba(22,215,61,0.6); background: linear-gradient(90deg, #16d73d, #89db74);",
                "rgba(22,215,61,0.6);");
            break;

        case "sky":
            setTheme("#78d4fb",
                "#2082fb",
                "rgba(120,212,251,0.6);",
                "box-shadow: 2px 5px 8px rgba(32,130,251,0.6);  background: linear-gradient(90deg, #2082fb, #78d4fb);",
                "rgba(32,130,251,0.6);");
            break;
    }

    function setTheme(color1, color2, rgb1, cssText, rgb2) {
        currentColor=color2;
        svg1s.style.stopColor=color1;
        svg1e.style.stopColor=color2;
        svg2e.style.stopColor=color2;
        svg2s.style.cssText="stop-color: "+rgb1;
        followMe.style.cssText=cssText;
        card.style.cssText="box-shadow: 10px 10px 8px "+rgb2;
    }

    if(isNight) {
        card.style.backgroundColor = "black";
        slider.style.backgroundColor=currentColor;
    }else{
        slider.style.backgroundColor="#cccccc";
    }

}

function cardStyle(card) {
    card.style.backgroundColor="white";
    switch (currentTheme) {
        case "red":
            card.style.cssText="box-shadow: 10px 10px 8px rgba(255, 39, 64, 0.6);";
            break;
        case "yellow":
            card.style.cssText="box-shadow: 10px 10px 8px rgba(255,104,43,0.6);";
            break;
        case "purple":
            card.style.cssText="box-shadow: 10px 10px 8px rgba(156,6,255,0.6);";
            break;
        case "green":
            card.style.cssText="box-shadow: 10px 10px 8px rgba(22,215,61,0.6);";
            break;
        case "sky":
            card.style.cssText="box-shadow: 10px 10px 8px rgba(32,130,251,0.6);";
            break;
    }
}

function themeBar(setting) {
    let nav = document.getElementsByClassName("theme-nav")[0];
    nav.style.visibility="visible";
    if(!isOpen) {
        nav.style.animation = "bounceInRight 1s";
        nav.style.animationFillMode = "forwards";
        setting.style.color="black";
        isOpen = true;
    }else {
        nav.style.animation = "collapse 1s";
        nav.style.animationFillMode = "forwards";
        setting.style.color="white";
        isOpen = false;
    }
}

function social(icon, id) {
    if(id===1){
        icon.style.color=currentColor;
        icon.style.transform="scale(2);"
    }else{
        if(isNight)
            icon.style.color="white";
        else
            icon.style.color="black";
    }
}
