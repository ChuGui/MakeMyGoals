<template>
  <div class="min-h-screen bg-primary-gradient">
    <main class="container-app min-h-screen flex flex-col py-10 sm:py-14">
      <!-- Hero -->
      <section class="flex flex-1 flex-col gap-10 lg:flex-row lg:items-center">
        <div class="flex-1 space-y-6 text-center lg:text-left text-white">
          <p class="badge badge-soft text-xs uppercase tracking-wide">
            Votre copilote pour tenir vos objectifs
          </p>

          <h1 class="h1 font-title">
            Transformez vos envies
            <span class="block font-normal">en un plan d’action clair.</span>
          </h1>

          <p class="max-w-xl text-sm sm:text-base text-muted" style="color: #E5E7EB;">
            MakeMyGoals prend votre grande ambition, la découpe en étapes annuelles, mensuelles et hebdomadaires,
            génère vos tâches de la semaine et organise chaque journée en fonction de vos progrès réels.
          </p>

          <div class="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button type="button" class="btn btn-primary">
              Créer un compte
            </button>

            <button type="button" class="btn btn-ghost">
              Découvrir le fonctionnement
            </button>
          </div>

          <p class="mt-3 text-xs" style="color: #E5E7EB;">
            Aucun engagement. Quelques minutes suffisent pour transformer un objectif flou en un plan d’action concret.
          </p>
        </div>

        <!-- Aperçu du fonctionnement rapide -->
        <div class="mt-8 flex-1 lg:mt-0">
          <div class="surface-elevated p-5 sm:p-6 lg:p-8">
            <p class="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
              Comment ça marche
            </p>

            <ol class="space-y-4 text-sm text-muted">
              <li class="flex gap-3">
                <span
                  class="flex h-7 w-7 flex-none items-center justify-center rounded-full"
                  style="background: var(--color-primary-start); color: #ffffff; font-size: 0.7rem; font-weight: 600;"
                >1</span>
                <div>
                  <h3 class="h3">Décrivez votre grand objectif</h3>
                  <p class="text-xs text-muted">
                    Qu’il s’agisse d’un projet pro, d’un side project ou d’une nouvelle habitude, partez d’une vision claire.
                  </p>
                </div>
              </li>

              <li class="flex gap-3">
                <span
                  class="flex h-7 w-7 flex-none items-center justify-center rounded-full"
                  style="background: var(--color-primary-mid); color: #ffffff; font-size: 0.7rem; font-weight: 600;"
                >2</span>
                <div>
                  <h3 class="h3">L’application découpe en étapes</h3>
                  <p class="text-xs text-muted">
                    MakeMyGoals transforme votre objectif en jalons annuels, mensuels et hebdomadaires accessibles.
                  </p>
                </div>
              </li>

              <li class="flex gap-3">
                <span
                  class="flex h-7 w-7 flex-none items-center justify-center rounded-full"
                  style="background: var(--color-primary-end); color: #ffffff; font-size: 0.7rem; font-weight: 600;"
                >3</span>
                <div>
                  <h3 class="h3">Vos tâches de la semaine sont générées</h3>
                  <p class="text-xs text-muted">
                    Chaque semaine, recevez une liste de tâches adaptées à votre rythme et à votre disponibilité.
                  </p>
                </div>
              </li>

              <li class="flex gap-3">
                <span
                  class="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-900"
                  style="color: #ffffff; font-size: 0.7rem; font-weight: 600;"
                >4</span>
                <div>
                  <h3 class="h3">Ajustement quotidien intelligent</h3>
                  <p class="text-xs text-muted">
                    En fin de journée, faites un bilan rapide. L’app réorganise automatiquement les prochaines journées.
                  </p>
                </div>
              </li>
            </ol>

            <div class="mt-5 surface p-4 text-xs text-muted">
              <p class="font-medium">Résultat :</p>
              <p>
                Un planning réaliste, ajusté en continu, qui vous aide à avancer sans vous sentir submergé(e).
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Bandeau bas de réassurance -->
      <section class="mt-10 border-t border-white/30 pt-6 text-xs text-muted sm:flex sm:items-center sm:justify-between">
        <p>
          Pensée pour les personnes qui veulent progresser sans passer leur vie à organiser leurs to-do.
        </p>
        <p class="mt-2 font-medium sm:mt-0">
          Commencez aujourd’hui, adaptez chaque semaine.
        </p>
      </section>
    </main>
  </div>
</template>
