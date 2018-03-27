Vue.component('app-container', {
    props:{
      width:Number,
      height:Number,
      id:{
        type:String,
        default:0
      },
    },
    created:function(){
        this.style={
            width:'320px',
            height:'480px',
            borderRadius:'9px',
            border:'3px solid #444',
            overflow:'auto',
            margin:'5px'
        }
    },
    template: `
<div :id="id" class="appcont" :style="style">
    <slot></slot>
</div>
    `    
})