<template>
  <footer
    class="border-t border-[var(--color-border)] bg-white pt-4 pb-6 text-xs text-[var(--color-text-muted)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 container-app"
  >
    <p>© {{ new Date().getFullYear() }} MakeMyGoals</p>
    <nav class="flex flex-wrap gap-4">
      <a href="#" class="hover:underline">À propos</a>
      <a href="#" class="hover:underline">Contact</a>
      <a href="#" class="hover:underline">Mentions légales</a>
      <a href="#" class="hover:underline">Politique de confidentialité</a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
</script>
