const students = [
    { name: "sam", marks: [85, 90, 78, 92, 88] },
    { name: "Sagar", marks: [40, 45, 50, 35, 42] }, // Example of a fail
    { name: "Ananya", marks: [95, 98, 92, 90, 96] }
];

const tableBody = document.getElementById('studentData');

students.forEach(student => {
    // Calculate total and average
    const total = student.marks.reduce((acc, curr) => acc + curr, 0);
    const average = (total / student.marks.length).toFixed(2);
    
    // Determine status and CSS class
    const isPass = average >= 50;
    const statusText = isPass ? "PASSED" : "FAILED";
    const statusClass = isPass ? "status-pass" : "status-fail";

    // Create a new row
    const row = `
        <tr>
            <td>${student.name}</td>
            <td>${student.marks.join(", ")}</td>
            <td><strong>${average}</strong></td>
            <td class="${statusClass}">${statusText}</td>
        </tr>
    `;
    
    tableBody.innerHTML += row;
});