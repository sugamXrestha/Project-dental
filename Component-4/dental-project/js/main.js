import app from "./app.js";

page = document.getElementById('root').getAttribute(page-name);
document.getElementById('root').innerHTML = app(page);