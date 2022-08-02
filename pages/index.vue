<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";
import About from "@/components/home/About";
export default {
  components: {
    PostList,
    About,
  },
  // data() {
  //   return {
  //     fetchedPosts: [],
  //   };
  // },
  created() {
    // this.$store.dispatch("setPosts", this.fetchedPosts);
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    },
  },
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     context.store.dispatch("setPosts", [
  //       {
  //         id: 1,
  //         title: "Mikail Aydın'ın Köşe Yazıları",
  //         subtitle: "Bu Bir Subtitle !",
  //         text: "Mikail Aydın'ın Köşe Yazılarını Bu Sitede Takip Edebilirsiniz",
  //         author: "Mikail Aydın",
  //       },
  //       {
  //         id: 2,
  //         title: "Kübra Aydın'ın Köşe Yazıları",
  //         subtitle: "Bu Bir Subtitle !",
  //         text: "Kübra Aydın'ın Köşe Yazılarını Bu Sitede Takip Edebilirsiniz",
  //         author: "Kübra Aydın",
  //       },
  //     ]);
  //     resolve();
  // reject(new Error());
  //   }).catch((e) => {
  //     context.error(new Error());
  //   });
  // setTimeout(() => {
  //   callback(null, {
  // fetchedPosts: [
  //   {
  //     id: 1,
  //     title: "Mikail Aydın'ın Köşe Yazıları",
  //     subtitle: "Bu Bir Subtitle !",
  //     text: "Mikail Aydın'ın Köşe Yazılarını Bu Sitede Takip Edebilirsiniz",
  //     author: "Mikail Aydın",
  //   },
  //   {
  //     id: 2,
  //     title: "Kübra Aydın'ın Köşe Yazıları",
  //     subtitle: "Bu Bir Subtitle !",
  //     text: "Kübra Aydın'ın Köşe Yazılarını Bu Sitede Takip Edebilirsiniz",
  //     author: "Kübra Aydın",
  //   },
  // ],
  //   });
  // }, 2000);
  // },
};
</script>
<style scoped></style>
