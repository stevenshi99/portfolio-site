<template>
    <main class="contact-page">
        <h1>Contact</h1>
        <p>Contact me!</p>
        <div class="images">
            <div class="image">
                <a href="https://github.com/stevenshi99" target="_blank">
                    <img src="@/assets/BigGithub.png" alt="">
                </a>
            </div>
            <div class="image">
                <a href="https://www.linkedin.com/in/stevenshi99/" target="_blank">
                    <img src="@/assets/BigLinkedin.png" alt="">
                </a>
            </div>


        </div>
    </main>
</template>

<style lang="scss" scoped>
.contact-page {
    background-color: var(--transparent-dark);
    font-family: 'Roboto Mono', monospace;
}

.images {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.image {
    margin: 1rem 8rem;
}

img {
    width: 8rem;
}
</style>