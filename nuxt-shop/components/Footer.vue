<template>
  <div class="footer__wrapper">
    <footer>
      <!--        left side-->
      <div class="side__left">
        <menu class="menu">
          <NuxtLink  v-for="item in menuList" :key="item" class="footer-menu__item" to="/">{{ item }}</NuxtLink>
        </menu>
        <div class="footer__product-info">
          © 2024 Shoppe
        </div>
      </div>

      <!--    Right side-->
      <div class="side__right">
        <InputField class="footer-input" variant="gray" placeholder="Ваш email для акций и предложений"/>
        <div>
<!--          <Icon name="icons:twitter" />-->
<!--          <NuxtLink v-for="icon in icons" :key="icon" to="/">-->
<!--          </NuxtLink>-->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const menuList = ref<Array<string>>([
  'КОНТАКТЫ', 'УСЛОВИЯ ПОКУПКИ', 'ДОСТАВКА И ВОЗВРАТ'
]);

const icons = ref<Array<string>>([
  'linkedin', 'facebook', 'instagram', 'twitter',
])

const linkIcon = ((iconName: string) => {
  return `icons:${iconName}`;
})


</script>

<style scoped>
.footer__wrapper {
  display: flex;
  justify-content: center;
}

footer {
  border-top: 1px solid var(--color-gray);
  width: 1040px;
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}

.menu {
  display: flex;
  justify-content: space-around;
  gap: 29px;
  padding:0;
}

.footer-menu__item {
  text-decoration: none;
  color: var(--color-dark-gray);
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
}
.footer__product-info{
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: var(--color-black);
  margin-top:57px;
}

.footer-input{
  margin-top:-5px;
}
</style>