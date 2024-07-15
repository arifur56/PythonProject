document.getElementById("entryForm").addEventListener("submit", function(event) {event.preventDefault()

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;

    fetch('http://127.0.0.1:8000/api/entries/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  name: name, mobile: mobile, email: email}),
    })
    .then(Response => Response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Entry added successfully.');
    })
    .catch((error) => {
        console.error('Error', error);
        alert('An error occurred. Please try again.');
    });

});