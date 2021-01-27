<template>
  <div class="tooltip onb-method-switcher__info tooltip--light">
    <div
      class="tooltip__tip-position"
      style="
        position: absolute;
        will-change: transform;
        top: 0px;
        left: 0px;
        transform: translate3d(34px, 12px, 0px);
      "
      x-placement="right"
    >
      <!---->
    </div>
    <div class="tooltip__trigger">
      <span class="icon icon--normal icon--question-mark"
        ><svg
          viewBox="0 0 8 12"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          class=""
        >
          <path
            d="M2.293 5.335c.873-.045 1.541-.218 2-.524.46-.304.69-.822.69-1.554v-.299c0-.631-.173-1.111-.517-1.437-.345-.327-.794-.491-1.345-.491-.426 0-.747.05-.966.15v.1c.183.088.336.227.457.415.121.188.181.394.181.615 0 .377-.118.696-.353.956-.236.259-.578.39-1.026.39-.426 0-.767-.129-1.026-.39C.129 3.006 0 2.659 0 2.227c0-.311.083-.601.25-.872.167-.272.408-.507.724-.707A4.033 4.033 0 012.129.175 6.304 6.304 0 013.69 0c1.494 0 2.586.283 3.276.848C7.655 1.413 8 2.182 8 3.158c0 .543-.109 1.019-.328 1.429-.217.409-.53.765-.913 1.039-.421.297-.89.524-1.388.673a8.293 8.293 0 01-1.733.332v1.313H2.293V5.335zm.69 6.664c-.507 0-.891-.141-1.155-.423a1.445 1.445 0 01-.397-1.022v-.067c0-.399.133-.74.397-1.022.264-.283.649-.424 1.155-.424s.891.141 1.155.424c.264.282.396.623.396 1.022v.067c0 .398-.132.739-.396 1.022-.264.282-.65.423-1.155.423z"
            fill-rule="nonzero"
          ></path></svg
      ></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
