let courseTypeAddButton = document.getElementById("add-course-type-button");
let courseTypeRemoveButton = document.getElementById("remove-course-type-button");
let courseAddButton = document.getElementById("add-course-button");
let courseRemoveButton = document.getElementById("remove-course-button");

let menu = document.querySelector("main");

courseTypeAddButton.addEventListener("click", function(event) {
    let courseType = document.getElementById("course-type-and-first-course");
    let newCourseType = courseType.cloneNode(true);
    // newCourseType.id = "new-course-type";
    menu.appendChild(newCourseType);
});

courseTypeRemoveButton.addEventListener("click", function(event) {
    let courseType = document.getElementById("course-type-and-first-course");
    menu.removeChild(courseType);
});

courseAddButton.addEventListener("click", function(event) {
    let courseItem = document.getElementById("course");
    let newCourseItem = courseItem.cloneNode(true);
    menu.appendChild(newCourseItem);
});

// Not working
courseRemoveButton.addEventListener("click", function(event) {
    let courseItem = document.getElementById("course");
    let courseType = document.getElementById("course-type-and-first-course");
    courseType.removeChild(courseItem);
});