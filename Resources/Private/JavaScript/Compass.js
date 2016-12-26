(function($) {

    $.fn.compass = function() {

        // Load
        this.animate({"opacity": 1, "margin-top": "13rem"}, 1000, function() {
            $(this).find("li").each(function(index) {
                $(this).css("transform", "rotate("+ index * -45  +"deg) translateY(-8rem)")
                .css("opacity", 1); 
            });
        });

        var oldcolor;
        this.find("a").hover(function() {
            oldcolor = $(this).css("background-color");
            $(this).css("background-color", "#000")
            .css("border-radius", "100%");
            var par = $(this).parent().parent().parent();
            if(!par.children('.main-overlay').length) {
                par.append("<div class=\"main-overlay\"></div>");
            }
            par.find(".main-overlay").text($(this).attr("title")).show();
        }, function() {
            $(this).css("background-color", oldcolor)
            .css("border-radius", "100% 100% 100% 0");
            var par = $(this).parent().parent().parent();
            par.find(".main-overlay").hide();
        });
    }

}(jQuery));

