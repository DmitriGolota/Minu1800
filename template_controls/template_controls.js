btn_next_step = document.getElementById('next-step');
btn_last_step = document.getElementById('last-step');
div_bg_color = document.getElementById('bg-color-wrapper');
div_text_color = document.getElementById('text-color-wrapper');
div_border = document.getElementById('border-wrapper');
div_dishes = document.getElementById('dishes-wrapper');
add_dish_btn = document.getElementById('addDishBtn');
let current_index = 0;

btn_next_step.addEventListener('click', go_to_next_page);
btn_last_step.addEventListener('click', go_to_last_page);
add_dish_btn.addEventListener('click', addDishesAccordion);

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

function addDishesAccordion() {
    save_changes_from_input();
    current_dish.push({
        'num': current_dish.length + 1,
        'course_type': 'test',
        'name': 'test',
        'price': 0
    });
    let dish = current_dish[current_dish.length - 1];
    let accordion_text = '<div class="accordion-item">\
        <h2 class="accordion-header" id="heading' + dish['num'] + '">\
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'
            + dish['num'] + '" aria-expanded="false" aria-controls="collapse' + dish['num'] + '">'
            + 'Dish No.' + dish['num'] +
            '</button></h2>\
        <div id="collapse'+ dish['num'] +
            '" class="accordion-collapse collapse" aria-labelledby="heading' + dish['num'] +
            '" data-bs-parent="#accordionParent">\
        <div class="accordion-body">\
        Course Type <input type="text" value="' + dish['course_type'] + '" class="dish-inputs">\
        Dish Name <input type="text" value="' + dish['name'] + '" class="dish-inputs">\
        Price<input type="text" value="' + dish['price'] + '" class="dish-inputs">\
        </div></div></div>';
    document.getElementById('accordionParent').innerHTML += accordion_text;
}

function save_changes_from_input() {
    let inputs = document.getElementsByClassName('dish-inputs');
    for (let i = 0; i < current_dish.length; i += 1) {
    console.log(current_dish[i])

        current_dish[i]['num'] = i+1;
        current_dish[i]['course_type'] = inputs[i * 3].value
        current_dish[i]['name'] = inputs[i * 3 + 1].value
        current_dish[i]['price'] = inputs[i * 3 + 2].value
    }
}