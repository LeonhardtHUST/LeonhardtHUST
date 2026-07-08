<script setup lang="ts">
import { Content, useData } from 'vitepress'
import Profile from './content/profile.md'

const { frontmatter } = useData()
</script>

<template>
  <main v-if="frontmatter.layout === 'split-home'" class="split-home">
    <aside class="profile-pane">
      <Profile />
    </aside>

    <div class="divider" />

    <article class="main-content">
      <Content />
    </article>
  </main>

  <main v-else class="normal-page">
    <Content />
  </main>
</template>