

console.log("Loaded");

Vue.componentCounter=0;

var app = new Vue({
    el: '#app',
    data:{
      hash:'',
      text:''
    },
    methods:{
      toPage:function(page){
        document.location="#"+page;
      }
    }
  })

  window.onhashchange=function(ev){
    app.hash=document.location.hash.replace("#","");
  }

  window.onhashchange();