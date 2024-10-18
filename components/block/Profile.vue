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

      <Form
        class="profile__form"
        :validation-schema="formSchema"
        @submit="onSubmit"
      >
        <div class="form__fields">
          <CommonInput
            class="form__field"
            :placeholder="store.user.profile?.phone_number.replace(/^\+/, '') || ''"
            type="text"
            name="phone"
            label="Phone Number"
          />

          <CommonInput
            class="form__field"
            :placeholder="`${
              store.user.profile?.age !== -1 ? store.user.profile?.age : ''
            }`"
            type="text"
            name="age"
            label="Your Age"
          />

          <CommonInput
            class="form__field"
            :placeholder="store.user.profile?.country || ''"
            type="text"
            name="country"
            label="Country"
          />

          <CommonInput
            class="form__field"
            :placeholder="store.user.profile?.region || ''"
            type="text"
            name="region"
            label="Region"
          />
        </div>

        <div class="form__btn">
          <CommonButton type="submit" :is-red="true"> Save </CommonButton>
        </div>
      </Form>
    </div>

    <div class="profile__wallet">
      <div class="profile__wallet-title t1">Wallet</div>
      <!-- <button class="profile__wallet-add">
				<IconsInvite />
				<div class="t1">
					Connect
				</div>
			</button> -->
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
import { Form } from "vee-validate";
import * as Yup from "yup";
import type { ProfileValues } from "@/types/forms";

const messages = reactive({
  ava: "",
});
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_WIDTH = 500;
const MAX_HEIGHT = 500;

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

const onSubmit = async (values: ProfileValues) => {
  try {
    const response = await $fetch("/api/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: store.user.profile?.user_id,
        age: values.age,
        country: values.country,
        region: values.region,
      }),
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const formSchema = Yup.object().shape({
  phone: Yup.string()
    .min(10, "Must be at least 10 characters")
    .max(15, "Must be at most 15 characters"),
  age: Yup.string(),
  country: Yup.string(),
  region: Yup.string(),
});
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
.profile__wallet-add {
  display: flex;
  align-items: center;
  gap: rem(8);
  margin-top: rem(24);
}
.profile__wallet-options {
  margin-top: rem(24);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(24);
}
</style>
