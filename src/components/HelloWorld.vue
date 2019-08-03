<template>
  <div class="hello">


    <textarea @paste="onPaste"></textarea>

    <div class="control">
      <input v-model="word1" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word2" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word3" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word4" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word5" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word6" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word7" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word8" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word9" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word10" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word11" placeholder="edit me" @paste="onPaste">
    </div>
    <div class="control">
      <input v-model="word12" placeholder="edit me" @paste="onPaste">
    </div>
<!--    <h1>Finds</h1>-->
<!--    <div v-for="find in finds">-->
<!--      <input @paste="onPaste" v-model="find.value">-->
<!--    </div>-->
<!--    <button @click="addFind">-->
<!--      New Find-->
<!--    </button>-->
<!--    <pre>{{ $data | json }}</pre>-->

  </div>
</template>

<script>
  const bip39 = require('bip39')

export default {
  name: 'HelloWorld',
  data() {
    return {
      word1:'',
      word2:'',
      word3:'',
      word4:'',
      word5:'',
      word6:'',
      word7:'',
      word8:'',
      word9:'',
      word10:'',
      word11:'',
      word12:'',
    };
  },
  watch: {
    word1: function (val) {
      //validate word
      console.log("val: ",val)

      //edge case, if whole seed
      //val = val.split("\n")
      val = val.split(" ")
      console.log("val2: ",val)
      this.word1 = val[0]


    },
    word2: function (val) {

    }
  },
  methods: {
    addFind: function () {
      this.finds.push({ value: '' });
    },
    onPaste (evt) {
      console.log('on paste', evt)
      console.log('on paste', evt.clipboardData.getData('Text'))
      let seedWords = evt.clipboardData.getData('Text')
      seedWords = seedWords.split("\n")
      console.log('seedWords', seedWords)


      this.word2 = seedWords[1]
      this.word3 = seedWords[2]
      this.word4 = seedWords[3]
      this.word5 = seedWords[4]
      this.word6 = seedWords[5]
      this.word7 = seedWords[6]
      this.word8 = seedWords[7]
      this.word9 = seedWords[8]
      this.word10 = seedWords[9]
      this.word11 = seedWords[10]
      this.word12 = seedWords[11]
      this.word1 = seedWords[0]
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
