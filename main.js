function random() {

    const images = [`url("img/0.jpg")`, `url("img/1.jpg")`, `url("img/2.jpg")`, `url("img/3.jpg")`, `url("img/4.jpg")`, `url("img/5.jpg")`, `url("img/6.jpg")`, `url("img/7.jpg")`, `url("img/8.jpg")`, `url("img/9.jpg")`, `url("img/10.jpg")`, `url("img/11.jpg")`, `url("img/12.jpg")`, `url("img/13.jpg")`, `url("img/14.jpg")`, `url("img/15.jpg")`];

    const bg = document.querySelector('.background');


    let ran = images[Math.floor(Math.random() * images.length + 1)];
    bg.style.backgroundImage = ran;
}

setInterval(random, 4500);