<template>
  <div>
    我是首页
    <TypeNav></TypeNav>
    <Focus></Focus>
    <div class="w container OfferContainer">
      <SpecialOffer></SpecialOffer>
      <SpecialOffer></SpecialOffer>
    </div>
  </div>
</template>

<script>
import Focus from "@/pages/Home/Foucs";
import SpecialOffer from "@/pages/Home/SpecialOffer";

export default {
  name: "Home",
  components: {
    Focus,
    SpecialOffer,
  },
};
</script>

<style>
.OfferContainer {
  margin: 20px auto;
}
</style>