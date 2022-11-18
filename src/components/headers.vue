<template>
    <header class="header container">
        <div class="header__top top-header">
            <search class="top-header__search"/>
            <a href="#" class="top-header__logo">AVION</a>
            <cart class="top-header__cart"/>
            <acc class="top-header__acc"/>
            <navi class="top-header__navi" @click='shover'/>
        </div>
        <lines class="header__line"/> 
    </header>
    <ul class="nav-header nav-header-mini" v-if="nav">
        <close class="nav-header-mini__close" @click="shover"/>
        <template v-for="link in links" :key="`link: ${link}`">
            <li class="nav-header__li nav-header-mini__li"><a class="nav-header__a nav-header-mini__a" href="#" >{{link}}</a></li>
        </template>
    </ul>
    <ul class="nav-header nav-header-big">
        <template v-for="link in links" :key="`link: ${link}`">
            <li class="nav-header__li nav-header-big__li"><a class="nav-header__a nav-header-big__a" href="#" >{{link}}</a></li>
        </template>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
import search from 'Icons/search'
import cart from 'Icons/cart'
import acc from 'Icons/acc'
import navi from 'Icons/nav'
import lines from 'Elements/line.vue'
import close from 'Icons/close.vue'

const links = ['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery']
const nav = ref(false);

const shover = () => {
    nav.value = !nav.value
}
</script>

<style lang="scss" scoped>

.header{
    display: flex;
    flex-direction: column;
    position: relative;
    &__line{
        display: none;
        @media(min-width: 768px){
            display: block;
            width: 100%;
            height: 1px;
            background: #0000001A;
            margin-top: 28px;
        }
    }
}

.nav-header-mini{
    position: absolute;
    top: 69px;
    left: auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    background: #F6F6F6;
    box-sizing: border-box;
    padding: 20px;
    &__close{
        display: inline-block;
        width: inherit;
        text-align: right;
    }
    &__li{
        margin-top: 10px;
    }
    @media(min-width: 768px){
        display: none;
    }
}
.nav-header-big{
    display: none;
    margin-top: 20px;
    @media(min-width: 768px){
        display: flex;
        justify-content: center;
        background: inherit;
        padding: 0;
        &__li:not(:last-child){
            margin-right: 44px;
        }
    }
}
.top-header{
    display: grid;
    grid-template-columns: 1fr 0fr 0fr;
    grid-template-areas: "logo search navi";
    grid-gap: 30px;
    align-items: center;
    @media(min-width: 768px){
        grid-template-areas: "search logo cart acc";
        grid-template-columns: 1fr 1fr 0fr 0fr;
    }
    &__search{
        grid-area: search;
    }
    &__logo{
        font-size: 2em;
        letter-spacing: 5px;
        grid-area: logo;
        color: $mainBlack;
        line-height: 30px;
    }
    &__cart{
        display: none;
        grid-area: cart;
        @media(min-width: 768px){
            display: inline-block;
        }
    }
    &__acc{
        display: none;
        grid-area: acc;
        @media(min-width: 768px){
            display: inline-block;
        }
    }
    &__navi{
        grid-area: navi;
        @media(min-width: 768px){
            display: none;
        }
    }
}
.nav-header__a:hover{
    border-bottom: 1px solid $mainlightGrey;
}
</style>