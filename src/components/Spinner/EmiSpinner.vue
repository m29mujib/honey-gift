<template>
  <div
    class="inline-flex items-center justify-center"
    :style="{
      '--size': sizePx,
      '--speed': speed,
    }"
    role="status"
    aria-label="Loading"
  >
    <div
      class="relative flex items-center justify-center"
      :class="colorClass"
      :style="{ width: 'var(--size)', height: 'var(--size)' }"
    >
      <!-- dot 1 -->
      <div class="relative flex items-center h-full w-1/4 origin-top will-change-transform animate-swing">
        <span class="block w-full h-1/4 rounded-full bg-current"></span>
      </div>

      <!-- dot 2 -->
      <div class="relative flex items-center h-full w-1/4 origin-top">
        <span class="block w-full h-1/4 rounded-full bg-current/90"></span>
      </div>

      <!-- dot 3 -->
      <div class="relative flex items-center h-full w-1/4 origin-top">
        <span class="block w-full h-1/4 rounded-full bg-current/80"></span>
      </div>

      <!-- dot 4 -->
      <div class="relative flex items-center h-full w-1/4 origin-top will-change-transform animate-swing2">
        <span class="block w-full h-1/4 rounded-full bg-current"></span>
      </div>
    </div>
    <span class="sr-only">Loading…</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** ukuran total loader (px atau CSS size) */
  size?: number | string
  /** durasi animasi, contoh '1.2s' */
  speed?: string
  /** kelas warna Tailwind, gunakan text-* (dot mengikuti currentColor) */
  colorClass?: string
}>(), {
  size: 36,
  speed: '1.2s',
  colorClass: 'text-emerald-600', // brand-ish
})

const sizePx = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
)
const speed = computed(() => props.speed)
const colorClass = computed(() => props.colorClass)
</script>

<style scoped>
/* Animasi ayunan kiri–kanan */
.animate-swing {
  animation: swing var(--speed) linear infinite;
}
.animate-swing2 {
  animation: swing2 var(--speed) linear infinite;
}

@keyframes swing {
  0%   { transform: rotate(0deg);   animation-timing-function: ease-out; }
  25%  { transform: rotate(70deg);  animation-timing-function: ease-in;  }
  50%  { transform: rotate(0deg);   animation-timing-function: linear;   }
}
@keyframes swing2 {
  0%   { transform: rotate(0deg);    animation-timing-function: linear;   }
  50%  { transform: rotate(0deg);    animation-timing-function: ease-out; }
  75%  { transform: rotate(-70deg);  animation-timing-function: ease-in;  }
}
</style>
