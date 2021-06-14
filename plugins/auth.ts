import { defineNuxtPlugin, onGlobalSetup, ssrRef } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(ctx => {
  onGlobalSetup(() => {
    const val = ssrRef<string>('')

    if (process.server) {
      val.value = 'server value'
    }

    if (process.client) {
      console.log(val.value)
    }
  })
})
