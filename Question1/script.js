document.addEventListener("DOMContentLoaded", function () {
    const urlForm = document.getElementById("urlForm");
    const jsonDataDiv = document.getElementById("jsonData");

    urlForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        jsonDataDiv.innerHTML = ""; // Clear previous data

        const urls = Array.from(document.querySelectorAll('input[name="url"]')).map(input => input.value);

        for (const url of urls) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                displayJsonData(data);
            } catch (error) {
                console.error(`Error fetching data from ${url}:`, error);
            }
        }
    });

    function displayJsonData(data) {
        const pre = document.createElement("pre");
        pre.textContent = JSON.stringify(data, null, 2);
        jsonDataDiv.appendChild(pre);
    }
});
