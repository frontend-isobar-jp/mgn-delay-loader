/*

Megane Template

Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mgnDelayLoader = factory();
    }
}(this, function() {

    function mgnDelayLoader(selector, option) {

        this.selector = selector;
        this.delayLoader = document.querySelectorAll( this.selector );

        //option
        if(option == null) option = {};
        this.transitionSpeed = option.transitionSpeed ? option.transitionSpeed : 200;
        this.delaySpeed = option.delaySpeed ? option.delaySpeed : 200;
        this.threshold = option.threshold ? option.threshold : 0;
        this.bg = option.bg ? option.bg : "#EEE";

        this.LoadEnd = function(){};

        if (this.delayLoader[0]) {
            this.SetCSS();
            this.Init();
        }

    }


    /**
    **
    ** Init
    **
    **/
    mgnDelayLoader.prototype.Init = function() {

        var this_ = this;

        window.addEventListener( "load", function() { this_.Loader() } );
        window.addEventListener( "scroll", function() { this_.Loader() } );
        window.addEventListener( "resize", function() { this_.Loader() } );

    }


    /**
    **
    ** SetCSS
    **
    **/
    mgnDelayLoader.prototype.SetCSS = function() {

        var hideCSS =  "opacity: 0;";

        this.showCSS =  "opacity: 1;";
        this.showCSS += "transition: all "+ this.transitionSpeed/1000 +"s ease "+ this.delaySpeed/1000 +"s;";
        this.showCSS += "-webkit-transition: all "+ this.transitionSpeed/1000 +"s ease "+ this.delaySpeed/1000 +"s;";

        var hidePerentCSS =  "background:" + this.bg + ";";
            hidePerentCSS += "background-position: center;";

        for (var i = 0; i < this.delayLoader.length; i++) {
            this.delayLoader[i].style.cssText = hideCSS;
            this.delayLoader[i].parentNode.style.cssText = hidePerentCSS;
        }

    }


    /**
    **
    ** Load
    **
    **/
    mgnDelayLoader.prototype.Loader = function() {

        var this_ = this,
            WIN_HEIGHT = window.innerHeight,
            scrollVal = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        scrollVal = scrollVal + WIN_HEIGHT - this.threshold;

        var EndFunc = function( ITEM, i ) {

            this_.LoadEnd(i);
            ITEM.removeAttribute('style');
            ITEM.parentNode.removeAttribute('style');

            ITEM.removeEventListener("transitionend", EndFunc);

        };

        var Func = function( ITEM, i ) {

            ITEM.addEventListener("transitionend", function() {
                EndFunc( ITEM, i );
            }, false);

        }

        for (var i = 0; i < this.delayLoader.length; i++) {

            var ITEM = this.delayLoader[i];
            var ITEM_POS = this.GetOffset( ITEM ).top;

            if( scrollVal > ITEM_POS ){

                var ITEM_SRC = ITEM.getAttribute('data-src');

                if( ITEM_SRC ) {//既ロードは除外

                    ITEM.removeAttribute('data-src');
                    ITEM.setAttribute('src', ITEM_SRC);
                    ITEM.setAttribute('src', ITEM_SRC);
                    ITEM.style.cssText = this.showCSS;

                    Func( ITEM, i );

                }

            }
        }

    }


    /**
    **
    ** GetOffset
    **
    **/
    mgnDelayLoader.prototype.GetOffset = function(el) {

        var BOX = el.getBoundingClientRect();

        return {
            top: BOX.top + window.pageYOffset - document.documentElement.clientTop,
            left: BOX.left + window.pageXOffset - document.documentElement.clientLeft
        }

    }

    return mgnDelayLoader;

}));
