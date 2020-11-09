(function(win, doc) {
    'use strict';
   
    var vm = new Vue({
        el:"#app",
        
        data:{
            options: data().options,
            indexBigImg: 0,
            selected:"nat",
            images: data().imgList["nat"]
        },

        mounted:function(){
            this.activeFirstImg()
        },

        methods:{
            showBig:function(index){
                this.indexBigImg = index
            },

            activeFirstImg:function(){
                this.$refs.frame[0].classList.add("active")
            },

            removeActiveClass:function(){
                this.$refs.frame.forEach(function(a) {
                    a.classList.remove("active")
                });
            },

            activeImage:function(e){
                var target = e.target
                this.removeActiveClass()
                target.parentNode.classList.add("active")
                this.showBig(target.getAttribute("data-id"))
            }
        },

        watch:{
            selected:function(newValue){
                this.images = data().imgList[newValue];
                this.removeActiveClass()
                this.activeFirstImg()
                this.showBig(0)
            }
        },
    })
    
})(window, document);