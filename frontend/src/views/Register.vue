<template>
  <AppLayout>
    <template #header>
      <AppHeader />
    </template>
    <template #main>
      <AppRegister />
    </template>
    <template #footer>
      <AppFooter />
    </template>
  </AppLayout>
</template>

<script lang="ts">
import AppRegister from '@/components/AppRegister.vue'
import AppSignInForm from '@/components/AppSignInForm.vue'
import AppLayout from "@/components/AppLayout.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader, AppFooter, AppLayout,
    AppSignInForm, AppRegister
  }
}
</script>