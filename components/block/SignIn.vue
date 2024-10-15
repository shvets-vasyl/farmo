<template>
  <TemplateBlock class="sign-in-block">
    <CommonBack />

    <div class="sign-in__wrap">
      <div class="sign-in__title h2">Welcome back!</div>

      <Form
        class="sign-in__form"
        :validation-schema="formSchema"
        @submit="onSubmit"
      >
        <div class="form__fields">
          <CommonInput
            class="form__field"
            placeholder="Enter your phone number"
            type="text"
            name="phone"
          />

          <CommonInput
            class="form__field"
            placeholder="Enter your password"
            type="password"
            name="password"
          />
        </div>

        <div class="form__forgot-pass">
          <div class="form__forgot-pass-btn h6">Forgot Password?</div>
        </div>

        <div class="form__btn">
          <CommonButton type="submit" :is-red="true"> Log in </CommonButton>
        </div>

        <div class="form__question">
          <CommonAccountExistQuestion
            text_1="Don’t have an account?"
            text_2="Register Now"
          />
        </div>
      </Form>
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import * as Yup from "yup";
import type { SignInValues } from "@/types/forms";

const formSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Is a required field")
    .min(10, "Must be at least 10 characters")
    .max(15, "Must be at most 15 characters"),
  password: Yup.string()
    .required("Is a required field")
    .min(6, "Password must be at least 6 characters"),
});

const onSubmit = async (values: SignInValues) => {
  console.log(values);
};
</script>

<style lang="scss" scoped>
.sign-in__title {
  text-align: center;
}
.sign-in__wrap {
  height: 100%;
  padding-top: rem(70);
  display: flex;
  flex-direction: column;
}
.form__forgot-pass {
  text-align: right;
  color: var(--c-grey-5);
  margin-top: rem(13);
  padding-right: rem(26);
}
.sign-in__form {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
</style>
