Vue.component('ui-image', {
    extends: Vue.component("ui-block"),
    props:{
      rounded:Boolean,
    },
    created:function(){
        this.style["backgroundPosition"]="center center";
        this.style["backgroundSize"]="contain";
        this.style["backgroundRepeat"]="no-repeat";   
        this.style["textAlign"]="center";
        if (this.rounded){
            this.style["borderRadius"]="99% 99%";
            this.style["border"]="1px solid #EEE";
        }
    },
    template:`
  <div :id="id" :style="style" ><slot></slot></div>
      `
    })