<script lang="ts">
  // Imports de bibliotecas e módulos externos
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";

  // Imports locais
  import { state, todos } from "../store";
  import Item from "../lib/Item.svelte";

  // Estado local
  let value = "";

  // Funções auxiliares
  const addTodo = () => {
    todos.addTodo(value);
    value = "";
  };

  const logout = async () => {
    try {
      await state.logout();
    } catch (error) {
      state.alert({ color: "red", message: error.message });
    } finally {
      state.init(null);
      push("/");
    }
  };

  // Inicialização do componente
  onMount(todos.fetch);
</script>

<!-- Conteúdo Principal -->
<section class="container h-screen max-h-screen px-3 max-w-xl mx-auto flex flex-col">
  <div class="my-auto p-16 rounded-lg text-center">
    <div class="font-bold text-3xl md:text-5xl lg:text-6xl">
      📝 <br />
      &nbsp; Seus Desejos
    </div>

    <!-- Formulário de entrada do Todo -->
    <form on:submit|preventDefault={addTodo}>
      <input
        type="text"
        class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
        placeholder="🧞 A Inspiração é por sua conta."
        bind:value
      />
    </form>

    <!-- Lista de Todos -->
    <ul>
      {#each $todos as todo}
        <Item {todo} />
      {/each}
    </ul>
  </div>
</section>

<!-- Botão de Logout -->
<section class="fixed top-4 right-4">
  <button
    on:click={logout}
    class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
  >
    Sair 👋
  </button>
</section>
