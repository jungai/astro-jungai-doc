<template>
  <nav class="h-screen w-[300px] sticky top-0">
    <ul>
      <li
        v-for="item in sideBar"
        :key="item.text"
        class="px-8 py-2 cursor-pointer"
        :class="{
          'text-2xl font-semibold': item.header,
          'hover:bg-gray-100': !item.header,
          'bg-gray-100': item?.link === currentPath,
        }"
      >
        <a class="block" :href="item?.link || '/'">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';
import { Sidebar } from '../config';

interface Props {
  sideBar: Sidebar[];
  currentPath: string;
}

const props = withDefaults(defineProps<Props>(), {
  sideBar: () => [],
  currentPath: '/guides',
});
</script>
