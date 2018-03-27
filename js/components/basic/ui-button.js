Vue.component('ui-button', {
    extends: Vue.component("ui-block"),
    props:{
      icon:{
        type:String,
      },
      iconSize:{
        type:String,
        default:32,
      },
      fontSize:{
        type:String,
        default:"1.2rem",
      }
    },
    created:function(){
        
    },
    template:`
  <button :id="id" :style="style" @click="$emit('click')"><ui-icon v-if="icon" :icon="icon"></ui-icon>&nbsp;<slot></slot></button>
      `
    })