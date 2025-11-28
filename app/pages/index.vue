<template>
  <div class="min-h-screen bg-white">
    <AppNavbar />

    <main class="container-app min-h-screen flex flex-col py-8 sm:py-10 gap-12">
      <!-- SECTION 1 — HERO -->
      <section class="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div class="flex-1 space-y-5 text-center lg:text-left text-[var(--color-text)]">
          <p class="badge badge-soft text-xs uppercase tracking-wide">
            Simple · Rapide · Sans stress
          </p>

          <h1 class="h1 font-title">
            Atteins tes objectifs,
            <span class="block font-normal">un jour après l’autre.</span>
          </h1>

          <p class="max-w-xl text-sm sm:text-base text-muted mx-auto lg:mx-0">
            Transforme ton ambition en un plan d’action simple.
            Tâches générées automatiquement. Avancement quotidien.
          </p>

          <div class="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button type="button" class="btn btn-primary">
              Créer mon compte
            </button>

            <button type="button" class="btn btn-ghost">
              Découvrir
            </button>
          </div>
        </div>

        <!-- Visuel d’illustration / Screenshot + timeline simple -->
        <div class="flex-1 mt-6 lg:mt-0">
          <div class="surface-elevated p-4 sm:p-6">
            <p class="text-xs font-semibold uppercase tracking-wide text-muted mb-3">
              Aperçu de l’application
            </p>

            <div class="mb-4 h-40 sm:h-48 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center text-xs text-muted">
              Screenshot du produit (plan semaine + tâches du jour)
            </div>

            <div class="flex flex-col gap-3 text-xs text-muted">
              <div class="flex items-center gap-2">
                <div class="h-6 w-6 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[0.7rem] text-[var(--color-text)]">
                  1
                </div>
                <span>Objectif → "Lancer mon side project"</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-6 w-6 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[0.7rem] text-[var(--color-text)]">
                  2
                </div>
                <span>Plan hebdomadaire généré automatiquement</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-6 w-6 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[0.7rem] text-[var(--color-text)]">
                  3
                </div>
                <span>Tâches du jour prêtes à être cochées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 — COMMENT ÇA MARCHE -->
      <section id="how" class="surface-elevated bg-white p-5 sm:p-6 text-[var(--color-text)]">
        <div class="mb-6 text-center">
          <p class="text-xs font-semibold uppercase tracking-wide text-muted">Processus</p>
          <h2 class="h2 mt-1">Simple comme 1, 2, 3</h2>
        </div>

        <div class="card-grid">
          <article class="surface p-5">
            <div class="mb-3 h-9 w-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)]">
              🎯
            </div>
            <h3 class="h3 mb-1">Tu définis ton objectif</h3>
            <p class="text-sm text-muted">Choisis ton but et ton délai.</p>
          </article>

          <article class="surface p-5">
            <div class="mb-3 h-9 w-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)]">
              📆
            </div>
            <h3 class="h3 mb-1">L’app crée ton plan hebdomadaire</h3>
            <p class="text-sm text-muted">Liste de tâches générée automatiquement.</p>
          </article>

          <article class="surface p-5">
            <div class="mb-3 h-9 w-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text)]">
              ✅
            </div>
            <h3 class="h3 mb-1">Tu avances chaque jour</h3>
            <p class="text-sm text-muted">Tâches organisées dans ta semaine.</p>
          </article>
        </div>
      </section>

      <!-- SECTION 3 — VALEUR POUR L’UTILISATEUR -->
      <section id="value">
        <div class="text-center text-[var(--color-text)]">
          <p class="text-xs font-semibold uppercase tracking-wide text-muted">Pourquoi c’est utile ?</p>
          <h2 class="h2 mt-1">Pourquoi MakeMyGoals ?</h2>
        </div>

        <div class="mt-4 card-grid">
          <article class="surface bg-white p-5">
            <h3 class="h3 mb-1">Clarté</h3>
            <p class="text-sm text-muted">Un plan simple, visible, motivant.</p>
          </article>

          <article class="surface bg-white/95 p-5">
            <h3 class="h3 mb-1">Motivation</h3>
            <p class="text-sm text-muted">Des tâches adaptées chaque jour.</p>
          </article>

          <article class="surface bg-white/95 p-5">
            <h3 class="h3 mb-1">Progression</h3>
            <p class="text-sm text-muted">Tu vois ton avancement en temps réel.</p>
          </article>
        </div>
      </section>

      <!-- SECTION 4 — APERÇU DE L’APP -->
      <section id="preview" class="surface-elevated bg-white p-5 sm:p-6 text-[var(--color-text)]">
        <div class="mb-6 text-center">
          <p class="text-xs font-semibold uppercase tracking-wide text-muted">Aperçu</p>
          <h2 class="h2 mt-1">Ton quotidien, réorganisé</h2>
        </div>

        <div class="card-grid">
          <article class="surface p-4 bg-white">
            <h3 class="h3 mb-2">Plan de la semaine</h3>
            <p class="text-xs text-muted mb-3">Vue d’ensemble de tes jalons et de tes priorités.</p>
            <div class="h-24 rounded-md bg-primary-gradient opacity-80"></div>
          </article>

          <article class="surface p-4">
            <h3 class="h3 mb-2">Tâches du jour</h3>
            <p class="text-xs text-muted mb-3">3 à 5 actions claires pour aujourd’hui.</p>
            <div class="space-y-2 text-xs text-muted">
              <div class="flex items-center gap-2">
                <span class="inline-block h-3 w-3 rounded-full" style="background: var(--color-primary-start);"></span>
                Une tâche importante liée à ton objectif.
              </div>
              <div class="flex items-center gap-2">
                <span class="inline-block h-3 w-3 rounded-full" style="background: var(--color-primary-mid);"></span>
                Une action rapide pour garder le rythme.
              </div>
              <div class="flex items-center gap-2">
                <span class="inline-block h-3 w-3 rounded-full" style="background: var(--color-primary-end);"></span>
                Un petit pas pour avancer sans pression.
              </div>
            </div>
          </article>

          <article class="surface p-4">
            <h3 class="h3 mb-2">Bilan du soir</h3>
            <p class="text-xs text-muted mb-3">Un moment rapide pour ajuster demain.</p>
            <div class="h-24 rounded-md bg-slate-900/90"></div>
          </article>
        </div>

        <p class="mt-6 text-center text-sm text-muted">
          Une interface pensée pour t’aider à rester concentré et avancer.
        </p>
      </section>

      <!-- SECTION 5 — APPEL À L’ACTION -->
      <section class="text-center text-[var(--color-text)]">
        <h2 class="h2 mb-3">Prêt à avancer chaque jour ?</h2>
        <p class="text-sm mb-4 text-muted">
          Commence avec un premier objectif et laisse MakeMyGoals organiser la suite.
        </p>
        <button type="button" class="btn btn-primary">
          Créer mon compte maintenant
        </button>
        <p class="mt-2 text-xs text-muted">
          Gratuit au lancement.
        </p>
      </section>

      <!-- FOOTER -->
      <AppFooter />
    </main>
  </div>
</template>
