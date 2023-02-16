<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 w-full h-20 mt-3 font-sans mt-4">
    <div class="container mx-auto flex justify-start max-w-screen-xl">
      <div class="logo">
        <img src="~/assets/img/logo-no-background.png" alt="flavor-fortress" class="w-64">
      </div>
      <div class="menu pl-5 text-base font-bold">
        <ul class="flex justify-between">
          <li class="p-3"><a href="">Home</a></li>
          <li class="p-3"><a href="">Recipes</a></li>
          <li class="p-3"><a href="">Blog</a></li>
          <li class="p-3"><a href="">Kitchens</a></li>
          <li class="p-3"><a href="">Products</a></li>
        </ul>
      </div>
      <div class="ml-auto text-base">
          <button class="hover:bg-red-400 bg-red-500 p-3 text-white rounded-3xl px-5 weight flex justify-between">
            <div class="pr-2"></div> <div>Submit Recipe</div>
          </button>
      </div>
    </div>
  </nav>
  <div class="container mx-auto max-w-screen-xl">
    <section>
      <div class="relative w-full h-80 bg-[url('~/assets/img/search-block-bg.jpg')] bg-center bg-cover flex">
        <div class="w-full bg-black/40 h-full absolute z-10"></div>
        <div class="px-20 z-20 justify-between w-full justify-center m-auto">
          <div class="flex flex-col w-full z-20 relative">
            <div class="text-white text-center font-bold text-4xl pb-5">
              <h1><span class="text-red-400">Discover</span> your next meal among <span class="text-bold text-red-400">1023</span> recipes</h1>
            </div>
            <div class="relative text-white m-auto flex w-full justify-between basis-14">
              <input placeholder="i need a recipe for.." type="text" class="flex-1 text-black focus:border-transparent focus:outline-none p-3 px-5 text-lg">
              <div class="hidden bg-white text-gray-400  align-middle flex items-center px-3 text-lg cursor-pointer" @click="advancedSearchClicked()">
                <div class="pr-2 flex h-full"></div> <div class="select-none">Advanced Search</div>
              </div>
              <div class="bg-black text-white p-3 px-5 flex m-auto h-full cursor-pointer ">
              </div>
              <div v-if="advancedSearch" class="absolute bg-white w-full border text-black shadow-lg box-border top-14">
                <div class="flex h-full justify-between p-6 box-border font-bold font-sm">
                  <div class="flex-1">
                    <h3 class="font-bold text-lg">By Categories</h3>
                    <div class="border-b-2 w-1/6 py-1 border-red-400"></div>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg">By Cousin</h3>
                    <div class="border-b-2 w-1/6 py-1 border-red-400"></div>
                  </div>
                  <div class="flex-1 px-5">
                    <h3 class="font-bold text-lg">By Difficulty</h3>
                    <div class="border-b-2 w-1/6 py-1 border-red-400"></div>
                    <div class="grid grid-cols-2 gap-2 pt-4 text-gray-600">
                      <div class="">
                        <input type="checkbox" id="easy">
                        <label for="easy" class="pl-2">Easy</label>
                      </div>
                      <div class="">
                        <input type="checkbox"> Medium
                      </div>
                      <div class="">
                        <input type="checkbox"> Hard
                      </div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg">By Time</h3>
                    <div class="border-b-2 w-1/6 py-1 border-red-400"></div>
                    <div class="grid grid-cols-2 gap-2 pt-4 text-gray-600">
                      <div class="">
                        <input type="checkbox" id="easy" class="rounded-none border-none">
                        <label for="easy" class="pl-2">30 Mins</label>
                      </div>
                      <div class="">
                        <input type="checkbox"> 1 Hour
                      </div>
                      <div class="">
                        <input type="checkbox"> 1 Hour +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <div class="grid gap-8 lg:grid-cols-4  sm:grid-cols-2">
        <div class="w-full row-span-5">
          <div class="w-full col-span-full">
            <h3 class="text-2xl">Posts</h3>
            <div class="w-20 h-1 bg-red-400 my-3"></div>
          </div>

        </div>
        <div class="w-full col-span-3">
          <h3 class="text-2xl">Top Rated Recipes</h3>
          <div class="w-20 h-1 bg-red-400 my-3"></div>
        </div>

        <div class="w-full group">
          <div class="w-full h-52 bg-cover bg-center bg-[length:100%] bg-[url(~/assets/img/recipes/pasta.png)] group-hover:bg-[length:120%] transition-all duration-500 hover:bg-[position:center_-1rem]"></div>
          <div class="mt-4 text-md font-bold text-red-500">Italian</div>
          <h3 class="text-2xl font-bold py-2 hover:text-red-400 cursor-pointer transition-all duration-300">Tasty Italian Pizza</h3>
          <span>

          </span>
          <span class="pl-2"><span class="text-lg">5 </span><span class="text-sm text-gray-400"> / 5</span></span>
          <div class="text-lg">
            Authentic Margherita Pizza: Homem ade dough, crushed tomatoes, mozzarella, basil
          </div>
        </div>
        <div class="w-full ">
          <div class="w-full h-52 bg-cover bg-center bg-[url(~/assets/img/recipes/shnitzel.png)] rounded-md"></div>
          <div class="mt-4 text-md font-bold text-red-500">Italian</div>
          <h3 class="text-2xl font-bold py-2">Tasty Italian Pizza</h3>
          <span>

          </span>
          <span class="pl-2"><span class="text-lg">5 </span><span class="text-sm text-gray-400"> / 5</span></span>
          <div>
            Authentic Margherita Pizza: Homemade dough, crushed tomatoes, mozzarella, basil
          </div>
        </div>
        <div class="w-full ">
          <div class="w-full h-52 bg-cover bg-center bg-[url(~/assets/img/recipes/pizza.png)]"></div>
          <div class="mt-4 text-md font-bold text-red-500">Italian</div>
          <h3 class="text-2xl font-bold py-2">Tasty Italian Pizza</h3>
          <span>

          </span>
          <span class="pl-2"><span class="text-lg">5 </span><span class="text-sm text-gray-400"> / 5</span></span>
          <div>
            Authentic Margherita Pizza: Homemade dough, crushed tomatoes, mozzarella, basil
          </div>
        </div>
        <div class="w-full ">
          <div class="w-full h-52 bg-cover bg-center bg-[url(~/assets/img/recipes/shnitzel.png)]"></div>
          <div class="mt-4 text-md font-bold text-red-500">Italian</div>
          <h3 class="text-2xl font-bold py-2">Tasty Italian Pizza</h3>
          <span>

          </span>
          <span class="pl-2"><span class="text-lg">5 </span><span class="text-sm text-gray-400"> / 5</span></span>
          <div>
            Authentic Margherita Pizza: Homemade dough, crushed tomatoes, mozzarella, basil
          </div>
        </div>
        <div class="w-full ">
          <div class="w-full h-52 bg-cover bg-center bg-[url(~/assets/img/recipes/brownies.png)]"></div>
          <div class="mt-4 text-md font-bold text-red-500">Italian</div>
          <h3 class="text-2xl font-bold py-2 ">Tasty Italian Pizza</h3>
          <span>

          </span>
          <span class="pl-2"><span class="text-lg">5 </span><span class="text-sm text-gray-400"> / 5</span></span>
          <div>
            Authentic Margherita Pizza: Homemade dough, crushed tomatoes, mozzarella, basil
          </div>
        </div>
        <div class="w-full ">
          <div class="w-full h-52 bg-cover bg-center bg-[url(~/assets/img/recipes/brownies.png)]"></div>
          <div class="mt-4 text-md font-bold text-red-500">Italian</div>
          <h3 class="text-2xl font-bold py-2 ">Tasty Italian Pizza</h3>
          <span>

          </span>
          <span class="pl-2"><span class="text-lg">5 </span><span class="text-sm text-gray-400"> / 5</span></span>
          <div>
            Authentic Margherita Pizza: Homemade dough, crushed tomatoes, mozzarella, basil
          </div>
        </div>
      </div>

    </section>
  </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const advancedSearch = ref(false)

const advancedSearchClicked = () => {
  advancedSearch.value = ! advancedSearch.value
}

</script>