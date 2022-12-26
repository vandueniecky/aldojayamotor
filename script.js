$('product.html#beranda').ready(function(){

    // Hide All Product
    $('#productGenio, #productScoopy, #productVario, #productPcx, #productAdv, #loading, #showHide').hide();

    $('.productBeat').addClass('redon');

    // Show Produck On Click
    $('#btnBeat').click(function(){
        $('#productBeat').hide(0000, function(){
            $('#productBeat').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productGenio, #productScoopy, #productVario, #productPcx, #productAdv').hide();
        
        $('.productBeat').addClass('redon');
        $('.productGenio').removeClass('redon');
        $('.productScoopy').removeClass('redon');
        $('.productVario').removeClass('redon');
        $('.productPcx').removeClass('redon');
        $('.productAdv').removeClass('redon');
    })

    $('#btnGenio').click(function(){
        $('#productGenio').hide(0000, function(){
            $('#productGenio').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });   
        $('#productBeat, #productScoopy, #productVario, #productPcx, #productAdv').hide();

        $('.productBeat').removeClass('redon');
        $('.productGenio').addClass('redon');
        $('.productScoopy').removeClass('redon');
        $('.productVario').removeClass('redon');
        $('.productPcx').removeClass('redon');
        $('.productAdv').removeClass('redon');
    })

    $('#btnScoopy').click(function(){
        $('#productScoopy').hide(0000, function(){
            $('#productScoopy').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productBeat, #productGenio, #productVario, #productPcx, #productAdv').hide();

        $('.productBeat').removeClass('redon');
        $('.productGenio').removeClass('redon');
        $('.productScoopy').addClass('redon');
        $('.productVario').removeClass('redon');
        $('.productPcx').removeClass('redon');
        $('.productAdv').removeClass('redon');
    })
    
    $('#btnVario').click(function(){
        $('#productVario').hide(0000, function(){
            $('#productVario').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productBeat, #productGenio, #productScoopy, #productPcx, #productAdv').hide();

        $('.productBeat').removeClass('redon');
        $('.productGenio').removeClass('redon');
        $('.productScoopy').removeClass('redon');
        $('.productVario').addClass('redon');
        $('.productPcx').removeClass('redon');
        $('.productAdv').removeClass('redon');
    })

    $('#btnPcx').click(function(){
        $('#productPcx').hide(0000, function(){
            $('#productPcx').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productBeat, #productGenio, #productScoopy, #productVario, #productAdv').hide();

        $('.productBeat').removeClass('redon');
        $('.productGenio').removeClass('redon');
        $('.productScoopy').removeClass('redon');
        $('.productVario').removeClass('redon');
        $('.productPcx').addClass('redon');
        $('.productAdv').removeClass('redon');
    })

    $('#btnAdv').click(function(){
        $('#productAdv').hide(0000, function(){
            $('#productAdv').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productBeat, #productGenio, #productScoopy, #productVario, #productPcx').hide();

        $('.productBeat').removeClass('redon');
        $('.productGenio').removeClass('redon');
        $('.productScoopy').removeClass('redon');
        $('.productVario').removeClass('redon');
        $('.productPcx').removeClass('redon');
        $('.productAdv').addClass('redon');
    })
});

// click trigger
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

let tagging = document.getElementById('tagg1');

tagging.addEventListener("mouseenter", (e) =>{
});