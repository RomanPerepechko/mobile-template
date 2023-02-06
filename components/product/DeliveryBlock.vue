<template>
    <div :class="$style.DeliveryBlock">

        <div :class="$style.city">
            <div>Доставка, <span>{{ city }}</span></div>
            <svg @click="openCityModal" :class="$style.icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        </div>

        <div :class="$style.types">
            <div :class="$style.type" v-if="delivery.courier">
                <svg xmlns="http://www.w3.org/2000/svg" :class="$style.icon" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                </svg>
                <div :class="$style.period">
                    <div :class="$style.name">Курьерская доставка</div>
                    <div :class="$style.term">{{ delivery.courier.period }}, {{ delivery.courier.price === 0 ? 'бесплатно' : splittedPrice(delivery.courier.price) }}</div>
                </div>
            </div>
            <div :class="$style.type" v-if="delivery.pickup">
                <svg xmlns="http://www.w3.org/2000/svg" :class="$style.icon" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                </svg>
                <div :class="$style.period">
                    <div :class="$style.name">Самовывоз из {{ delivery.pickup.point_count }} {{ pluralizedPoint(delivery.pickup.point_count) }}</div>
                    <div :class="$style.term">{{ delivery.pickup.period }}, {{ delivery.pickup.price === 0 ? 'бесплатно' : splittedPrice(delivery.pickup.price) }}</div>
                </div>
            </div>
        </div>

        <a href="/delivery" :class="$style.detail">
            Подробнее о доставке
        </a>

    </div>
</template>

<script>
import { splitThousands } from '~/assets/js/utils/numbers';
import { plural } from '~/assets/js/utils/text';

export default {
    props: {
        city: {
            type: String,
            default: 'Москва',
        },

        delivery: {
            type: Object,
            default: () => ({}),
        },
    },

    methods: {
        openCityModal() {

        },

        splittedPrice(price) {
            return splitThousands(price);
        },

        pluralizedPoint(count) {
          return plural(count, ['пункта', 'пунктов', 'пунктов']);
        },
    },
};
</script>

<style lang="scss" module>
    .DeliveryBlock {
        margin-bottom: 32px;
        
        .city {
            display: flex;
            column-gap: 8px;
            margin-bottom: 16px;
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;

            span {
                text-decoration: underline;
            }
        }

        .types {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            margin-bottom: 16px;
        }

        .type {
            display: flex;
            column-gap: 16px;
        }

        .icon {
            width: 16px;
            height: 16px;
            color: $black;
            opacity: .6;
        }

        .period {
            display: flex;
            flex-direction: column;
            row-gap: 8px;
        }

        .name {
            text-decoration: underline;
        }

        .term {
            color: #737373;
        }

        .detail {
            font-weight: 500;
            text-decoration: underline;
            letter-spacing: .22px;
        }
    }
</style>
