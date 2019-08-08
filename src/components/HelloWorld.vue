<template>
	<div class="hello">
		<div class="tabs">
			<b-row>
				<b-col>
					<ul>
						<li :class="[ tabOpen === 'word1' ? 'is-active' : '']">
							<a @click="tabOpen='word1'">
								<input style="border: none; border-style: none;" v-model="word1" placeholder="" @paste="onPaste">
							</a>
						</li>
						<li :class="[ tabOpen === 'word2' ? 'is-active' : '']"><a
								@click="tabOpen='word2'">
							<input style="border: none; border-style: none;" v-model="word2" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word3' ? 'is-active' : '']"><a
								@click="tabOpen='word3'">
							<input style="border: none; border-style: none;" v-model="word3" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word4' ? 'is-active' : '']"><a
								@click="tabOpen='word4'">
							<input style="border: none; border-style: none;" v-model="word4" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word5' ? 'is-active' : '']"><a
								@click="tabOpen='word5'">
							<input style="border: none; border-style: none;" v-model="word5" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word6' ? 'is-active' : '']"><a
								@click="tabOpen='word6'">
							<input style="border: none; border-style: none;" v-model="word6" placeholder="" >
						</a></li>
					</ul>
				</b-col>
				<b-col>
					<ul>
						<li :class="[ tabOpen === 'word7' ? 'is-active' : '']">
							<a @click="tabOpen='word7'">
								<input style="border: none; border-style: none;" v-model="word7" placeholder="" >
							</a>
						</li>
						<li :class="[ tabOpen === 'word8' ? 'is-active' : '']"><a
								@click="tabOpen='word8'">
							<input style="border: none; border-style: none;" v-model="word8" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word9' ? 'is-active' : '']"><a
								@click="tabOpen='word9'">
							<input style="border: none; border-style: none;" v-model="word9" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word10' ? 'is-active' : '']"><a
								@click="tabOpen='word10'">
							<input style="border: none; border-style: none;" v-model="word10" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word11' ? 'is-active' : '']"><a
								@click="tabOpen='word11'">
							<input style="border: none; border-style: none;" v-model="word11" placeholder="" >
						</a></li>
						<li :class="[ tabOpen === 'word12' ? 'is-active' : '']"><a
								@click="tabOpen='word12'">
							<input style="border: none; border-style: none;" v-model="word12" placeholder="" >
						</a></li>
					</ul>
				</b-col>
			</b-row>
		</div>
	</div>




</template>

<script>

    //TODO make all words one of these https://codepen.io/anon/pen/NQaevL

    const bip39 = require('bip39')

    export default {
        name: 'HelloWorld',
        components: {},
        data() {
            return {
                tabOpen: 'word1',
                word1: '',
                word2: '',
                word3: '',
                word4: '',
                word5: '',
                word6: '',
                word7: '',
                word8: '',
                word9: '',
                word10: '',
                word11: '',
                word12: '',
            };
        },
        watch: {
            word1: function (val) {
                //validate word
                console.log("val: ", val)

                //edge case, if whole seed
                //val = val.split("\n")
                val = val.split(" ")
                console.log("*** val split: ", val)
                this.word1 = val[0]
            },
            word2: function (val) {
                console.log("val in word2: ", val)
                this.word2 = val
            }
        },
        methods: {
            addFind: function () {
                this.finds.push({value: ''});
            },
            onPaste(evt) {
                console.log('on paste', evt)
                console.log('on paste', evt.clipboardData.getData('Text'))
                let seedWords = evt.clipboardData.getData('Text')
                seedWords = seedWords.split(" ")
                console.log('seedWords', seedWords)


                this.word2 = seedWords[1]
                console.log('word2', this.word2)
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

	/*.input {*/
	/*	border: none !important;*/
	/*	border-color: transparent !important;*/
	/*}*/

	/*.form-control {*/
	/*	border: 0;*/
	/*}*/

	/*.no-border {*/
	/*	border: 0;*/
	/*	box-shadow: none; !* You may want to include this as bootstrap applies these styles too *!*/
	/*}*/

	/*h3 {*/
	/*	margin: 40px 0 0;*/
	/*}*/

	/*ul {*/
	/*	list-style-type: none;*/
	/*	padding: 0;*/
	/*}*/

	/*li {*/
	/*	display: inline-block;*/
	/*	margin: 0 10px;*/
	/*}*/

	/*a {*/
	/*	color: #42b983;*/
	/*}*/
</style>
