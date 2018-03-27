Vue.component('ui-icon', {
    extends: Vue.component("ui-block"),
    props:{
      icon:String,
    },
    created:function(){
        this.classList=["fa"];
        this.classList.push(this.icon);
    },
    template:`
  <i :id="id" :style="style" :class="classList" @click="$emit('click')"></i>
      `
    })