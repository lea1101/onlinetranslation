<template>
  <div class="row" id="translateForm">
    <div class="col-md-6 col-md-offset-3">
    <form class="well form-inline" id="transForm" v-on:submit = "formSubmit">
      <input class="form-control" type="text" placeholder="请输入需要翻译的内容" v-model="textToTranslate">
      <select class="form-control"  name="" id="" v-model="language">
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="ko">Korean</option>
        <option value="ja">Janpenese</option>
      </select>
      <input class="btn btn-primary" type="submit" value="翻译">
    </form>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'translateForm',
    data : function(){
      return {
        textToTranslate : '',
        language : ''
      }
    },
    methods : {
      formSubmit:function(e){
        // alert(this.textToTranslate);
        //事件注册 将输入的内容传递给根组件，在根组件中将翻译好的内容传给translateoutput组件
        //  this.$emit("formSubmit");此处的formsubmit和定义的formSubmit方法不是一回事，只是同名而已
        this.$emit("formSubmit",this.textToTranslate,this.language);
        e.preventDefault();
      }
    },
    created:function(){
      this.language = 'en';
    }
  }
</script>

<style>
#transForm {
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
