<template>
  <TemplateBlock class="profile-block">
    <CommonBack @click.native="store.show_block = 'main'" />

    <div class="profile__wrap">
      <div
        class="profile__ava"
        :class="{ '_without-ava-photo': !store.user.profile?.photo }"
        @click="pickPhoto"
      >
        <div class="profile__ava-media">
          <IconsLogo v-if="!store.user.profile?.photo" />
          <img
            v-else
            :src="store.user.profile.photo"
            class="common-media"
            alt="ava photo"
          />
        </div>

        <div class="profile__ava-edit">
          <IconsEdit />
        </div>

        <input
          class="profile__file-input"
          type="file"
          accept="image/*"
          @change="onChangeInputFile"
        />

        <div class="profile__ava-message t2">
          {{ messages.ava }}
        </div>
      </div>

      <div class="profile__name">
        {{ store.user.profile?.first_name }}
      </div>
      <div v-if="store.user.profile?.last_name" class="profile__last-name h5">
        {{ store.user.profile?.last_name }}
      </div>

      <form class="profile__form" @submit.prevent="onSubmit">
        <div class="form__fields">
          <CommonInput
            class="form__field"
            name="phone"
            label="Phone Number"
            :readonly="true"
            v-model="formValues.phone"
          />

          <CommonInput
            class="form__field"
            name="age"
            label="Your Age"
            v-model="formValues.age"
          />

          <CommonInput
            class="form__field"
            :placeholder="formValues.country"
            name="country"
            label="Country"
            v-model="formValues.country"
          />

          <CommonInput
            class="form__field"
            :placeholder="formValues.region"
            name="region"
            label="Region"
            v-model="formValues.region"
          />
        </div>

        <div class="form__btn">
          <CommonButton type="submit" :is-red="true"> Save </CommonButton>
        </div>

        <div class="form__error">
          <CommonMessage
            v-if="messages.validation"
            :text="messages.validation"
						:status="messages.status"
          />
        </div>
      </form>
    </div>

    <div class="profile__wallet">
      <div class="profile__wallet-title t1">Wallet</div>
      <div class="profile__wallet-options">
        <CommonTonButton />
        <CommonConnectWalletButton />
      </div>
    </div>

    <div class="profile__inst">
      <div class="instagram__btn">
        <CommonButton :is-red="true">
          <IconsInstagram />
          <span> Log in with Instagram </span>
        </CommonButton>
      </div>
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import { paths } from "@/utils/api/paths"
import type { ApiResponseInterface } from "@/types/common"

const messages = reactive({
  ava: "",
  validation: "",
	status: ""
});

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_WIDTH = 500;
const MAX_HEIGHT = 500;

const formValues = reactive({
  phone: store.user.profile?.phone_number || "",
  age: store.user.profile?.age !== -1 ? store.user.profile?.age + "" : "",
  country: store.user.profile?.country || "",
  region: store.user.profile?.region || "",
});

const pickPhoto = () => {
  const fileInput = document.querySelector(
    ".profile__file-input"
  ) as HTMLInputElement;
  fileInput.click();
};

const onChangeInputFile = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const file = input?.files ? input.files[0] : null;

  if (file) {
    if (file.size > MAX_FILE_SIZE) {
      messages.ava = "The file exceeds the maximum size of 5 MB.";
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;

      img.onload = () => {
        if (img.width > MAX_WIDTH || img.height > MAX_HEIGHT) {
          messages.ava =
            "The image exceeds the maximum dimensions of 500x500 pixels.";
          return;
        }

        if (store.user.profile) {
          store.user.profile.photo = img.src;
        }
      };
    };

    reader.readAsDataURL(file);
  }
};

const onSubmit = async () => {
  try {
    const response = await $fetch<ApiResponseInterface>("/api/update-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
				path: `${paths.user_edit}/${store.user.profile?.user_id}`,
        age: Number(formValues.age) || "",
        country: formValues.country || "",
        region: formValues.region || "",
      }),
    });

		messages.status = response.status;

    if (response.message) {
      messages.validation = response.message;
    } else {
      messages.validation = "Profile updated successfully";
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
</script>

<style lang="scss" scoped>
.profile__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: rem(34);
  flex-direction: column;
}
.profile__ava {
  width: rem(104);
  flex: 0 0 rem(104);
  height: rem(104);
  border-radius: 100%;
  border: 1px solid var(--c-grey-5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: rem(20);
}
.profile__ava-media {
  height: 100%;
  overflow: hidden;
  border-radius: 100%;
}
.profile__ava._without-ava-photo {
  padding: rem(20) rem(16) rem(16);
}
.profile__ava._without-ava-photo .profile__ava-media {
  overflow: visible;
}
.profile__ava-edit {
  position: absolute;
  width: rem(31);
  height: rem(31);
  border-radius: 100%;
  background: #5d5e61;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: rem(-14);
}
.profile__file-input {
  display: none;
}
.profile__ava-message {
  position: absolute;
  top: 50%;
  left: 100%;
  margin-left: rem(12);
  transform: translateY(-50%);
  text-align: center;
  width: rem(150);
  color: var(--c-red);
}
.profile__name {
  font-size: rem(20);
  font-family: var(--font-700);
  text-align: center;
}
.profile__last-name {
  text-align: center;
  opacity: 0.7;
  margin-top: rem(4);
}
.profile__form {
  width: 100%;
  margin-top: rem(32);
}
.form__btn {
  padding-left: rem(26);
  padding-right: rem(26);
  margin-top: rem(24);
}
.profile__form .form__field:not(:last-child) {
  margin-bottom: rem(20);
}
.profile__wallet,
.profile__inst {
  padding-left: rem(26);
  padding-right: rem(26);
  margin-top: rem(24);
}
.profile__wallet-options {
  margin-top: rem(24);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(24);
}
.form__error {
  padding-left: rem(26);
  padding-right: rem(26);
  margin-top: rem(8);
}
</style>
