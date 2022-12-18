$(document).ready(function(){

    // Hide All Product
    $('#productGenio, #productScoopy, #loading').hide();

    $('.productBeat').addClass('redon');

    // Show Produck On Click
    $('#btnBeat').click(function(){
        $('#productBeat').hide(0000, function(){
            $('#productBeat').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productGenio, #productScoopy').hide();
        
        $('.productBeat').addClass('redon');
        $('.productGenio').removeClass('redon');
        $('.productScoopy').removeClass('redon');
    })

    $('#btnGenio').click(function(){
        $('#productGenio').hide(0000, function(){
            $('#productGenio').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });   
        $('#productBeat, #productScoopy').hide();

        $('.productBeat').removeClass('redon');
        $('.productGenio').addClass('redon');
        $('.productScoopy').removeClass('redon');
    })

    $('#btnScoopy').click(function(){
        $('#productScoopy').hide(0000, function(){
            $('#productScoopy').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productBeat, #productGenio').hide();

        $('.productBeat').removeClass('redon');
        $('.productGenio').removeClass('redon');
        $('.productScoopy').addClass('redon');
    })

});