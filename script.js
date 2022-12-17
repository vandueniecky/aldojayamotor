$(document).ready(function(){

    // Hide All Product
    $('#productVario, #productPCX, #loading').hide();

    // Show Produck On Click
    $('#btnBeat').click(function(){
        $('#productBeat').hide(0000, function(){
            $('#productBeat').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });
        $('#productVario, #productPCX').hide();
        
        $('.productBeat').addClass('redon');
        $('.productVario').removeClass('redon');
        $('.productPCX').removeClass('redon');
    })

    $('#btnVario').click(function(){
        $('#productVario').hide(0000, function(){
            $('#productVario').fadeIn(4000)
        });    
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });   
        $('#productBeat, #productPCX').hide();

        $('.productBeat').removeClass('redon');
        $('.productVario').addClass('redon');
        $('.productPCX').removeClass('redon');
    })

    $('#btnPCX').click(function(){
        $('#productPCX').hide(0000, function(){
            $('#productPCX').fadeIn(4000)
        });
        $('#loading').show(0000, function(){
            $('#loading').fadeOut(2000)
        });   
        $('#productBeat, #productVario').hide();

        $('.productBeat').removeClass('redon');
        $('.productVario').removeClass('redon');
        $('.productPCX').addClass('redon');
    })

});