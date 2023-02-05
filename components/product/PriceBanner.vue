<template>
    <div :class="$style.PriceBanner">
        <slot></slot>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" module>
    .PriceBanner {
        width: 290px;
        padding: 16px;
        margin-right: auto;
        background: #d9d9d9;
        font-weight: 600;
    }
</style>
