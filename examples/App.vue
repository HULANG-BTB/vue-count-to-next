<template>
  <div class="app-container">
    <github-corner />
    <h1>Vue CountTo (next)</h1>
    <div class="example-container">
      <div class="example-item">
        <h3>simple example</h3>
        <code>{{ code1 }}</code>
        <count-to ref="ref1" class="example1" :startVal="startVal1" :endVal="endVal1" :duration="4000"></count-to>
        <div class="example-btn" @click="start1">start</div>
        <div class="example-btn" @click="changeExampleEndVal">change end-val</div>
        <div class="example-btn" @click="incrementalUpdate">incremental update</div>
      </div>
      <div class="example-item">
        <h3>count down example</h3>
        <code>{{ code2 }}</code>
        <count-to ref="ref2" class="example2" :startVal="2017" :endVal="0" :duration="8000"></count-to>
        <div class="example-btn" @click="start2">start</div>
      </div>
      <div class="example-item">
        <h3>custom example</h3>
        <count-to
          ref="ref3"
          class="example3"
          :startVal="example3.setStartVal"
          :endVal="example3.setEndVal"
          :duration="example3.setDuration"
          :decimals="example3.setDecimals"
          :separator="example3.setSeparator"
          :prefix="example3.setPrefix"
          :suffix="example3.setSuffix"
          :autoplay="false"
        ></count-to>
        <code>{{ code3 }} </code>
        <div>
          <label class="label" for="startValInput">startVal: <input type="number" v-model.number="example3.setStartVal" name="startValInput"/></label>
          <label class="label" for="endValInput">endVal: <input type="number" v-model.number="example3.setEndVal" name="endVaInput"/></label>
          <label class="label" for="durationInput">duration: <input type="number" v-model.number="example3.setDuration" name="durationInput"/></label>
          <div class="startBtn example-btn" @click="start3">start</div>
          <div class="pause-resume-btn example-btn" @click="pauseResume">pause/resume</div>
          <br />
          <label class="label" for="decimalsInput">decimals: <input type="number" v-model.number="example3.setDecimals" name="decimalsInput"/></label>
          <label class="label" for="separatorInput">separator: <input v-model="example3.setSeparator" name="separatorInput"/></label>
          <label class="label" for="prefixInput">prefix: <input v-model="example3.setPrefix" name="prefixInput"/></label>
          <label class="label" for="suffixInput">suffix: <input v-model="example3.setSuffix" name="suffixInput"/></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import GithubCorner from './components/github-corner/index.vue'

export default defineComponent({
  name: 'App',
  components: { GithubCorner },
  setup() {
    const code1 = `<count-to :startVal="0" :endVal="2017" :duration="4000" />`
    const ref1 = ref<any>(null)
    const start1 = () => {
      ref1.value.start()
    }
    const startVal1 = ref<number>(0)
    const endVal1 = ref<number>(2017)
    const changeExampleEndVal = () => {
      endVal1.value += 1000
    }

    const incrementalUpdate = () => {
      startVal1.value = endVal1.value
      endVal1.value += 1000
    }

    const code2 = `<count-to :startVal="2017" :endVal="0" :duration="8000" />`
    const ref2 = ref<any>(null)
    const start2 = () => {
      ref2.value.start()
    }

    const code3 = `<count-to :startVal="0" :endVal="2017" :duration="4000" :decimals="0" separator="," prefix="¥ " suffix=" rmb" :autoplay="false" />`
    const ref3 = ref<any>(null)
    const start3 = () => {
      ref3.value.start()
    }
    const pauseResume = () => {
      ref3.value.pauseResume()
    }
    const example3 = reactive({
      setStartVal: 0,
      setEndVal: 2017,
      setDuration: 4000,
      setDecimals: 0,
      setSeparator: ',',
      setSuffix: ' rmb',
      setPrefix: '¥ '
    })

    return {
      code1,
      ref1,
      start1,
      startVal1,
      endVal1,
      changeExampleEndVal,
      incrementalUpdate,
      code2,
      ref2,
      start2,
      code3,
      ref3,
      start3,
      pauseResume,
      example3
    }
  }
})
</script>

<style lang="scss" scoped>
.app-container {
  margin: 20px;

  h1 {
    color: #4ab7bd;
    font-size: 60px;
    text-align: center;
  }

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .example-container {
    width: 980px;
    margin-right: auto;
    margin-left: auto;

    .example-item {
      margin-bottom: 80px;

      h3 {
        font-size: 36px;
        color: #494949;
        line-height: 1.1;
      }

      code {
        display: block;
        padding: 8px 15px;
        background-color: #f6f8fa;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        overflow-x: auto;
        font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal;
        color: #333;
        font-size: 12px;
      }

      .example1 {
        font-size: 40px;
        color: #30b08f;
        display: block;
        margin: 10px 0;
      }

      .example2 {
        font-size: 40px;
        color: #e65d6e;
        display: block;
        margin: 10px 0;
      }

      .example3 {
        font-size: 50px;
        color: #f6416c;
        display: block;
        margin: 10px 0;
        text-align: center;
        font-size: 80px;
        font-weight: 500;
      }

      .example-btn {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 500;
        text-align: center;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        line-height: 1.5;
        padding: 4px 15px;
        font-size: 12px;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        position: relative;
        color: rgba(0, 0, 0, 0.65);
        background-color: #fff;
        border-color: #d9d9d9;

        &:hover {
          color: #4ab7bd;
          background-color: #fff;
          border-color: #4ab7bd;
        }
      }

      .label {
        color: #2f4f4f;
        font-size: 16px;
        display: inline-block;
        margin: 15px 30px 15px 0;
      }

      input {
        position: relative;
        display: inline-block;
        padding: 4px 7px;
        width: 50px;
        height: 28px;
        cursor: text;
        font-size: 12px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.65);
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }

      .startBtn {
        margin-left: 20px;
        font-size: 20px;
        color: #30b08f;
        background-color: #fff;
      }

      .startBtn:hover {
        background-color: #30b08f;
        color: #fff;
        border-color: #30b08f;
      }

      .pause-resume-btn {
        font-size: 20px;
        color: #e65d6e;
        background-color: #fff;
      }

      .pause-resume-btn:hover {
        background-color: #e65d6e;
        color: #fff;
        border-color: #e65d6e;
      }
    }
  }
}
</style>
