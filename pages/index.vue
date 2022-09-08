<script setup>
const albumStore = useAlbumStore();
useAsyncData("albums", async () => albumStore.fetchAlbums());

</script>
<template>
  <div>
    <HomeHero />
    <div
      v-if="albumStore.albums"
      class="album-container container"
    >
      <AlbumCard
        v-for="album in albumStore.albums"
        :album="album"
        :key="album.sys.id"
        class="album"
      />
    </div>
    <Footer />
  </div>
</template>
