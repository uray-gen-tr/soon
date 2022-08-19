window.addEventListener("load", function() {
let link = document.getElementById('contribute')
if (!link) return null;

link.href = 'https://github.com/uray-gen-tr/faq/blob/main' + window.location.pathname;
})
