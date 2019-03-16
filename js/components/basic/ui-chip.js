Vue.component('ui-chip', {
    extends: Vue.component("ui-block"),
    props:{
        mode:{
            type:String,
        },
        rounded:{
            type:Number,
            default:8,
        },
        margin:{
            type:String,
            default:"5px",
        },
        padding:{
            type:String,
            default:"8px",
        },
        inline:{
            type:Boolean,
            default:true,
        }
    },
    created:function(){
        this.style["backgroundColor"]="#DDD";
    },
    template: `<div
        :id="id" 
        :style="style" 
        ><slot></slot> <ui-icon @click="$emit('delete')" style="cursor:pointer;font-size:1.5em" icon="fa-times">X</ui-icon></div>`,
    methods:{
        
    }

})