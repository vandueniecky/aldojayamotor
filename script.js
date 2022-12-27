$('product.html#beranda').ready(function(){

    // Hide All Product
    $('#productGenio, #productScoopy, #productVario, #productPcx, #productAdv, #loading, #showHide').hide();

    // Ini menambahkan tanda bahwa beAT menu aktive
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

$('#spek').ready(function(){
    // Hanya kategori spek mesin yang show pada saat reload Hide kategori.
    $('#rangka, #dimensi, #kapasitas, #kelistrikan').hide();

    // Ini tanda bahwa spek mesin menu aktive
    $('.spekMes').addClass('blackon');

    // Show On Click
    $('#mes').click(function(){
        // Menu id tersebut show
        $('#mesin').show();
        // Selain menu dari id tersebut sembunyikan
        $('#rangka, #dimensi, #kapasitas, #kelistrikan').hide();
        // Beri tanda pada tombol id tersebut jadikan aktive
        // dan
        // Sembunyikan tanda tombol yang tidak aktive
        $('.spekMes').addClass('blackon');
        $('.spekRangkak').removeClass('blackon');
        $('.spekDimber').removeClass('blackon');
        $('.spekKap').removeClass('blackon');
        $('.spekKel').removeClass('blackon');
    })
    // Show On Click
    $('#rangkak').click(function(){
        // Menu id tersebut show
        $('#rangka').show();
        // Selain menu dari id tersebut sembunyikan
        $('#mesin, #dimensi, #kapasitas, #kelistrikan').hide();
        // Beri tanda pada tombol id tersebut jadikan aktive
        // dan
        // Sembunyikan tanda tombol yang tidak aktive
        $('.spekMes').removeClass('blackon');
        $('.spekRangkak').addClass('blackon');
        $('.spekDimber').removeClass('blackon');
        $('.spekKap').removeClass('blackon');
        $('.spekKel').removeClass('blackon');
    })
    // Show On Click
    $('#dimber').click(function(){
        // Menu id tersebut show
        $('#dimensi').show();
        // Selain menu dari id tersebut sembunyikan
        $('#mesin, #rangka, #kapasitas, #kelistrikan').hide();
        // Beri tanda pada tombol id tersebut jadikan aktive
        // dan
        // Sembunyikan tanda tombol yang tidak aktive
        $('.spekMes').removeClass('blackon');
        $('.spekRangkak').removeClass('blackon');
        $('.spekDimber').addClass('blackon');
        $('.spekKap').removeClass('blackon');
        $('.spekKel').removeClass('blackon');
    })
    // Show On Click
    $('#kap').click(function(){
        // Menu id tersebut show
        $('#kapasitas').show();
        // Selain menu dari id tersebut sembunyikan
        $('#mesin, #rangka, #dimensi, #kelistrikan').hide();
        // Beri tanda pada tombol id tersebut jadikan aktive
        // dan
        // Sembunyikan tanda tombol yang tidak aktive
        $('.spekMes').removeClass('blackon');
        $('.spekRangkak').removeClass('blackon');
        $('.spekDimber').removeClass('blackon');
        $('.spekKap').addClass('blackon');
        $('.spekKel').removeClass('blackon');
    })
    // Show On Click
    $('#kel').click(function(){
        // Menu id tersebut show
        $('#kelistrikan').show();
        // Selain menu dari id tersebut sembunyikan
        $('#mesin, #rangka, #dimensi, #kapasitas').hide();
        // Beri tanda pada tombol id tersebut jadikan aktive
        // dan
        // Sembunyikan tanda tombol yang tidak aktive
        $('.spekMes').removeClass('blackon');
        $('.spekRangkak').removeClass('blackon');
        $('.spekDimber').removeClass('blackon');
        $('.spekKap').removeClass('blackon');
        $('.spekKel').addClass('blackon');
    })
});