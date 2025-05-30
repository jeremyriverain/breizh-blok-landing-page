<script setup lang="ts">
import { useForm } from "vee-validate";
import { object, string } from "yup";
import nprogress from "nprogress";

const validationSchema = object({
  firstname: string().required(),
  name: string().required(),
  email: string().required().email(),
  message: string().required(),
  "form-name": string().required(),
});

const { defineField, errors, handleSubmit, setValues } = useForm({
  validationSchema,
});

let submittedStatus: Ref<"error" | "success" | null> = ref(null);

const [firstname, firstnameAttrs] = defineField("firstname");

const [name, nameAttrs] = defineField("name");

const [email, emailAttrs] = defineField("email");

const [message, messageAttrs] = defineField("message");

const [formName, formNameAttrs] = defineField("form-name");

setValues({
  "form-name": "contact",
});

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  submittedStatus.value = null;
  nprogress.start();

  try {
    console.log(window.location.href);
    const payload = new URLSearchParams(values).toString();
    console.log(payload);

    const response = await fetch(window.location.href, {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    submittedStatus.value = "success";
    resetForm();

    window.scrollTo(0, 0);
    console.log("response", response);
  } catch (error) {
    console.log(error);
    submittedStatus.value = "error";
  } finally {
    nprogress.done();
  }
});
</script>

<template>
  <div
    class="mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
    v-if="submittedStatus === 'error'"
  >
    <span class="block sm:inline"
      >{{ $t("anErrorOccured") }}. {{ $t("tryAgain") }}.</span
    >
  </div>

  <div
    class="mb-5 bg-green-100 border border-green-400 text-green-900 px-4 py-3 rounded relative"
    role="alert"
    v-if="submittedStatus === 'success'"
  >
    <span class="block sm:inline">{{ $t("yourMessageIsSent") }}.</span>
  </div>

  <form
    id="contact-form"
    novalidate
    name="contact"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="onSubmit"
    v-show="submittedStatus !== 'success'"
  >
    <input
      type="hidden"
      name="form-name"
      v-bind="formNameAttrs"
      v-model="formName"
    />

    <div class="mb-5">
      <label for="firstname" class="sr-only">{{ $t("firstName") }}</label>
      <input
        v-model="firstname"
        v-bind="firstnameAttrs"
        id="firstname"
        type="text"
        :placeholder="$t('firstName')"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="firstname"
      />
      <div v-if="errors.firstname" class="text-red-400 text-sm mt-1">
        {{ $t("thisFieldIsMandatory") }}.
      </div>
    </div>
    <div class="mb-5">
      <label for="name" class="sr-only">{{ $t("lastName") }}</label>
      <input
        v-model="name"
        v-bind="nameAttrs"
        type="text"
        :placeholder="$t('lastName')"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="name"
        id="name"
      />
      <div v-if="errors.name" class="text-red-400 text-sm mt-1">
        {{ $t("thisFieldIsMandatory") }}.
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">{{ $t("emailAddress") }}</label
      ><input
        v-model="email"
        v-bind="emailAttrs"
        id="email_address"
        type="email"
        :placeholder="$t('emailAddress')"
        name="email"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div v-if="errors.email" class="text-red-400 text-sm mt-1">
        {{ $t("enterValidEmail") }}.
      </div>
    </div>
    <div class="mb-5">
      <label for="message" class="sr-only">{{ $t("message") }}</label>
      <textarea
        v-model="message"
        v-bind="messageAttrs"
        id="message"
        name="message"
        required
        :placeholder="$t('message')"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      ></textarea>
      <div v-if="errors.message" class="text-red-400 text-sm">
        {{ $t("thisFieldIsMandatory") }}.
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>{{
      $t("submit")
    }}</LandingButton>
  </form>
</template>
