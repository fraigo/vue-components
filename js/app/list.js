

console.log("Loaded");

Vue.componentCounter=0;

var app = new Vue({
    el: '#app',
    data:{
      hash:'',
      text:'',
      list:["Item"],
    },
    methods:{
      toPage:function(page){
        document.location="#"+page;
      },
      addItem:function(){
          this.list.push(this.text);
          this.text="";
      }
    },
    mounted(){
      this.$el.style.display='';
    }
  })

  window.onhashchange=function(ev){
    app.hash=document.location.hash.replace("#","");
  }

  window.onhashchange();