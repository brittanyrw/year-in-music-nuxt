<script setup>
const route = useRoute();
const albumStore = useAlbumStore();

const { data: album } = await useAsyncData(
  `album${route.params.id}`,
  async () => {
    if (route.params.id === "undefined") return albumStore.singleAlbum;
    await albumStore.fetchAlbum(route.params.id);
    return albumStore.singleAlbum;
  },
  {
    pick: ["fields", "sys"],
  }
);

useAsyncData("moreAlbums", async () => albumStore.fetchAdditionalAlbums());

</script>
<template>
  <div class="page">
    <AlbumHero />
    <section class="page-content" v-if="album">
      <article>
      <AlbumPageHeader :album="album" />
      <!-- Add album description here -->
      </article>
      <hr />
      <div
      v-if="albumStore.moreAlbums"
      class="album-container container"
    >
      <AlbumCard
        v-for="album in albumStore.moreAlbums"
        :album="album"
        :key="album.sys.id"
        class="album"
      />
    </div>
      <section />
    </section>
    <Footer />
  </div>
</template>
