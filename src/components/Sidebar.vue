<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-rounded">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-symbols-rounded">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-symbols-rounded">mood</span>
                <span class="text">About</span>
            </router-link>
            <router-link class="button" to="/resume">
                <span class="material-symbols-rounded">description</span>
                <span class="text">Resume</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-symbols-rounded">contact_page</span>
                <span class="text">Contact</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>

import { ref } from 'vue';
const is_expanded = ref(false);
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}

</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: 4rem;
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    height: 100%;

    background-color: var(--dark);
    color: var(--light);
    transition: 0.2s ease-out;
    font-family: 'Roboto Mono', monospace;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        right: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-symbols-rounded {
                transition: 0.2s ease-out;
                font-size: 2rem;
                color: var(--light);
            }

            &:hover {
                .material-symbols-rounded {
                    color: var(--primary);
                    transform: translateX(0.25rem);
                }
            }
        }
    }

    h3, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-symbols-rounded {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-symbols-rounded,
                .text {
                    color: var(--primary);
                }

                .material-symbols-rounded {
                    font-variation-settings:
                        'FILL' 1
                }
            }
            
            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;

        }

        .button {
            .material-symbols-rounded {
                margin-right: 0.5rem;
            }
        }
    }

}

</style>
