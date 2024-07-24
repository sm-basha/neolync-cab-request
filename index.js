
const form = document.getElementById("serviceRequestForm");
const fullName = document.getElementById("fullName");
const empId = document.getElementById("empId");
const emailId = document.getElementById("emailId");
const phone = document.getElementById("phone");
const pickupDate = document.getElementById("pickupDate");
const pickupLocation = document.getElementById("pickupLocation");
const dropLocation = document.getElementById("dropLocation");
const pickupTimings = document.getElementById("pickupTimings");
const msg = document.getElementById("msg");

function sendEmail() {
    const bodyMsg = `Full Name: ${fullName.value}<br> Employee ID: ${empId.value} <br> Email ID: ${emailId.value} <br> Phone Number: ${phone.value}<br> Pickup Date: ${pickupDate.value}<br> Pickup Location: ${pickupLocation.value}<br> Drop Location: ${dropLocation.value}<br> Pickup Timings: ${pickupTimings.value}<br> Instructions: ${msg.value}`;

    Email.send({
        SecureToken: "348f5d73-9d0d-4cba-9ca9-157de7f3f469",
        To: 'smbasha.devops1@gmail.com',
        From: "smbasha.devops1@gmail.com",
        Subject: `Cab request of ${fullName.value} for ${pickupDate.value} at ${pickupTimings.value}`,
        Body: bodyMsg
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Your request has been sent",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send your request. Please try again later.",
                    icon: "error"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});