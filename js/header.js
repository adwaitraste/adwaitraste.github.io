// Header Markup common to all webpages

document.write(`
<header class="header navbar-fixed">
    <nav class="z-depth-0">
        <div class="nav-wrapper white">
            <a href="#" class="brand-logo"><span style="color: #FF6000">Engenext</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons black-text">menu</i></a>
            <ul class="right hide-on-med-and-down" id="navbarUL">
                <li><a class="black-text" href="./index.html">Home</a></li>
                <li><a class="black-text" href="./services.html">Services</a></li>
                <li><a class="black-text" href="./about.html">About</a></li>
                <li><a class="black-text" href="./careers.html">Careers</a></li>
                <li><a class="black-text" href="./contact.html">Contact Us</a></li>
            </ul>
        </div>
    </nav>
<ul class="sidenav" id="mobile-demo">
    <li><a class="black-text" href="./index.html">Home</a></li>
    <li><a class="black-text" href="./services.html">Services</a></li>
    <li><a class="black-text" href="./about.html">About</a></li>
    <li><a class="black-text" href="./careers.html">Careers</a></li>
    <li><a class="black-text" href="./contact.html">Contact Us</a></li>
</ul>
</header>
`);