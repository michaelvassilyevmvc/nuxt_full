<template>
  <div class="header">
    <div class="logo">
      <img src="assets/images/logo.png" alt="">
    </div>
    <div class="menu">
      <div class="menu__top">
        <ul>
          <li>
            <NuxtLink to="#" class="menu__top-item">Магазин</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="menu__top-item">О нас</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="menu__form">
        <div >
          <InputField variant="black" placeholder="Поиск" class="menu__form-input"/>
        </div>
        <div class="menu__form-buttons">
          <NuxtLink to="#">
            <Icon name="icons:basket" size="21px" class="menu__form-icon"/>
          </NuxtLink>
          <NuxtLink to="#">
            <Icon name="icons:favorite" size="21px" class="menu__form-icon"/>
          </NuxtLink>
          <NuxtLink to="#">
            <Icon name="icons:user" size="21px" class="menu__form-icon"/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 33px 95px;
}

.logo img {
  width: 158px;
  height: 40px;

}

.menu {
  display: flex;
  justify-content: space-between;
}
.menu__top{
  padding-right: 59px;
  border-right: 1px solid var(--color-dark-gray);
}
.menu__top ul {
  display: flex;
  justify-content: space-around;
  gap: 59px;
  list-style: none;
  line-height: 44px;
}

.menu__top-item{
  text-decoration: none;
  color: var(--color-black)
}
.menu__form{
  display: flex;
  justify-content: space-between;
  margin-left:20px;
}
.menu__form-input{
  width: 288px;
  height: 32px;
  margin-right: 20px;
}
.menu__form-buttons{
  display: flex;
  justify-content: space-around;
  gap:36px;
}
.menu__form-icon{
  color: var(--color-black);
}

</style>