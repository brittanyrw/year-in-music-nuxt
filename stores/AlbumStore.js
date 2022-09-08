import { defineStore } from "pinia";
export const useAlbumStore = defineStore("AlbumStore", {
  state: () => {
    return {
      albums: [],
      moreAlbums: [],
      singleAlbum: null,
    };
  },
  actions: {
    async fetchAlbums() {
      const { $contentful } = useNuxtApp();
      const entries = await $contentful.getEntries({
        content_type: "album",
        limit: 12,
        order: 'fields.favoriteMonth'
      });
      this.albums = entries.items;
      return this.albums;
    },
    async fetchAdditionalAlbums() {
      const { $contentful } = useNuxtApp();
      const entries = await $contentful.getEntries({
        content_type: "album",
        limit: 12,
        order: 'fields.favoriteMonth'
      });
      let randomAlbums = [...entries.items].sort(() => 0.5 - Math.random())
      this.moreAlbums = randomAlbums.slice(0, 3);
      return this.moreAlbums;
    },
    async fetchAlbum(id) {
      const { $contentful } = useNuxtApp();
      this.singleAlbum = await $contentful.getEntry(id);
      return this.singleAlbum;
    },
  },
});