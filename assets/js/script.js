$( document ).ready(function() 
{
    $('a[href*="#"]').click(function(event) 
    {
        if 
        (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) 
        {
            var object = $(this.hash);
            object = object.length ? object : $('[name=' + this.hash.slice(1) + ']');
            if (object.length)
            {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: object.offset().top
                }, 1000, function()
                {
                    var $object = $(object);
                    $object.focus();
                    if ($object.is(":focus")) 
                    {
                        return false;
                    }
                    else
                    {
                        $object.attr('tabindex', '-1');
                        $object.focus();
                    };
                });
            }
        }
    });
});
