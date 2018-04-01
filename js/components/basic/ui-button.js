Vue.component('ui-button', {
    extends: Vue.component("ui-block"),
    props:{
      icon:{
        type:String,
      },
      iconSize:{
        type:String,
        default:"1rem",
      },
      fontSize:{
        type:String,
        default:"1rem",
      },
      padding:{
        type:String,
        default:"1px",
      }
    },
    created:function(){
        
    },
    template:`
  <button :id="id" :style="style" @click="$emit('click')"><ui-icon v-if="icon" :icon="icon" :style="{verticalAlign:'middle',fontSize:iconSize,paddingLeft:'3px'}"></ui-icon><slot></slot></button>
      `
    })