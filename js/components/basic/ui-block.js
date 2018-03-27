Vue.component('ui-block', {
    props:{
      id:{
        type:String,
        default:0
      },
      image:{
        type:String,
      },
      inline:{
        type:Boolean,
        default:false
      },
      align:{
        type:String,
      },
      margin:{
        type:String,
      },
      padding:{
        type:String,
      },
      height:{
        type:String,
      },
      width:{
        type:String,
      },
      rounded:{
        type:String,
        default:5
      },
      fontSize:{
        type:String,
        default:"1rem",
      }
    },
    created:function(){
      if (!window.__uicounter){
        window.__uicounter=100000;
      }
      if (this.id==0){
        this.id='ui'+window.__uicounter++;
      }
      if (!this.style){
          this.style={};
      }
      if (this.inline){
        this.style["display"]='inline-block';
        this.style["vertical-align"]='top';
      }
      if (this.image){
        this.style["backgroundImage"]='url('+this.image+')';
      }
      if (this.align){
        this.style["text-align"]=this.align;
      }
      if (this.margin){
        this.style["margin"]=this.margin;
      }
      if (this.padding){
        this.style["padding"]=this.padding;
      }
      if (this.height){
        this.style["height"]=this.height;
      }
      if (this.rounded){
        this.style["borderRadius"]=this.rounded+'px';
      }
      if (this.width){
        this.style["width"]=this.width;
      }
      if (this.fontSize){
        this.style["fontSize"]=this.fontSize;
      }
    },
    template: `
<div :id="id" :style="style"><slot></slot></div>
    `    
})