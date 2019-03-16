

console.log("Loaded");

Vue.componentCounter=0;

var app = new Vue({
    el: '#app',
    data:{
      hash:'',
      text:'',
      list:[],
      debug:[]
    },
    methods:{
      toPage:function(page){
        document.location="#"+page;
      },
      addItem:function(){
        if (this.text==""){
          return;
        }
        var pos=this.list.indexOf(this.text);
        if (pos==-1){
            this.list.push(this.text);
        }
        this.text="";
        this.saveItems();
      },
      deleteItem:function(item){
          var pos=this.list.indexOf(item);
          this.list.splice(pos,1);
          this.saveItems();
      },
      saveItems:function(){
          localStorage.setItem("list-example",JSON.stringify(this.list));
      },
      loadItems:function(){
          var data=localStorage.getItem("list-example");
          if (data && data.length>0){
            this.list=JSON.parse(data);
          }
          
      }
    },
    mounted(){
      this.$el.style.display='';
      this.loadItems();
    }
  })

  window.onhashchange=function(ev){
    app.hash=document.location.hash.replace("#","");
  }

  window.onhashchange();