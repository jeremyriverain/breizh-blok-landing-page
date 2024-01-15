<script setup lang="ts">
import { useForm } from "vee-validate";
import { object, string, type Asserts } from "yup";
import nprogress from "nprogress";

const validationSchema = object({
  firstName: string().required(),
  name: string().required(),
  email: string().required().email(),
  message: string().required(),
});

interface ContactForm extends Asserts<typeof validationSchema> {}

const { defineField, errors, handleSubmit } = useForm({
  validationSchema,
});

let submittedStatus: Ref<"error" | "success" | null> = ref(null);

const [firstName, firstNameAttrs] = defineField("firstName");

const [name, nameAttrs] = defineField("name");

const [email, emailAttrs] = defineField("email");

const [message, messageAttrs] = defineField("message");

function encode(data: ContactForm) {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          data[key as keyof ContactForm]
        )}`
    )
    .join("&");
}

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  submittedStatus.value = null;
  nprogress.start();

  try {
    const response = await $fetch("/contribute/", {
      method: "POST",
      body: encode(values as ContactForm),
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
      >Une erreur est survenue. Essayez à nouveau.</span
    >
  </div>

  <div
    class="mb-5 bg-green-100 border border-green-400 text-green-900 px-4 py-3 rounded relative"
    role="alert"
    v-if="submittedStatus === 'success'"
  >
    <span class="block sm:inline">Votre message a été envoyé.</span>
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
    <input type="hidden" name="form-name" value="contact" />

    <div class="mb-5">
      <label for="first_name" class="sr-only">Prénom</label>
      <input
        v-model="firstName"
        v-bind="firstNameAttrs"
        id="first_name"
        type="text"
        placeholder="Prénom"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="first name"
      />
      <div v-if="errors.firstName" class="text-red-400 text-sm mt-1">
        Prénom obligatoire.
      </div>
    </div>
    <div class="mb-5">
      <label for="name" class="sr-only">Nom</label>
      <input
        v-model="name"
        v-bind="nameAttrs"
        type="text"
        placeholder="Nom"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="name"
      />
      <div v-if="errors.name" class="text-red-400 text-sm mt-1">
        Nom obligatoire.
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">Adresse e-mail</label
      ><input
        v-model="email"
        v-bind="emailAttrs"
        id="email_address"
        type="email"
        placeholder="Adresse e-mail"
        name="email"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div v-if="errors.email" class="text-red-400 text-sm mt-1">
        Veuillez renseigner un email valide.
      </div>
    </div>
    <div class="mb-3">
      <label for="message" class="sr-only">Message</label>
      <textarea
        v-model="message"
        v-bind="messageAttrs"
        id="message"
        name="message"
        required
        placeholder="Votre message"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      ></textarea>
      <div v-if="errors.message" class="text-red-400 text-sm mt-1">
        Message obligatoire.
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>Envoyer</LandingButton>
  </form>
</template>
