let params = (new URL(document.location)).searchParams;
let sub_id = params.get("id");
console.log(sub_id);

if (sub_id == "BME") {
    document.getElementById("CourseName").innerText = "Bio Medical Engineering";
   document.getElementById("courseSyllabus").setAttribute("href","https://cs.du.ac.in/uploads/syllabus/MCA/MCA-Syllabus-Admissions-2023.pdf");
    document.getElementById("Year-3").style.display="none";
    document.getElementById("elSems").style.display="none";   
}
else{
    document.getElementById("bmeSems").style.display="none";
}

function zoomsite() {
    window.open("https://zoomquilt.org/");
}