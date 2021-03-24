
var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Good morning";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Good afternoon";
} else {
    elSaludo = "Good night"
}
var elColor;
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background(240,0,240);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
       createA("paint.html", "galeria").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". Estás en index.html").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#0,0,90");
}
function pagina() {
    createSpan(". Estás en page.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#0,0,90");
}
function paint() {
    createSpan(". Estás en paint.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#0,0,90");
}