<template>
  <div class="testing">
    <input type="file" @change="onFileChange" accept="image/*" />
    <button @click="uploadPhoto">Upload Photo</button>
    <p v-if="uploadStatus">{{ uploadStatus }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const uploadStatus = ref('');
const selectedFile = ref<File | null>(null);

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0];
  }
};

const uploadPhoto = async () => {
  if (!selectedFile.value) {
    uploadStatus.value = 'Please select a file first.';
    return;
  }

  const formData = new FormData();
  formData.append('file', selectedFile.value);

  try {

		const formData = new FormData()
    const file = "test"

    formData.append("document", new File([file!], "CV", { type: "png" }))

    const response = await $fetch("/api/send-file", {
      method: "POST",
      body: formData,
    })

		console.log(response);


  } catch (error) {
    uploadStatus.value = 'Failed to upload photo.';
    console.error('Error:', error);
  }
};
</script>

<style scoped>
/* Add your styles here */
.testing {
	position: relative;
	z-index: 1000;
}
</style>
