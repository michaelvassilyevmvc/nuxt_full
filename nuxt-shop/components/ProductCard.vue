<template>
  <div class="product">
    <div class="product__display">
      <img src="~/assets/images/test-product.png" alt="">
      <div class="product__display-info">
        <div class="product__info-procent">
          -21%
        </div>
        <div class="product__info-favorite">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.875 0C12.231 0.0520888 10.6777 0.77861 9.56899 2.01405C8.4603 0.77861 6.90699 0.0520888 5.26295 0C2.3563 0 0 2.39588 0 5.35135C0 9.16541 4.54527 13.3784 6.6983 15.5676L8.88003 17.7859C9.01449 17.9228 9.19691 17.9998 9.38718 18H9.7508C9.94108 17.9998 10.1235 17.9228 10.258 17.7859L12.4397 15.5676C14.5927 13.3784 19.138 9.16541 19.138 5.35135C19.138 2.39588 16.7817 0 13.875 0Z"
                fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="product__info">
      <div class="product__info-title">Lira Earrings</div>
      <div class="product__info-price">$20,00</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 24px;
}

.product__display {
  position: relative;
}

.product__display-info {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 16px 20px 16px 16px;
  width: 100%;

}


.product__info-procent {
  padding: 2px 8px;
  background-color: var(--color-accent);
  font-weight: 400;
  font-family: inherit;
  font-size: 12px;
  line-height: 20px;
  color: var(--color-white-light);
}

.product__info-favorite {
  width: 18px;
  height: 18px;
  color: var(--color-accent);
}

.product__info {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: var(--color-black);
  }

  &-price{
    color: var(--color-accent);
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }
}
</style>