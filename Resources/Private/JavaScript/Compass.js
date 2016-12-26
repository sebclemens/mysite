(function($) {

    $.fn.compass = function() {

        // Load
        this.animate({"opacity": 1, "margin-top": "9rem"}, 2000, function() {
            $(this).find("li").each(function(index) {
                $(this).css("transform", "rotate("+ index * -45  +"deg) translateY(-8rem)")
                .css("opacity", 1); 
            });
        });

        this.find("a").hover(function() {
            $(this).css("background-color", "#000")
            .css("border-radius", "100%");
            var par = $(this).parent().parent().parent();
            if(!par.children('.main-overlay').length) {
                par.append("<div class=\"main-overlay\">"+ $(this).attr("title")  +"</div>");
            }
        }, function() {
            $(this).css("background-color", "blue")
            .css("border-radius", "100% 100% 100% 0");
            var par = $(this).parent().parent().parent();
            par.find(".main-overlay").remove();
        });
    }

}(jQuery));

