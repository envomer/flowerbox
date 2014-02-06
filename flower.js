$(function()
{

    $('.leaf_nav').on('click', 'span', function()
    {
        //defining important variables
        var $this = $(this), new_pos = 0, pos =  parseInt( $('.four_leaf').data('rotate') ), total_leaves = $('.four_leaf .leaf').length;

        //removing the rotation classes from the four_leaf and the active leaf
        $('.four_leaf .active').removeClass('active');
        $('.four_leaf').removeClass().addClass('four_leaf');
        
        // check which direction
        if( $this.data('dir') == 'prev' && pos > 0 ){
            new_pos = pos - 1;
            $('.four_leaf').addClass('rotate'+new_pos);
            $('.four_leaf .leaf:nth-child('+ ( (total_leaves+1) - new_pos) +')' ).addClass('active');
        }
        else if( $this.data('dir') == 'next' && pos < 3) {
            new_pos = pos + 1;
            $('.four_leaf').addClass('rotate'+new_pos);
            $('.four_leaf .leaf:nth-child('+ ( (total_leaves+1) - new_pos) +')' ).addClass('active');
        }
        else{
            $('.four_leaf').removeClass().addClass('four_leaf');
            new_pos = 0;
            $('.four_leaf .leaf:first-child').addClass('active');
        }

        //saving the new position of the rotation
        $('.four_leaf').data('rotate', (new_pos) );

    });

});
