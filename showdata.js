
let article_container = document.getElementById(`article-container`);
article_container.innerHTML = "";

function addComponent(a, b) {
    if (a == "img" || a == "image") {
        return `<figure><div class="img"><img src="` + b + `" alt=""></div></figure>`
    } else
        return `<` + a + `>` + b + `</` + a + `>`;
}
for (let i = 0; i < data[0].length; i++) {
    article_container.innerHTML += (addComponent(data[0][i].type, data[0][i].content))

}