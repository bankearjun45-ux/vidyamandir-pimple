let form = document.getElementById("form");
let table = document.getElementById("studentTable");

function showStudents() {
    let data = JSON.parse(localStorage.getItem("students")) || [];
    table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>DOB</th>
        <th>Standard</th>
        <th>Phone</th>
    </tr>`;

    data.forEach(student => {
        let row = table.insertRow();
        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.dob;
        row.insertCell(2).innerText = student.standard;
        row.insertCell(3).innerText = student.phone;
    });
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.querySelector("input[type='text']").value;
    let dob = document.querySelector("input[type='date']").value;
    let standard = document.querySelector("select").value;
    let phone = document.querySelector("input[type='tel']").value;

    let student = { name, dob, standard, phone };

    let data = JSON.parse(localStorage.getItem("students")) || [];
    data.push(student);

    localStorage.setItem("students", JSON.stringify(data));

    document.getElementById("msg").innerText =
    "Data Saved Successfully!\n\n" +
    "तुमचा डेटा सेव्ह झाला आहे. पुढील ५ दिवसांमध्ये तुम्हाला शाळेमधून कॉल येईल डॉक्युमेंट व्हेरिफिकेशन साठी. त्या वेळी उपस्थित राहावे.";

    form.reset();

    showStudents();
});

showStudents();