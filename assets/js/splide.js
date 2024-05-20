document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        height:'100vh',
        type: 'loop',
        autoplay: 'pause',
    } );
    splide.mount();
} );