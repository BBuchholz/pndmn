<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const anyMyrKi = $ref(user.savedMyrKi)

const router = useRouter()
function go() {
  if (anyMyrKi) {
    router.push(`/myrKiSs/${encodeURIComponent(anyMyrKi)}`)
    user.setNewMyrKi(anyMyrKi)
  }
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div py-4 />

    <TheInput
      v-model="anyMyrKi"
      placeholder="enter passcode..."
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">P4SSC0DE REQU1R3D 4 ENTRY</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!anyMyrKi"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/BBuchholz/myriad-central-node" target="_blank">
        Myriad Central Node
      </a>
    </p>
    <p>
      <em text-sm opacity-75>You are currently at a Central Node within the Myriad Ecosystem</em>
    </p>
    <img alt="Myriad Central Node logo" :src="isDark ? '/MCN_LOGO_DARK.png' : '/MCN_LOGO_LIGHT.png'">
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 20px;
}
</style>
