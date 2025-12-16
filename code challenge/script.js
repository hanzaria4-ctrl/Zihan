// 1. Define Multi-Dimensional Array studentData
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
var studentData = [
    ["Ali Bin Ahmad", 15, 3.75],
    ["Bala A/L Muthu", 12, 3.40],
    ["Siti Nurhaliza", 18, 4.00],
    ["Wong Mei Ling", 10, 3.50],
    ["David Lee", 15, 2.95]
];

// 2. Create function to measure dean list eligibility using conditional statement
function checkDeanList(gpa) {
    // Check if GPA is 3.50 or higher
    if (gpa >= 3.50) {
        return "Dean's List Eligible";
    } else {
        return "Not Dean's List Eligible";
    }
}

// 3. Create Looping (for loop) to print student data
for (var i = 0; i < studentData.length; i++) {
    var studentName = studentData[i][0];
    var creditHours = studentData[i][1];
    var currentGPA = studentData[i][2];
    var status = checkDeanList(currentGPA);
    
    // 4. Create HTML output for each student
    var studentDiv = document.createElement("div");
    studentDiv.className = "student-result";
    
    var studentHTML = `
        <h3>${studentName}</h3>
        <div class="info-line"><strong>Credit Hours:</strong> ${creditHours}</div>
        <div class="info-line"><strong>Current GPA:</strong> ${currentGPA}</div>
        <div class="info-line"><strong>Status:</strong> 
            <span class="${status === "Dean's List Eligible" ? 'eligible' : 'not-eligible'}">
                ${status}
            </span>
        </div>
    `;
    
    // Add separator if not the last student
    if (i < studentData.length - 1) {
        studentHTML += "<hr>";
    }
    
    studentDiv.innerHTML = studentHTML;
    document.getElementById("results").appendChild(studentDiv);
}