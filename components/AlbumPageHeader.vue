<script setup>
defineProps({
  album: {
    type: Object,
    required: true,
  }
});

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
</script>

<template>
  <section class="album-page-header">
    <img
      class="album-page-image"
      :src="album.fields.albumCover?.fields.file.url"
      :alt="album.fields.albumCover?.fields.description"
    />
    <div class="album-page-info">
      <h2>
        {{ monthNames[new Date(album.fields.favoriteMonth).getUTCMonth()] }}
      </h2>
      <h1 class="album-page-title">{{ album.fields.name }} ({{ album.fields.releaseYear }})</h1>
      <p class="album-page-subtitle">{{ album.fields.artistName }}</p>
      <ul class="music-labels">
        <li
          class="mood"
          v-if="album.fields.mood.length > 0"
          v-for="mood in album.fields.mood"
          key="{{mood}}"
        >
          {{ mood }}
        </li>
        <li class="language" v-if="album.fields.language.length > 0" v-for="language in album.fields.language"
          key="{{language}}">
          {{ language }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
