<template>
  <principal/>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import principal  from '../components/pgPrincipal-uni.vue'
import PgPrincipalUni from '../components/pgPrincipal-uni.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    PgPrincipalUni
}
})
</script>
