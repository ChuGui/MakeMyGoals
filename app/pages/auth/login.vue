<template>
  <div class="min-h-screen bg-white flex flex-col">
    <AppNavbar />

    <main class="container-app flex-1 flex items-center justify-center py-8">
      <div class="w-full max-w-md surface bg-white p-6 sm:p-8">
        <h1 class="h2 mb-2">Connexion</h1>
        <p class="text-sm text-muted mb-6">
          Connecte-toi avec ton adresse email et ton mot de passe.
        </p>

        <form class="space-y-4" @submit.prevent="onSubmit">
          <div class="space-y-1">
            <label class="text-sm font-medium" for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              autocomplete="email"
              class="w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div class="space-y-1">
            <label class="text-sm font-medium" for="password">Mot de passe</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              autocomplete="current-password"
              class="w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            />
          </div>

          <p v-if="errorMessage" class="text-xs text-[var(--color-danger)] mt-1">
            {{ errorMessage }}
          </p>

          <button class="w-full btn btn-primary text-sm" type="submit" :disabled="isLoading">
            <span v-if="!isLoading">Se connecter</span>
            <span v-else>Connexion en cours…</span>
          </button>
        </form>

        <p class="mt-4 text-xs text-muted">
          Pas encore de compte ?
          <NuxtLink to="/auth/signup" class="text-[var(--color-primary)] hover:underline">
            Créer un compte
          </NuxtLink>
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const onSubmit = async () => {
  errorMessage.value = ''
  isLoading.value = true

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    errorMessage.value = error.message ?? 'Erreur lors de la connexion.'
    isLoading.value = false
    return
  }

  await router.push('/profile')
  isLoading.value = false
}
</script>

