<template>
    <div :class="$style.ProductPage">

        <h1 :class="$style.title">
            {{ item.name }}
            <span>Артикул: {{ item.article }}</span>
        </h1>

        <div :class="$style.price">
            <span>{{ formattedPrice }} ₽</span>

            <PriceBanner v-if="item.is_good_price">
                {{ item.banner_text }}
            </PriceBanner>
        </div>

        <DeliveryBlock 
            city="Иркутск"
            :delivery="delivery"
        />
    </div>
</template>

<script>
import { splitThousands } from '~/assets/js/utils/numbers';
import DeliveryBlock from '../../../components/product/DeliveryBlock.vue';
import PriceBanner from '../../../components/product/PriceBanner.vue';

export default {
    components: {
        PriceBanner,
        DeliveryBlock,
    },

    data() {
        return {
            item: {
                name: "Серьги из золота с бриллиантами",
                article: "1022152",
                price: "8990",
                is_good_price: true,
                banner_text: 'Выгодная цена, невозможно применение дополнительных скидок и бонусных рублей.',
            },

            delivery: {
                courier: {
                    period: '1 мая',
                    price: 0,
                },
                pickup: {
                    period: '2 мая',
                    price: 1000,
                    point_count: 3,
                },
            },
        };
    },

    computed: {
        formattedPrice() {
            return splitThousands(this.item.price);
        },
    },
};
</script>

<style lang="scss" module>
    .ProductPage {
        padding: 0 16px;

        .title {
            margin: 24px 0 8px;
            font-family: $base-font;

            span {
                display: block;
                margin-top: 8px;
                opacity: .5;
                font-weight: 500;
            }
        }

        .price {
            margin-bottom: 32px;
            
            span {
                margin-bottom: 4px;
                font-size: 24px;
                line-height: 32px;
                font-weight: 600;
            }
        }
    }
</style>
