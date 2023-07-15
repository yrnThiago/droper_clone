<script lang="ts" setup>
  import CustomRouterLink from "@/components/CustomComponents/CustomRouterLink.vue";
  import ApiService from "@/services/ApiService";
  import { AxiosError } from "axios";
  import HttpStatus from 'http-status-codes'
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const loginForm = ref({email: "", password: ""});
  const showPassword = ref(false);
  const showErrorCredentials = ref(false);
  const isLoading = ref(false);
  const router = useRouter();

  const apiService = new ApiService();
  const apiEndpoint = 'public/auth';

  const login = async () => {
    showErrorCredentials.value = false;
    isLoading.value = true;

    setTimeout(async () => {
      try{
        await apiService.post(`${apiEndpoint}/login`, loginForm.value);
        localStorage.setItem('is-auth', 'true')
        setTimeout(() => { router.push({ path: '/' })}, 1000)
      } catch (error) {
      if (error instanceof AxiosError && error.response?.status === HttpStatus.UNAUTHORIZED) {
        showErrorCredentials.value = true;
      } else {
        console.log('Oops! Algo deu errado. Por favor, tente novamente mais tarde.');
      }
    }

    isLoading.value = false;
    }, 1000)
  };

</script>

<template>

  <VRow no-gutters class="mt-4">
      <VTextField v-model="loginForm.email" type="email" variant="underlined" label="Email" base-color="black" color="black"></VTextField>
  </VRow>

  <VRow no-gutters class="mt-4">
    <v-text-field
      v-model="loginForm.password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      name="input-10-1"
      label="Senha"
      variant="underlined"
      base-color="black"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
  </VRow>

  <VRow no-gutters v-if="showErrorCredentials">
    <span class="text-center text-error">Email ou senha estão incorretos. Tente recuperar sua senha!</span>
  </VRow>

  <VRow no-gutters class="mt-4">
    <VBtn block color="black" @click="login" :disabled="isLoading">
      <span class="text-uppercase text-button">Entrar</span>
    </VBtn>
  </VRow>

  <VRow no-gutters justify="center" class="mt-12 text-medium-emphasis">
    <div class="d-flex flex-column text-center">
      <span>Não tem cadastro?</span>
      <span class="mt-3">Para se cadastrar você deve entrar com <CustomRouterLink to="/login" class="text-decoration-underline">Google, Facebook ou Apple Signin</CustomRouterLink>!</span>
    </div>

  </VRow>

  <VRow no-gutters justify="center" class="mt-12 text-medium-emphasis">
    <div class="d-flex flex-column text-center">
      <CustomRouterLink to="#" class="text-decoration-underline">
        <span class="text-subtitle-2 font-weight-300">Esqueci a senha</span>
      </CustomRouterLink>

      <CustomRouterLink to="#" class="text-decoration-underline">
        <span class="text-subtitle-2 font-weight-300">Fale conosco</span>
      </CustomRouterLink>

      <CustomRouterLink to="#" class="text-decoration-underline">
        <span class="text-subtitle-2 font-weight-300">Vender como loja PRO</span>
      </CustomRouterLink>
    </div>

  </VRow>

</template>
