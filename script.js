function optimizeTraffic() {

    let vehicles = document.getElementById("vehicles").value;

    fetch("http://127.0.0.1:5000/optimize", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            vehicles: parseInt(vehicles)
        })
    })
    .then(response => {
        console.log("Response received");
        return response.json();
    })
    .then(data => {

    document.getElementById("result").innerHTML =
    `
    <h3>Optimization Result</h3>
    <br>
    🚗 Vehicles: ${data.vehicles}<br><br>
    📊 Density: ${data.density}<br><br>
    🚦 Green Signal Time: ${data.green_time} Seconds
    `;
})
    .catch(error => {
        console.error("Error:", error);
        alert("Error: " + error);
    });
}