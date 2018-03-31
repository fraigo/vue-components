Vue.component('ui-input', {
    extends: Vue.component("ui-block"),
    props:[
      "value"
    ],
    created:function(){
        
    },
    template: `<input 
        :id="id" 
        :style="style" 
        v-bind:value="value"     
        v-on:input="updateValue($event.target.value,$event)"
        v-on:keyup.enter="keyPress($event.target.value,$event)"
        ></input>`,
    methods:{
        updateValue:function(value,$ev){
            this.$emit('input', value);
        },
        keyPress:function(value,$ev){
            this.$emit('enter', value);
        },
    }

})