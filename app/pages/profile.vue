<template>
  <div class="min-h-screen bg-white flex flex-col">
    <AppNavbar />

    <main class="container-app flex-1 py-8">
      <div class="max-w-2xl mx-auto surface bg-white p-6 sm:p-8">
        <h1 class="h2 mb-4">Mon profil</h1>

        <div v-if="!user" class="text-sm text-muted">
          <p>Tu n'es pas connecté.</p>
          <NuxtLink to="/auth/login" class="text-[var(--color-primary)] hover:underline">
            Aller à la page de connexion
          </NuxtLink>
        </div>

        <div v-else>
          <div class="flex items-center justify-between mb-4 gap-4">
            <p class="text-sm text-muted">
              Informations liées à ton compte MakeMyGoals.
            </p>

            <button
              class="btn btn-ghost text-xs whitespace-nowrap"
              type="button"
              :disabled="signingOut"
              @click="onSignOut"
            >
              {{ signingOut ? 'Déconnexion…' : 'Se déconnecter' }}
            </button>
          </div>

          <div v-if="loading" class="text-sm text-muted">Chargement du profil...</div>

          <div v-else-if="error" class="text-sm text-[var(--color-danger)]">
            {{ error }}
          </div>

          <div v-else-if="profile" class="space-y-4">
            <div>
              <h2 class="text-sm font-semibold text-muted mb-1">Email</h2>
              <p class="text-sm">{{ user.email }}</p>
            </div>

            <div class="space-y-2">
              <h2 class="text-sm font-semibold text-muted mb-1">Nom complet</h2>
              <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
                <input
                  v-model="fullName"
                  type="text"
                  placeholder="Ton nom complet"
                  class="w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
                <button
                  type="button"
                  class="btn btn-primary text-xs sm:text-sm shrink-0"
                  :disabled="savingProfile"
                  @click="onSaveProfile"
                >
                  {{ savingProfile ? 'Enregistrement…' : 'Mettre à jour' }}
                </button>
              </div>
              <p v-if="profileSaveMessage" class="text-xs text-[var(--color-success)]">
                {{ profileSaveMessage }}
              </p>
            </div>

            <div>
              <h2 class="text-sm font-semibold text-muted mb-1">Fuseau horaire</h2>
              <p class="text-sm">{{ profile.timezone || 'Europe/Paris' }}</p>
            </div>
          </div>

          <div v-else class="text-sm text-muted">
            Aucun profil trouvé pour cet utilisateur.
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const profile = ref<any | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const signingOut = ref(false)
const fullName = ref('')
const savingProfile = ref(false)
const profileSaveMessage = ref('')

const loadProfile = async () => {
  loading.value = true
  error.value = null

  // Récupère l'utilisateur courant directement via Supabase
  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (userError || !userData?.user?.id) {
    loading.value = false
    return
  }

  const userId = userData.user.id

  const { data, error: dbError } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle()

  loading.value = false

  if (dbError) {
    error.value = dbError.message
    return
  }

  profile.value = data
  fullName.value = data?.full_name ?? ''
}

const onSignOut = async () => {
  if (signingOut.value) return

  signingOut.value = true
  error.value = null

  const { error: signOutError } = await supabase.auth.signOut()

  signingOut.value = false

  if (signOutError) {
    error.value = signOutError.message
    return
  }

  await router.push('/')
}

const onSaveProfile = async () => {
  if (!profile.value || savingProfile.value) return

  savingProfile.value = true
  profileSaveMessage.value = ''
  error.value = null

  const { error: userError, data: userData } = await supabase.auth.getUser()

  if (userError || !userData?.user?.id) {
    savingProfile.value = false
    error.value = userError?.message ?? 'Impossible de récupérer ton utilisateur.'
    return
  }

  const userId = userData.user.id

  const { error: updateError } = await supabase
    .from('profiles')
    .update({ full_name: fullName.value || null })
    .eq('user_id', userId)

  savingProfile.value = false

  if (updateError) {
    error.value = updateError.message
    return
  }

  profile.value = {
    ...profile.value,
    full_name: fullName.value || null,
  }

  profileSaveMessage.value = 'Profil mis à jour.'
}

onMounted(() => {
  loadProfile()
})
</script>
