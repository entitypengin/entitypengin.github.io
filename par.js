window.onload = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const username = params.get("name");

    const span = document.getElementById("name");
    if (username != null) {
        span.innerText = username + ", ";
    } else {
        span.innerText = "";
    }
}
