<template>
  <TemplateBlock class="profile-block">
    <CommonBack @click.native="store.show_block = 'main'" />

    <div class="profile__wrap">
      <div class="profile__ava">
        <div class="profile__ava-media">
          <img
						v-if="store.user.profile?.photo"
            :src="store.user.profile?.photo"
            class="common-media"
            alt="ava photo"
          />
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
      <CommonConnectSocial />
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import { paths } from "@/utils/api/paths";
import type { ApiResponseInterface } from "@/types/common";

const messages = reactive({
  validation: "",
  status: "",
});

const formValues = reactive({
  phone: store.user.profile?.phone_number || "",
  age: store.user.profile?.age !== -1 ? store.user.profile?.age + "" : "",
  country: store.user.profile?.country || "",
  region: store.user.profile?.region || "",
});

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
