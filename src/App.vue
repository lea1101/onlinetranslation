<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用  / 便捷</h5>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
  import translateForm from './components/TranslateForm'
  import translateOutput from './components/TranslateOutput'
    export default {
        name : 'app',
        data : function(){
          return {
            translatedText : ''
          }
        },
        components : {
          translateForm,
          translateOutput
        },
      methods : {
        translateText : function(text,language){
          // alert(text);
          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180321T104122Z.6444ccd6a7f817c7.870be8592af49a50ee8f5fb768f34c735239322d&lang='+language+'&text='+text)
            .then((response)=>{
              // console.log();
              this.translatedText = response.body.text[0];
            })
        }
      }
    }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  #app {
    text-align: center;
  }
</style>
