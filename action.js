const toggler = document.getElementById('toggler');
const navi = document.querySelector('.nav');
const contentMain = document.querySelector('.main');
const switcher = document.querySelector('.switcher');
const recentPost = document.querySelector('.recent');
console.log(switcher);

toggler.addEventListener('click', () => {
   navi.style.display = navi.style.display === "none" ? "grid" : navi.style.display = "none";
})

switcher.addEventListener('click', ()=> {
    console.log('You can switch now');
    // contentMain.style.display = "none";
    // recentPost.style.display = "block";
    // recentPost.style.height = "auto";
    if(switcher.classList.contains('home-style')){
        switcher.classList.remove('home-style');
        switcher.classList.add('recent-style');
    } else {
        switcher.classList.remove('recent-style');
        switcher.classList.add('home-style');
    }

})

