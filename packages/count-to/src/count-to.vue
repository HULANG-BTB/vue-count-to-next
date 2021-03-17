<template>
  <span>
    {{ countTo.displayValue }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, SetupContext, watch } from 'vue'
import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame'

export interface ICountToProps {
  startVal?: number
  endVal?: number
  duration?: number
  autoplay?: boolean
  decimal?: string
  decimals?: number
  separator?: string
  prefix?: string
  suffix?: string
  useEasing?: boolean
  easingFn?: (t, b, c, d) => any
}

export default defineComponent({
  name: 'CountTo',
  emits: ['mountedCallback', 'callback'],
  props: {
    startVal: {
      type: Number,
      required: false,
      default: 0
    },
    endVal: {
      type: Number,
      required: false,
      default: 2017
    },
    duration: {
      type: Number,
      required: false,
      default: 3000
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    decimal: {
      type: String,
      required: false,
      default: '.'
    },
    decimals: {
      type: Number,
      required: false,
      default: 0,
      validator: (value: number) => {
        return value >= 0
      }
    },
    separator: {
      type: String,
      required: false,
      default: ','
    },
    prefix: {
      type: String,
      required: false,
      default: ''
    },
    suffix: {
      type: String,
      required: false,
      default: ''
    },
    useEasing: {
      type: Boolean,
      required: false,
      default: true
    },
    easingFn: {
      type: Function
    }
  },
  setup(props, context: SetupContext) {
    const defaultEasingFn = (t, b, c, d) => {
      return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
    }

    const easingFn: Function = props.easingFn || defaultEasingFn // set default func to prop will cause en error

    const isNumber = (val: string): boolean => {
      return !isNaN(parseFloat(val))
    }

    const formatNumber = (num = 0, decimals = 0): string => {
      const numString = num.toFixed(decimals)
      const x = numString.split('.')
      let x1 = x[0]
      const x2 = x.length > 1 ? props.decimal + x[1] : ''
      const rgx = /(\d+)(\d{3})/
      if (props.separator && !isNumber(props.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + props.separator + '$2')
        }
      }
      return props.prefix + x1 + x2 + props.suffix
    }

    const countTo = reactive<any>({
      localStartVal: props.startVal,
      displayValue: formatNumber(props.startVal),
      printVal: null,
      paused: false,
      localDuration: props.duration,
      startTime: null,
      timestamp: null,
      remaining: null,
      rAF: null
    })

    const countDown = computed(() => {
      return props.startVal > props.endVal
    })

    const count = (timestamp: number) => {
      if (!countTo.startTime) countTo.startTime = timestamp
      countTo.timestamp = timestamp
      const progress = timestamp - countTo.startTime
      countTo.remaining = countTo.localDuration - progress
      if (props.useEasing) {
        if (countDown.value) {
          countTo.printVal = countTo.localStartVal - easingFn(progress, 0, countTo.localStartVal - props.endVal, countTo.localDuration)
        } else {
          countTo.printVal = easingFn(progress, countTo.localStartVal, props.endVal - countTo.localStartVal, countTo.localDuration)
        }
      } else {
        if (countDown.value) {
          countTo.printVal = countTo.localStartVal - (countTo.localStartVal - props.endVal) * (progress / countTo.localDuration)
        } else {
          countTo.printVal = countTo.localStartVal + (props.endVal - countTo.localStartVal) * (progress / countTo.localDuration)
        }
      }
      if (countDown.value) {
        countTo.printVal = countTo.printVal < props.endVal ? props.endVal : countTo.printVal
      } else {
        countTo.printVal = countTo.printVal > props.endVal ? props.endVal : countTo.printVal
      }
      countTo.displayValue = formatNumber(countTo.printVal)
      if (progress < countTo.localDuration) {
        countTo.rAF = requestAnimationFrame(count)
      } else {
        context.emit('callback')
      }
    }

    const start = () => {
      countTo.localStartVal = props.startVal
      countTo.startTime = null
      countTo.localDuration = props.duration
      countTo.paused = false
      countTo.rAF = requestAnimationFrame(count)
    }

    const pause = () => {
      cancelAnimationFrame(countTo.rAF)
    }

    const resume = () => {
      countTo.startTime = null
      countTo.localDuration = +countTo.remaining
      countTo.localStartVal = +countTo.printVal
      requestAnimationFrame(count)
    }

    const reset = () => {
      countTo.startTime = null
      cancelAnimationFrame(countTo.rAF)
      countTo.displayValue = formatNumber(props.startVal)
    }

    const pauseResume = () => {
      if (countTo.paused) {
        resume()
        countTo.paused = false
      } else {
        pause()
        countTo.paused = true
      }
    }

    onBeforeUnmount(() => {
      cancelAnimationFrame(countTo.rAF)
    })

    onMounted(() => {
      if (props.autoplay) {
        start()
      }
      context.emit('mountedCallback')
    })

    watch(
      () => {
        return props.startVal + props.endVal
      },
      () => {
        if (props.autoplay) {
          start()
        }
      }
    )

    return {
      countTo,
      start,
      pause,
      resume,
      reset,
      pauseResume
    }
  }
})
</script>

<style lang="scss"></style>
