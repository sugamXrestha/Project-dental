function menu(){
    let navs = [
        {pagename: 'Home', link: './index.html'},
        {pagename: 'About us', link: './about.html'},
        {pagename: 'Services', link: './service.html'},
        {pagename: 'Testimonials', link: './testimonials.html'},
        {pagename: 'Contacts', link: './contact.html'},
    ];
    let outPut = `<div class="navigation-background">
    <div class="container">`;
    outPut += `<div class="navigation">`;
    outPut += `<div class="logo">
    <img src="../images/logo.png" width="100%">
    </div>`;
    outPut += `<nav>
    <ul>`
            navs.map((nav) =>{
                outPut += `<li><a href='${nav.link}'>${nav.pagename}</a></li>`
            })
            outPut +=`</ul>
            </nav>`
        outPut += `</div>
        </div>
    </div>`;



    return outPut;
}
export default menu;