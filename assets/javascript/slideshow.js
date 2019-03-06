slideshow={
    is_paused:false,

    slides:function(){return document.getElementsByClassName("slides")[0].getElementsByClassName("slide");}(),
    slide_count:0,
    slide:0,

    parent_element:function(){return document.getElementsByClassName("slideshow-inner")[0];}(),

    setslide:function(n){
        var i;
        var slides = this.slides;
        if (n > slides.length) {this.slide = 1}
        if (n < 1) {this.slide = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slide-1].style.display = "block";
    }
};