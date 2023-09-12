import header from './components/header.js';
import menu from './components/menu.js';
import homepage from './components/homepage.js';
import about from './components/about.js';
import service from './components/service.js';
import testimonials from './components/testimonials.js';
import contact from './components/contact.js';
import footer from './components/footer.js';

function app(){



// header section starts
    let outPut = header();
// header section ends

// navigation section starts
    outPut += menu();
// navigation section ends

// homepage section starts
    outPut += homepage();
// homepage section ends


// about page starts
    // outPut += about();
// about page ends

// service page starts
    // outPut += service();
// service page ends

// testimonials page starts
    // outPut += testimonials();
// testimonials page ends


// testimonials page starts
// outPut += contact();
// testimonials page ends


// footer section starts
outPut += footer();
// footer section ends




    return outPut;
}

export default app;