let img = [...document.querySelectorAll(".img-wrap")];
console.log(img);

let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

//監視対処になった瞬間、activeを負荷する関数
let setItem = (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        }else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin: "0px",
    threshold: 0.5,
};
//どこにいるのか監視する。そして、特定の位置に来たら監視を開始する
let observer = new IntersectionObserver(setItem, options);

observer.observe(titleMessage);

//img-wrapは、偶数と奇数で出現する場所が違う。
img.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(imgs/${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title, index) => {
    index % 2== 0 ? (title.style.left = "45%") : (title.style.left = "35%");
    observer.observe(title);
});





let sum = (...nums) => {
    console.log(arguments);
    let total = 0;
    for (num of nums) {
        total += num;
    }
    return total;
};
console.log(sum(1, 3, 5, 6,56));