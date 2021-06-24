# vue-count-to

> It's a vue component that will count to a target number at a specified duration (this project is transfer from PanJiaChen/vue-countTo)

 [![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://v3.vuejs.org/)
 [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/HULANG-BTB/vue-count-to-next)
 [![npm](https://img.shields.io/npm/v/vue-count-to-next.svg)](https://www.npmjs.com/package/vue-count-to-next)
 [![npm](https://img.shields.io/npm/dm/vue-count-to-next.svg)](https://npmcharts.com/compare/vue-count-to-next)

vue-count-to-next is a dependency-free, lightweight vue component that can be overwrited  easingFn by yourself.
You can set startVal and endVal ,it will automatic judge count up or count down.
It is support vue-ssr.
It is learn from PanJiaChen/vue-countTo;

## [Try the demo](http://hulang-btb.github.io/vue-count-to-next/)

### How to use?
```bash
npm install vue-count-to-next
```

### Example

```vue
<template>
  <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
</template>

<script>
  import countTo from 'vue-count-to-next';
  export default {
    components: { countTo },
    setup () {
      return {
        startVal: 0,
        endVal: 2017
      }
    }
  }
</script>
```
demo:

![demo](https://github.com/PanJiaChen/vue-countTo/blob/master/countDemo.gif)

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| startVal       | the value you want to begin at |Number| 0 |
| endVal         | the value you want to arrive at |Number | 2017 |
| duration  | duration in millisecond | Number | 3000 |
| autoplay     | when mounted autoplay | Boolean | true |
| decimals     | the number of decimal places to show | Number | 0 |
| decimal     | the split decimal | String | . |
| separator     | the separator | String | , |
| prefix     | the prefix | String | '' |
| suffix     | the suffix | String | '' |
| useEasing     | is use easing function | Boolean | true |
| easingFn     | the easing function | Function | — |

** notes: when autoplay:true , it will auto start when startVal or endVal change **


### Functions
| Function Name | Description   |
| :--------:   | -----  |
|    mountedCallback    |  when mounted will emit  mountedCallback  |
|    start    |  start the countTo  |
|    pause   |  pause  the countTo |
|    reset    |  reset  the countTo |
