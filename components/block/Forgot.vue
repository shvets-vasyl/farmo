<template>
  <TemplateBlock class="forgot-block">
    <CommonBack />

    <div class="forgot__wrap">
      <div class="forgot__title h2">Forgot Password?</div>
      <div class="forgot__descr h5">
        Don't worry! It occurs. Please enter the phone number linked with your
        account.
      </div>

      <Form
        class="forgot__form"
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
        </div>

        <div class="form__btn">
          <CommonButton type="submit" :is-red="true"> Send Code </CommonButton>
        </div>
      </Form>
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import * as Yup from "yup";
import type { ForgotValues } from "@/types/forms";

const formSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Is a required field")
    .min(10, "Must be at least 10 characters")
    .max(15, "Must be at most 15 characters"),
});

const onSubmit = async (values: ForgotValues) => {
  console.log(values);
};
</script>

<style lang="scss" scoped>
.forgot__title {
  text-align: center;
  margin-bottom: rem(16);
}
.forgot__wrap {
  padding-top: rem(70);
  display: flex;
  flex-direction: column;
}
.forgot__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.forgot__descr {
  width: rem(288);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: rem(46);
}
</style>
