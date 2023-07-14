<template>
    <div class="sidebar" :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>

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

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-rounded">keyboard_double_arrow_down</span>
            </button>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';
const is_expanded = ref(false);
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}

</script>

<style lang="scss" scoped>
.sidebar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);
    transition: 0.2s ease-out;
    font-family: 'Roboto Mono', monospace;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }

        display: flex;
        justify-content: center;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;

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
                    transform: translateY(0.25rem);
                }
            }
        }
    }

    .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: none;
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

            &:hover,
            &.router-link-exact-active {
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

        }
    }

    &.is-expanded {
        height: 40vh;

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        .button .text {
            opacity: 1;

        }

        .button {
            display: flex;
            align-items: center;
            padding-left: 42vw;
            justify-content: left;

            .material-symbols-rounded {
                margin-right: 0.5rem;
            }
        }
    }

}
</style>
