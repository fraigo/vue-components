Vue.component('ui-header', {
    extends: Vue.component("ui-block"),
    props:{
      level:{
        type:Number,
        default:1
      }
    },
    created:function(){
        this.style["fontSize"]=((9-this.level)/4)+"rem";
        this.style["fontWeight"]="bold";
    },
    template: `<div :id="id" :style="style"><slot></slot></div>`    
})