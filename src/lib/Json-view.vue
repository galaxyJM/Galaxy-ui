<template>
    <div class="json-view">
        <div class="json-view-control" @click="toggle">
            <Icon class="icon-plus" id="plus" v-if="isClose" />
            <Icon class="icon-minus" id="minus" v-else />
        </div>
        <div class="json-view-content" v-if="!isClose">
            <div class="json-view-start">
                <span v-if="isArray">[</span>
                <span v-if="isObject">{</span>
            </div>
            <div class="json-view-body" v-for="(item, index) in handledData" :key="index">
                <div class="json-view-key" v-if="item.key">{{ `"${item.key}"` }}:</div>
                <div class="json-view-value" v-if="item.isArrayAndObject">
                    <json-view v-if="!isEmptyArrayAndObject(item.value)" :data="item.value"></json-view>
                    {{ isEmptyArrayAndObject(item.value) }}
                </div>
                <div class="json-view-value" v-else>{{ `${item.value}` }}</div>
            </div>
            <div class="json-view-end">
                <span v-if="isArray">]</span>
                <span v-if="isObject">}</span>
            </div>
        </div>
        <div class="json-view-show" v-else>
            <div class="json-view-show-wrapper" v-if="isArray">
                <span class="ellipsis">[ ... ]</span>
                <span class="quantity">
                    {{ `${handledData.length}items` }}
                </span>
            </div>
            <div class="json-view-show-wrapper" v-if="isObject">
                <span class="ellipsis">{ ... }</span>
                <span class="quantity">
                    {{ `${handledData.length}items` }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// json只含有对象 数组 布尔值 数字 字符串
import { computed, reactive, ref } from 'vue';
import Icon from '../components/Icon.vue';
let { data, deep = 0 } = defineProps(['data', 'deep'])
let isArray = computed(() => {
    return getDataType(data) === 'Array'
})
let isObject = computed(() => {
    return getDataType(data) === 'Object'
})
let isClose = ref(true)
let handledData = computed(() => {
    if (isArray.value) {
        return data.map((item) => {
            return {
                value: item,
                isArrayAndObject: isArrayAndObject(item)
            }
        })
    }
    return Object.keys(data).map((key) => {
        return {
            isArrayAndObject: isArrayAndObject(data[key]),
            value: data[key],
            key
        }
    })
})
function getDataType(data: any) {
    let typeString = Object.prototype.toString.call(data)
    let len = typeString.split(' ')[1].length
    return typeString.split(' ')[1].substring(0, len - 1)
}

function isArrayAndObject(data: any) {
    return getDataType(data) === 'Object' || getDataType(data) === 'Array'
}
function isEmptyArrayAndObject(data: any) {
    if (data.length === 0) { return '[]' }
    if (Object.keys(data).length === 0) { return '{}' }
}
function toggle() {
    isClose.value = !isClose.value
}



</script>

<style lang="scss">
.json-view {
    display: flex;
    

    &-control {
        color: black;
        align-self: start;
        margin-right: 5px;
    }

    &-show {
        color: black;

        &-wrapper {
            .quantity {
                font-size: 15px;
                color: grey;
                margin-left: 4px;
                font-style: italic;
            }
        }
    }
}

.json-view-content {
    display: flex;
    flex-direction: column;

    .json-view-body {
        padding-left: 20px;
        display: flex;
        margin-top: 5px;

        .json-view-key {
            color: #8c6325;
            flex-shrink: 0;
        }

        .json-view-value {
            color: #42b983;
            margin-left: 10px;
            word-break: break-all;
        }

        .json-view-start {
            color: black;
        }

        .json-view-end {
            color: black;
        }

    }
}
</style>