<template>
  <div
    class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"
  >
    <form style="width: 500px" @submit.prevent="onSubmit">
      <fieldset>
        <legend v-if="isUpdate">Edit Article</legend>
        <legend v-else>New Article</legend>
        <div class="form-group">
          <label>Author Name</label>
          <input
            v-model="post.author"
            type="text"
            class="form-control"
            placeholder="Enter the name of the author..."
          />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input
            v-model="post.title"
            type="text"
            class="form-control"
            placeholder="Enter the title of the article..."
          />
        </div>
        <div class="form-group">
          <label>Subtitle</label>
          <input
            v-model="post.subtitle"
            type="text"
            class="form-control"
            placeholder="Enter the subtitle of the article..."
          />
        </div>
        <div class="form-group">
          <label>Articles</label>
          <textarea
            v-model="post.text"
            class="form-control"
            rows="5"
          ></textarea>
        </div>
        <button @click="$router.push('/admin')" class="btn btn-danger">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">Save</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: null,
        subtitle: null,
        author: null,
        text: null,
      },
    };
  },
  props: {
    isUpdate: {
      type: Boolean,
      required: false,
      default: false,
    },
    post: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    },
  },
  created() {
    this.post = this.post ? this.post: {
          id: null,
          title: null,
          subtitle: null,
          text: null,
          author: null,
        };
  },
};
</script>
