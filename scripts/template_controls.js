var firebaseConfig = {
    apiKey: "AIzaSyCV6-efUlCaZoXzuD-nnNOd200p5inM6XM",
    authDomain: "minu1800-df37c.firebaseapp.com",
    projectId: "minu1800-df37c",
    storageBucket: "minu1800-df37c.appspot.com",
    messagingSenderId: "1001139316928",
    appId: "1:1001139316928:web:529f2df9d5341d73296525"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


let params = (new URL(document.location)).searchParams;
let htmltexts = params.get("htmltexts");

btn_next_step = document.getElementById('next-step');
btn_last_step = document.getElementById('last-step');
div_bg_color = document.getElementById('bg-color-wrapper');
div_text_color = document.getElementById('text-color-wrapper');
div_border = document.getElementById('border-wrapper');
div_dishes = document.getElementById('dishes-wrapper');
apply_btn = document.getElementById('apply-change-btn');
let current_index = 0;

btn_next_step.addEventListener('click', go_to_next_page);
btn_last_step.addEventListener('click', go_to_last_page);
apply_btn.addEventListener('click', save_changes_from_input);

current_dish = [];

div_titles = [div_bg_color, div_text_color, div_border, div_dishes];
setAllHidden(div_titles)

function setAllHidden(div_titles) {
    for (let div of div_titles) {
        setHidden(div);
    }
    div_titles[0].style.display = "block";
}

function setHidden(div) {
    div.style.display = "none";
}

function go_to_next_page() {
    setHidden(div_titles[current_index]);
    if (current_index < div_titles.length - 1) {
        current_index += 1;
    }
    div_titles[current_index].style.display = "block";
}

function go_to_last_page() {
    setHidden(div_titles[current_index]);
    if (current_index > 0) {
        current_index -= 1;
    }
    div_titles[current_index].style.display = "block";
}

function save_changes_from_input() {
    let course_types = document.getElementsByClassName('course-type');
    let course_types_input = document.getElementsByClassName('course-type-inputs');
    for (let i = 0; i < 3; i++) {
        course_types[i].innerHTML = course_types_input[i].value;
    }

    let dish_name_inputs = document.getElementsByClassName('dish-name-inputs');
    let course_names = document.getElementsByClassName('course-name');
    let course_decscriptions = document.getElementsByClassName('course-description');
    let course_prices = document.getElementsByClassName('course-price');
    let description_inputs = document.getElementsByClassName('description-inputs');
    let price_inputs = document.getElementsByClassName('price-inputs');

    for (let i = 0; i < 6; i++) {
        course_names[i].innerHTML = dish_name_inputs[i].value;
        course_decscriptions[i].innerHTML = description_inputs[i].value;
        course_prices[i].innerHTML = '$' + price_inputs[i].value;
    }
}

let menu = document.getElementById('photo');

bg_controls = document.getElementsByClassName('bg-controls');
font_controls = document.getElementsByClassName('font_controls');
border_color_controls = document.getElementsByClassName('border_color_controls')
border_style_controls = document.getElementsByClassName('border-box');

for (let control of bg_controls) {
    control.addEventListener('click', function () {
        let style = window.getComputedStyle(control)
        let bg_color = style.getPropertyValue('background');
        menu.style.background = bg_color;
    })
}

for (let control of font_controls) {
    control.addEventListener('click', function () {
        let style = window.getComputedStyle(control)
        let font_color = style.getPropertyValue('background-color');
        console.log(font_color)
        menu.style.color = font_color;
    })
}

for (let control of border_color_controls) {
    control.addEventListener('click', function () {
        let style = window.getComputedStyle(control)
        let border_color = style.getPropertyValue('background-color');
        menu.style.borderColor = border_color;
    })
}

for (let control of border_style_controls) {
    control.addEventListener('click', function () {
        let style = window.getComputedStyle(control)
        menu.style.borderWidth = style.getPropertyValue('border-width');
        menu.style.borderStyle = style.getPropertyValue('border-style');
    })
}

// Save as pdf to DB
let divitem = $('#db-div').html();

function writeMenus() {
    
    var menuRef = db.collection("menus");
    menuRef.add({
        code: "user1",
        name: "username",             
        picture: "somephoto.jpeg",
        template: "temp1",
        version: 56423,
        html: divitem.toString()

    });
    console.log("New collection added")
}
var menubtn = document.getElementById("generate_menu")

menubtn.onclick = function(){
    writeMenus();
}

// Load a user page from profile
function loaduserpage(){
    // create html object from string
    console.log(htmltexts)
    // remove sub-div and append new html object to div
    divtoremove = document.getElementById('photo')
    divtoremove.remove();
    inserter = document.getElementById('db-div');
    inserter.innerHTML = htmltexts;

}
loaduserpage();