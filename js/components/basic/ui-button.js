Vue.component('ui-button', {
    extends: Vue.component("ui-block"),
    props:{
      icon:{
        type:String,
      },
      iconSize:{
        type:String,
        default:"1.6rem",
      },
      fontSize:{
        type:String,
        default:"1.2rem",
      },
      padding:{
        type:String,
        default:"8px",
      }
    },
    created:function(){
        
    },
    template:`
  <button :id="id" :style="style" @click="$emit('click')"><ui-icon v-if="icon" :icon="icon" :style="{verticalAlign:'middle',fontSize:iconSize}"></ui-icon>&nbsp;<slot></slot></button>
      `
    })