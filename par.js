window.onload = function()
{
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const username = params.get("name");

    const span = document.getElementById("name");
    span.innerText = username;
}
