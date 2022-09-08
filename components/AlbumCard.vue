<script setup>
defineProps({
  album: {
    type: Object,
    required: true,
  },
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
  <NuxtLink :to="{ name: 'albums-id', params: { id: album.sys.id } }">
    <div class="album">
      <h2 class="album-month">
        {{ monthNames[new Date(album.fields.favoriteMonth).getUTCMonth()] }}
      </h2>
      <img
        class="album-image"
        :src="album.fields.albumCover?.fields.file.url"
        :alt="album.fields.albumCover?.fields.description"
      />
      <div class="album-info">
        <div class="album-details">
          <h4 class="album-title">
            {{ album.fields.name }} ({{ album.fields.releaseYear }})
          </h4>
          <p>{{ album.fields.artistName }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
