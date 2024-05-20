document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        height:'90vh',
        type: 'lop',
        autoplay: 'pause',
    } );
    splide.mount();
} );