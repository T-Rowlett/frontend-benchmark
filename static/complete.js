const entrie = document.querySelector("#input")
const entries = document.querySelector("#text-input")

function updateentrie(data) {
    const options = []
    for (const message of data.content) {
        options.push(`<option value="${message}">`);
    }
    entries.innerHTML = options.join("");
}
entrie.addEventListener("input", () => {
    const url = `/api/input?q=${entrie.value}`;
    fetch(url)
        .then(response => response.json())
        .then(updateentrie);
});