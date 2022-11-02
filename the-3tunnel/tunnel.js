function pixiv() {
    let sitedata = document.getElementById('site');
    let iddata = document.getElementById('id');
    let numdata = document.getElementById('num');
    let filedata = document.getElementById('file');
    if (numdata.value == "") {
        window.open('https://' + sitedata.value + '/' + iddata.value + '.' + filedata.value, '_blank');
    } else {
        window.open('https://' + sitedata.value + '/' + iddata.value + '-' + numdata.value + '.' + filedata.value, '_blank');
    }
  }
  
function go() {
    let proxydata = document.getElementById('proxyname');
    let urldata = document.getElementById('url');
    let searchdata = document.getElementById('search');
    if (urldata.value != "") {
        window.open('https://' + proxydata.value + '/proxify.php?proxy=' + btoa(proxydata.value) + '&site=' + btoa(urldata.value), '_blank');
    } else {
        window.open('https://' + proxydata.value + '/proxify.php?proxy=' + btoa(proxydata.value) + '&site=' + btoa('https://search.brave.com/search?q=' + encodeURI(search.value)), '_blank');
    }
}