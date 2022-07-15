    /*Выбор фото для превью из миниатюр и их зум*/
    $('.product__preview-slid1').hover(function(){
        $('.product__preview-zoomed img').attr('src', 'product-img/product-img_v1.png');
        $('.product__preview-zoomed img').blowup();
        });

    $('.product__preview-slid2').hover(function(){
        $('.product__preview-zoomed img').attr('src', 'product-img/product-img_v2.png');
        $('.product__preview-zoomed img').blowup();
        });

    $('.product__preview-slid3').hover(function(){
        $('.product__preview-zoomed img').attr('src', 'product-img/product-img_v3.png');
        $('.product__preview-zoomed img').blowup();
        });
    
    /*добавление в карзину плюс и минус*/
    
    $('.product__buy .buy-custom-button-minus').click(function() {
        let $input = $(this).parent().find('.buy-input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        });
    $('.product__buy .buy-custom-button-plus').click(function() {
        let $input = $(this).parent().find('.buy-input');
        let count = parseInt($input.val()) + 1;
        $input.val(parseInt(count));
        }); 

    /* уведомление */
    $('.custom-button--blue').click(function () {
        $.notify("В корзину добавленно,"+ document.querySelector('.buy-input').value +" штук товара", "success");
        });


      