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

        <!-- Liens dépendants de la session -->
        <template v-if="!user">
          <NuxtLink to="/auth/login" class="text-[var(--color-text)] hover:underline">
            Connexion
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/profile" class="text-[var(--color-text)] hover:underline">
            Mon profil
          </NuxtLink>
          <button
            type="button"
            class="btn btn-ghost text-xs"
            :disabled="signingOut"
            @click="onSignOut"
          >
            {{ signingOut ? 'Déconnexion…' : 'Se déconnecter' }}
          </button>
        </template>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden sm:block">
        <NuxtLink
          v-if="!user"
          to="/auth/signup"
          class="btn btn-primary text-xs sm:text-sm"
        >
          Créer mon compte
        </NuxtLink>
        <NuxtLink
          v-else
          to="/today"
          class="btn btn-primary text-xs sm:text-sm"
        >
          Aller à ma journée
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
          <li v-if="!user">
            <NuxtLink to="/auth/login" class="hover:underline" @click="isOpen = false">
              Connexion
            </NuxtLink>
          </li>
          <li v-else>
            <NuxtLink to="/profile" class="hover:underline" @click="isOpen = false">
              Mon profil
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink
          v-if="!user"
          to="/auth/signup"
          class="btn btn-primary mt-4 w-full text-sm"
          @click="isOpen = false"
        >
          Créer mon compte
        </NuxtLink>
        <button
          v-else
          type="button"
          class="btn btn-ghost mt-4 w-full text-sm"
          :disabled="signingOut"
          @click="() => { onSignOut(); isOpen = false }"
        >
          {{ signingOut ? 'Déconnexion…' : 'Se déconnecter' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const isOpen = ref(false)
const signingOut = ref(false)

const onSignOut = async () => {
  if (signingOut.value) return

  signingOut.value = true

  const { error } = await supabase.auth.signOut()

  signingOut.value = false

  if (error) {
    // On reste simple ici : pas d'affichage d'erreur dans la navbar
    return
  }

  await router.push('/')
}
</script>
