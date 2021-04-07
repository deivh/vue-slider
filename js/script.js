function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'images' : 
                        ["img/1.jfif",
                         "img/2.jfif",
                         "img/3.png",
                         "img/4.jfif",
                         "img/5.png",
                         "img/6.jfif",
                        ],
            'img' : '',
            'cont' : 0,

        },
        methods: {
             slider: function(){
                 this.img = this.images[this.cont];
                 return this.img;
             },
             getClick: function() {
                this.cont  += 1;
                console.log(this.cont);
                this.cont = this.cont >= this.images.length  ? 0 : this.cont = this.cont
                 return this.cont;
             },
             removeClick: function() {
                this.cont  -= 1;
                console.log(this.cont);
                this.cont = this.cont < 0  ? 5 : this.cont = this.cont
                 return this.cont;
             }
    }});
}

function init() {
    initVue();

}
$(init);