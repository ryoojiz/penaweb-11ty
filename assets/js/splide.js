document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        height:'90vh',
        type: 'loop',
        autoplay: 'pause',
    } );
    splide.mount();
} );