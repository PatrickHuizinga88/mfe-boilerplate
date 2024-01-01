<template>

  <NuxtLoadingIndicator color="#2E994A"/>

  <LayoutSidebar ref="sidebar"/>

  <div class="lg:pl-72">
    <header class="py-7">
      <LayoutContainer>
        <div class="flex justify-between items-center">
          <!-- <UiBreadcrumbs/> -->
          <div class="flex">
            <div class="hidden sm:block">
              <UiIconInput type="search" class="!w-64" placeholder="Search...">
                <UiIcon name="MagnifyingGlass" class="h-5 w-5 stroke-2" aria-hidden="true"/>
              </UiIconInput>
            </div>
            <button>
              <UiIcon name="MagnifyingGlass" class="sm:hidden h-6 w-6 stroke-2"/>
            </button>
          </div>
        </div>
      </LayoutContainer>
    </header>

    <div class="pt-4 pb-6">
      <LayoutContainer>
        <slot/>
      </LayoutContainer>
    </div>
  </div>

</template>

<script setup lang="ts">
import { IconInput as UiIconInput, Icon as UiIcon } from 'ui'
</script>