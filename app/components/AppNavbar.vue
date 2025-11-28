<template>
  <header class="w-full border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
    <div class="container-app flex items-center justify-between py-3">
      <!-- Brand -->
      <div class="flex items-center gap-2 text-[var(--color-text)]">
        <div class="h-8 w-8 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center">
          <span class="text-xs font-semibold text-[var(--color-primary)]">MMG</span>
        </div>
        <span class="font-title text-lg leading-none">MakeMyGoals</span>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] sm:flex">
        <a href="#how" class="hover:underline">Comment ça marche</a>
        <a href="#value" class="hover:underline">Pourquoi ?</a>
        <a href="#preview" class="hover:underline">Aperçu</a>
        <NuxtLink to="/auth/login" class="text-[var(--color-text)] hover:underline">Connexion</NuxtLink>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden sm:block">
        <NuxtLink to="/auth/signup" class="btn btn-primary text-xs sm:text-sm">
          Créer mon compte
        </NuxtLink>
      </div>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white p-2 text-[var(--color-text)] sm:hidden"
        @click="isOpen = !isOpen"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile panel -->
    <div v-if="isOpen" class="container-app pb-3 sm:hidden">
      <nav class="surface bg-white p-4 text-sm text-[var(--color-text)]">
        <ul class="space-y-3">
          <li>
            <a href="#how" class="hover:underline" @click="isOpen = false">Comment ça marche</a>
          </li>
          <li>
            <a href="#value" class="hover:underline" @click="isOpen = false">Pourquoi ?</a>
          </li>
          <li>
            <a href="#preview" class="hover:underline" @click="isOpen = false">Aperçu</a>
          </li>
          <li>
            <NuxtLink to="/auth/login" class="hover:underline" @click="isOpen = false">
              Connexion
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink
          to="/auth/signup"
          class="btn btn-primary mt-4 w-full text-sm"
          @click="isOpen = false"
        >
          Créer mon compte
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>
