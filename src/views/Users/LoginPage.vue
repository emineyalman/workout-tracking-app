<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="form.email"
          :readonly="loading"
          :rules="[required(form.email)]"
          class="mb-2"
          clearable
          label="Email"
          append-inner-icon="mdi-email"
          type="email"
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          :readonly="loading"
          :rules="[required(form.password)]"
          clearable
          label="Password"
          placeholder="Enter your password"
          append-inner-icon="mdi-key"
          type="password"
        ></v-text-field>

        <br>

        <v-btn
        :disabled="!form.email || !form.password"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>

        <v-checkbox
            v-model="form.remember"
            label="Remember me"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
      </v-form>
    </v-card>
  </v-sheet>
</template>





<!-- <template>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="form.email"
          label="E-mail"
          :rules="emailRules"
        ></v-text-field>
  
        <v-text-field
          v-model="form.password"
          label="Password"
          :rules="passwordRules"
        ></v-text-field>
  
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </template>

<script setup>
import { ref } from 'vue';

const form = ref({
  email: '',
  password: '',
});

const email = ref('');
const emailRules = [
  value => {
    if (value?.length > 3) return true;

    return 'You must use @ tag.';
  },
];

const password = ref('123kk');
const passwordRules = [
  value => {
    if (/[^0-9]/.test(value)) return true;

    return 'Your password must be integer and string';
  },
];

console.log(email.value, password.value)
</script> -->
