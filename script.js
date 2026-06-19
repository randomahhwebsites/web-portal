// -----------------------------
// SEARCH ENGINE FUNCTION
// -----------------------------
function search(engine) {
    const input = document.getElementById("searchBox");

    if (!input) {
        alert("Search box not found (missing id='searchBox')");
        return;
    }

    const query = input.value.trim();

    if (!query) {
        alert("Type something first");
        return;
    }

    let url = "";

    switch (engine) {
        case "google":
            url = "https://www.google.com/search?q=" + encodeURIComponent(query);
            break;

        case "yahoo":
            url = "https://search.yahoo.com/search?p=" + encodeURIComponent(query);
            break;

        case "bing":
            url = "https://www.bing.com/search?q=" + encodeURIComponent(query);
            break;

        default:
            alert("Unknown search engine");
            return;
    }

    window.open(url, "_blank");
}

// ENTER KEY SUPPORT (PUT THIS AT BOTTOM)
document.getElementById("searchBox").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        search("google"); // default engine
    }
});

// -----------------------------
// DROPDOWN NAVIGATION FUNCTION
// -----------------------------
function go(selectId) {
    const select = document.getElementById(selectId);

    if (!select) {
        alert("Dropdown not found: " + selectId);
        return;
    }

    const url = select.value;

    if (!url) {
        alert("Pick a valid option first");
        return;
    }

    window.open(url, "_blank");
}