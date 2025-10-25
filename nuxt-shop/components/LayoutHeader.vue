<template>
  <div class="header">
    <NuxtLink to="/">
      <IconLogo/>
    </NuxtLink>
    <div class="header__content">
      <div class="header__menu">
        <NuxtLink to="/catalog">Магазин</NuxtLink>
        <NuxtLink to="/about">О нас</NuxtLink>
      </div>
      <div class="header__hr"></div>
      <div class="header__icons">
        <NuxtLink to="#">
          <Icon name="icons:search" size="21px"/>
        </NuxtLink>
        <NuxtLink to="/cart">
          <Icon name="icons:cart" size="21px"/>
        </NuxtLink>
        <NuxtLink to="/favorites">
          <Icon name="icons:favorite" size="21px"/>
        </NuxtLink>
        <NuxtLink to="/account">
          <Icon name="icons:user" size="21px"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.header {
  width: 100%;
  margin: 48px auto 0;
  max-width: 1280px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray);

  &__content {
    display: flex;
    gap: 60px;
    align-items: center;
  }

  &__menu {
    display: flex;
    gap: 60px;
    align-items: center;
  }

  &__menu a {
    font-size: 16px;
    line-height: 27px;
    color: var(--color-black);
    text-decoration: none;
    padding-bottom: 48px;

  }

  &__menu a.router-link-active {
    border-bottom: 1px solid var(--color-black);
  }

  &__menu a:hover {
    color: var(--color-dark-gray);
  }

  &__icons {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  &__icons a {
    padding-bottom: 48px;
  }

  &__icons a.router-link-active {
    border-bottom: 1px solid var(--color-black);
  }

  &__hr {
    border-left: 1px solid var(--color-dark-gray);
    height: 17px;
    align-self: flex-start;
    margin-top: 4px;
  }

}


</style>