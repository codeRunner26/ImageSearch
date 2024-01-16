

// Accesskey from ("unsplah.com")  website using API , for  fetching   images .....>

// const accessKey = "M4w0zICf54_oCvscJ9p9B3zTSvTWi7CP0fP3I3mFlyc";

// Accesskey from  ("pexels.com") website using API , for  fetching   images .....>

const accessKey = "hg0SUzOl75mDHuKMza9BtCK5ZAz1r9w2roSUFSTUUyXAbQ27VFLgfn4P";


const form = document.querySelector("form");
const input_txt = document.getElementById("input_txt");
const search_img_cntaner = document.querySelector(".search_img_cntaner");
const show_more = document.getElementById("show_more");
let srch_input = "";
let page = 1;


async function searching_img() {
    srch_input = input_txt.value;
    const URL = `https://api.pexels.com/v1/search?&query=${srch_input}&client_id=${accessKey}&page=${page}&per_page=15`;
    const response = await fetch(URL, {
        headers: {
            Authorization: accessKey
        }
    });

    const data = await response.json();

    const results = data.photos;
    if (page === 1) {
        search_img_cntaner.innerHTML = "";

    }
    if (results) {
        results.forEach((result) => {


            const new_image = document.createElement('div')
            new_image.classList.add('search_imgs')


            const image = document.createElement('img')
            image.src = result.src.large
            image.alt = result.alt.photographer


            new_image.appendChild(image);
            search_img_cntaner.appendChild(new_image);

        });
    }
    page++
    if (page > 1) {
        show_more.style.display = "block"
    }
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    page = 1
    searching_img()
})
show_more.addEventListener("click", function () {
    searching_img()
})



