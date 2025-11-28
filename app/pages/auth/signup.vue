<template>
  <div class="min-h-screen bg-white flex flex-col">
    <AppNavbar />
    <main class="container-app flex-1 flex items-center justify-center py-8">
      <div class="w-full max-w-md surface bg-white p-6 sm:p-8">
        <h1 class="h2 mb-2">Créer un compte</h1>
        <p class="text-sm text-muted mb-6">Rejoins MakeMyGoals et commence à structurer tes objectifs.</p>

        <form class="space-y-4" @submit.prevent="handleSignup">
          <div class="space-y-1">
            <label class="text-sm font-medium" for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
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
              minlength="6"
              class="w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            />
          </div>

          <button type="submit" class="w-full btn btn-primary text-sm" :disabled="loading">
            {{ loading ? 'Création en cours...' : 'Créer mon compte' }}
          </button>

          <p v-if="error" class="text-xs text-[var(--color-danger)] mt-1">{{ error }}</p>
        </form>

        <p class="mt-4 text-xs text-muted">
          Déjà un compte ?
          <NuxtLink to="/auth/login" class="text-[var(--color-primary)] hover:underline">Se connecter</NuxtLink>
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const router = useRouter()
const { $supabase } = useNuxtApp()

const handleSignup = async () => {
  if (!$supabase) {
    error.value = 'Connexion Supabase non configurée.'
    return
  }

  loading.value = true
  error.value = null

  const { data, error: authError } = await $supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (authError) {
    error.value = authError.message
    return
  }

  if (data.user) {
    router.push('/today')
  }
}
</script>
