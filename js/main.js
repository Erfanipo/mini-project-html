var j = $.noConflict();
j(document).ready(function () {
    j(".menu").click(function(){
        j("ul").css({
            'right' : '0',
        });
        j(this).hide(50);
    });
    j(".close").click(function(){
        j("ul").css({
            'right' : '-200px'
        });
        j(".menu").show(500);
    });
});