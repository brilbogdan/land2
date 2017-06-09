$(document).ready(function(){

    $('.el-link-slide').click(function(e){
        e.preventDefault();

        $(this).toggleClass('slide-on');
        $(this).next().slideToggle();
    })

    var select = document.getElementsByTagName('select');
    if(select.length > 0){

        $('select').selectpicker();
    }



    var body = $('body');

    if(body.width() < 770){
        var stickyElem = document.getElementById('b-header');

        window.onscroll = function() {
            if (stickyElem.classList.contains('fixed') && window.pageYOffset < 80 && !stickyElem.classList.contains('show')) {
                stickyElem.classList.remove('fixed');
            } else if (window.pageYOffset > 80) {
                stickyElem.classList.add('fixed');
            }
        };

        $('.el-submenu').click(function(e){
            e.preventDefault();

            $(this).parent().toggleClass('show');
            $(!this).parent().removeClass('show')
        })
    }

    $('.btn-menu').click(function(e){
        e.preventDefault();
        $('.btn-balance').removeClass('active');
        $('.bl-header-info').slideUp();
        $('.el-submenu').each(function(indx){
            $(this).parent().removeClass('show')
        });
        $(this).toggleClass('active');
        $('.b-header').addClass('fixed show');
        setTimeout(function(){

            $('.b-header-menu').slideToggle();
            $('.el-submenu').each(function(indx){
                $(this).parent().removeClass('show')
            })
        },500)


    });

    $('.btn-balance').click(function(e){
        e.preventDefault();
        $('.btn-menu').removeClass('active');
        $('.b-header-menu').slideUp();
        $('.el-submenu').each(function(indx){
            $(this).parent().removeClass('show')
        });
        $(this).toggleClass('active');
        $('.b-header').addClass('fixed show');
        setTimeout(function(){

            $('.bl-header-info').slideToggle();

        },500)
    });

    $(window).resize(function(){
        if(body.width() < 770){
            var stickyElem = document.getElementById('b-header');

            window.onscroll = function() {
                if (stickyElem.classList.contains('fixed') && window.pageYOffset < 80 && !stickyElem.classList.contains('show')) {
                    stickyElem.classList.remove('fixed');
                } else if (window.pageYOffset > 80) {
                    stickyElem.classList.add('fixed');
                }
            };

            $('.el-submenu').click(function(e){
                e.preventDefault();

                $(this).parent().toggleClass('show');
                $(!this).parent().removeClass('show')
            })
        }
    })
});
