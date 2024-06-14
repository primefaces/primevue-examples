<script setup>
import { ref } from "vue";

const value = ref(null);
let starCount = 0;
const maxStars = 5;
let isAnimationRunning = false;

function startAnimation() {
    if (isAnimationRunning) {
        return;
    }

    let a = document.getElementById("charging");

    const intervalId = setInterval(function () {
        if (starCount < maxStars) {
            a.innerHTML += `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 25 25" fill="none">
        <path d="M24.6176 9.69633C24.5627 9.52224 24.4599 9.36716 24.3208 9.24895C24.1817 9.13073 24.0121 9.05417 23.8314 9.02808L16.7296 7.99294L13.5455 1.55934C13.4549 1.40731 13.3264 1.28142 13.1725 1.194C13.0186 1.10657 12.8446 1.06061 12.6676 1.06061C12.4906 1.06061 12.3167 1.10657 12.1628 1.194C12.0089 1.28142 11.8804 1.40731 11.7897 1.55934L8.60569 7.99294L1.50384 9.02808C1.32318 9.05417 1.15356 9.13073 1.01448 9.24895C0.875402 9.36716 0.772516 9.52224 0.717658 9.69633C0.659093 9.86978 0.650142 10.0561 0.691814 10.2344C0.733487 10.4127 0.824125 10.5758 0.953513 10.7053L6.11611 15.7106L4.89753 22.7863C4.86664 22.9684 4.88705 23.1556 4.95647 23.3269C5.02589 23.4981 5.14159 23.6467 5.29062 23.7559C5.43989 23.8623 5.61592 23.9248 5.79884 23.9363C5.98176 23.9479 6.16427 23.9081 6.32576 23.8214L12.6676 20.4801L19.0226 23.8214C19.1632 23.8985 19.3209 23.9391 19.4812 23.9393C19.6874 23.937 19.8881 23.8731 20.0577 23.7559C20.2068 23.6467 20.3225 23.4981 20.3919 23.3269C20.4613 23.1556 20.4817 22.9684 20.4508 22.7863L19.2192 15.7106L24.3686 10.7053C24.5003 10.5772 24.5934 10.4147 24.6374 10.2364C24.6814 10.0581 24.6745 9.87097 24.6176 9.69633Z" fill="#41B883"/>
      </svg>
    `;
            starCount++;
        } else {
            clearInterval(intervalId);
            isAnimationRunning = false;
        }
    }, 1200);

    isAnimationRunning = true;
}
</script>

<template>
    <div class="main-wrapper">
        <div class="main-container">
            <div class="hero-section">
                <div class="logo">
                    <img src="./assets/primevue.svg" alt="logo" />
                    <img src="./assets/primevue-text-white.svg" alt="logo-text" />
                </div>
                <div class="hero-content">
                    <h1>Start your next project with powerful PrimeVue</h1>
                    <span
                        >We strongly advise you to explore the
                        <a href="https://primevue.org/configuration/" target="_blank" class="doc-text"
                            >PrimeVue documentation</a
                        >
                        to enhance your skills.</span
                    >
                </div>
            </div>

            <div class="grid-section">
                <div id="components" class="card forms">
                    <div class="form-wrapper">
                        <FloatLabel class="form-input-wrapper">
                            <InputText id="username" class="form-input" v-model="value" />
                            <label for="username">Username</label>
                        </FloatLabel>
                        <Button class="form-button p-button-sm" label="Button" />
                    </div>

                    <a href="https://primevue.org/installation" target="_blank" class="card-footer-link">
                        <span>Components</span>
                        <i class="pi pi-arrow-right"></i>
                    </a>
                </div>

                <div class="card primeland">
                    <a href="https://discord.gg/j2DQFtPD8z" target="_blank">
                        <img src="./assets/primeland.svg" alt="primeland" />
                    </a>
                </div>

                <div class="card discussions">
                    <a href="https://github.com/orgs/primefaces/discussions" target="_blank">
                        <img src="./assets/discussions.svg" alt="primeland" />
                    </a>
                </div>

                <div class="card github">
                    <div class="github-wrapper" @mouseenter="startAnimation">
                        <img src="./assets/github.svg" alt="github" />
                        <div id="charging" class="stars" style="display: flex; gap: 1.5rem"></div>
                    </div>
                    <a href="https://github.com/primefaces/primevue" target="_blank" class="card-footer-link">
                        <span>Please star PrimeVue on GitHub</span>
                        <i class="pi pi-arrow-right"></i>
                    </a>
                </div>

                <div class="card templates">
                    <img src="./assets/primetemplates.png" alt="prime-template" class="box-image" />
                    <a href="https://primevue.org/templates/" target="_blank" class="card-footer-link">
                        <span>Vue Templates Powered by PrimeVue</span>
                        <i class="pi pi-arrow-right"></i>
                    </a>
                </div>

                <div class="card blocks">
                    <img src="./assets/primeblocks.png" alt="prime-template" class="box-image" />

                    <a href="https://blocks.primevue.org/" target="_blank" class="card-footer-link">
                        <span>400+ Ready to Use UI Blocks</span>
                        <i class="pi pi-arrow-right"></i>
                    </a>
                </div>

                <div class="card primeone">
                    <img src="./assets/primeone.png" alt="prime-template" class="box-image" />
                    <a href="https://primevue.org/uikit/" target="_blank" class="card-footer-link">
                        <span>Figma UI Kit</span>
                        <i class="pi pi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="footer-content">
                <a href="https://github.com/primefaces/primevue/blob/master/LICENSE.md" target="_blank" class="license"
                    >PrimeVue - MIT License</a
                >
                <a class="footer-logo">
                    <img src="./assets/primevue.svg" alt="logo" />
                </a>

                <div class="socials">
                    <a href="https://github.com/primefaces/primevue" target="_blank">
                        <i class="pi pi-github"></i>
                    </a>
                    <a href="https://discord.gg/j2DQFtPD8z" target="_blank">
                        <i class="pi pi-discord"></i>
                    </a>
                    <a href="https://twitter.com/primevue" target="_blank">
                        <i class="pi pi-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
::selection {
    background-color: #4ac58e79;
    color: #fff;
}

:focus,
:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #1e2226, 0 0 0 4px #41b88395, 0 1px 2px 0 black;
}

a {
    cursor: pointer;
}

.main-container {
    max-width: 1448px;
    margin: 0 auto;
    padding: 5.5rem 6rem 3rem;
}

.hero-section {
    display: flex;
    flex-direction: column;
    gap: 2.267rem;
    margin-bottom: 3.89rem;
}

.hero-section .logo {
    display: flex;
    align-items: center;
    gap: 1.25rem;
}

.hero-section .hero-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.hero-section .hero-content h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 600;
    max-width: 34.71rem;
}

.hero-section .hero-content span {
    font-size: 1rem;
}

.hero-section .hero-content span > a {
    font-size: 1rem;
    opacity: 0.98;
    color: #41b883;
    font-weight: 700;
    text-decoration-line: underline;
    transition: opacity 0.2s;
}

.hero-section .hero-content span > a:hover {
    opacity: 0.78;
}

.grid-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1.714rem;
    position: relative;
    z-index: 0;
}

.grid-section .card {
    display: flex;
    padding: 1rem 1rem 0.443rem;
    flex-direction: column;
    align-items: center;
    gap: 0.616rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #1e2226;
    position: relative;
    max-width: 411px;
    width: 100%;
}

.grid-section .card::after {
    content: "";
    background: linear-gradient(-145deg, rgba(255, 255, 255, 0) 32.91%, #fff 54.61%, rgba(255, 255, 255, 0) 74.56%);
    border-radius: 20px;
    position: absolute;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    bottom: 1px;
    right: -1px;
    z-index: -1;
    transition: all linear 1s;
    background-position: 450.667px -90px;
    background-repeat: no-repeat;
    opacity: 0.4;
}

.grid-section .card:hover::after {
    background-position: -450.667px 80px;
}

.grid-section .card img {
    width: 100%;
}

.grid-section .card .card-footer-link {
    display: flex;
    width: 100%;
    padding: 0.857rem 1.142rem;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    font-size: 1rem;
    color: #fff;
    backdrop-filter: blur(10px);
    text-decoration: none;
    cursor: pointer;
}

.grid-section .card .card-footer-link i {
    position: relative;
    right: 0;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.grid-section .card .card-footer-link:hover i {
    right: -0.3rem;
}

.grid-section .card.forms {
    grid-row: 1/3;
    grid-column: 1/2;
}

.grid-section .card.forms .form-wrapper {
    display: flex;
    width: 100%;
    padding: 2.85rem 4.71rem 2.9rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.571rem;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    min-height: 16.35rem;
}

.grid-section .card.forms .form-wrapper .form-input-wrapper {
    width: 100%;
}

.grid-section .card.forms .form-wrapper .form-input {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), #2a2d31;
    transition: all 0.2s;
    width: 100%;
}

.grid-section .card.forms .form-wrapper .form-input:hover {
    border: 1px solid #41b88395;
}

.grid-section .card.forms .form-wrapper .form-input:focus {
    box-shadow: 0 0 0 2px #1e2226, 0 0 0 4px #41b88395, 0 1px 2px 0 black;
}

.grid-section .card.forms .form-wrapper .form-button {
    width: 100%;
    border: 1px solid #41b883;
    background: #41b883;
    color: #1c2127;
    transition: all 0.2s;
}

.grid-section .card.forms .form-wrapper .form-button:hover {
    width: 100%;
    border: 1px solid #41b883;
    background: #4dcb92;
    color: #1c2127;
}

.grid-section .card.forms .form-wrapper .form-button:focus {
    box-shadow: 0 0 0 2px #1e2226, 0 0 0 4px #41b88395, 0 1px 2px 0 black;
}

.grid-section .card.primeland {
    grid-row: 1/2;
    grid-column: 2/3;
    justify-content: center;
}

.grid-section .card.discussions {
    grid-row: 2/3;
    grid-column: 2/3;
    justify-content: center;
}

.grid-section .card.discussions a,
.card.primeland a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.grid-section .card.discussions a img,
.card.primeland a img {
    height: 32px;
    -webkit-mask-image: linear-gradient(87deg, rgba(255, 255, 255, 0.7) 30%, #fff 50%, rgba(255, 255, 255, 0.7) 70%);
    -webkit-mask-size: 200%;
}

.grid-section .card.discussions a:hover img,
.card.primeland a:hover img {
    animation: blink 2s infinite;
}

.grid-section .card.github {
    grid-row: 1/3;
    grid-column: 3/4;
}

.grid-section .card.github .github-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    position: relative;
    min-height: 16.35rem;
}

.grid-section .card.github .github-wrapper img {
    width: 174px;
    height: 174px;
    flex-shrink: 0;
    fill: linear-gradient(180deg, rgba(255, 255, 255, 0.4) -234.2%, rgba(255, 255, 255, 0) 100%);
    mix-blend-mode: color-dodge;
}

.grid-section .card.github .github-wrapper .stars {
    position: absolute;
    display: flex;
    gap: 1.5rem;
}

.grid-section .card.templates {
    grid-row: 3/5;
    grid-column: 1/2;
}

.grid-section .card.blocks {
    grid-row: 3/5;
    grid-column: 2/3;
}

.grid-section .card.primeone {
    grid-row: 3/5;
    grid-column: 3/4;
}

.grid-section .card.templates img,
.card.primeone img,
.card.blocks img {
    border-radius: 10px;
    min-height: 16.35rem;
}

.footer {
    margin-top: 6.9rem;
    width: 100%;
    position: relative;
    margin-bottom: 2.85rem;
}

.footer::before {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: -1;
}

.footer .footer-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem;
    max-width: 1448px;
    margin: 0 auto;
}

.footer .footer-content .license,
.socials {
    display: flex;
    padding: 7.5px;
    align-items: center;
    gap: 0.857rem;
    border-radius: 48px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #1e2226;
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;
}

.footer .footer-content .license:hover {
    color: #41b883df;
}

.footer .footer-content .socials a {
    display: flex;
    color: #fff;
    text-decoration: none;
}

.footer .footer-content .socials a i {
    transition: color 0.3s;
}

.footer .footer-content .socials a:hover i {
    color: #41b883df;
}

.footer .footer-content .footer-logo {
    display: flex;
    width: 44px;
    height: 44px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 48px;
    background-color: #1e2226;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
}

.footer .footer-content .footer-logo img {
    width: 17.711px;
    height: 20px;
}

.footer .footer-content .footer-logo:hover {
    background-color: #2b3035;
}

@media (max-width: 1200px) {
    .grid-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 1.714rem;
        position: relative;
        z-index: 0;
        justify-items: center;
        max-width: 60.142rem;
    }

    .grid-section .card.forms {
        grid-row: 1/3;
        grid-column: 1/2;
    }

    .grid-section .card.primeland {
        grid-row: 1/2;
        grid-column: 2/3;
    }

    .grid-section .card.discussions {
        grid-row: 2/3;
        grid-column: 2/3;
    }

    .grid-section .card.github {
        grid-row: 3/5;
        grid-column: 1/2;
    }

    .grid-section .card.templates {
        grid-row: 3/5;
        grid-column: 2/3;
    }

    .grid-section .card.blocks {
        grid-row: 5/7;
        grid-column: 1/2;
    }

    .grid-section .card.primeone {
        grid-row: 5/7;
        grid-column: 2/3;
    }
}

@media (max-width: 991px) {
    .grid-section .card.forms .form-wrapper {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

@media (max-width: 786px) {
    .main-container {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .grid-section {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 1.714rem;
        position: relative;
        z-index: 0;
    }

    .grid-section .card.forms {
        grid-row: 1/3;
        grid-column: 1;
    }

    .grid-section .card.primeland {
        grid-row: 3/4;
        grid-column: 1;
    }

    .grid-section .card.discussions {
        grid-row: 4/5;
        grid-column: 1;
    }

    .grid-section .card.github {
        grid-row: 5/7;
        grid-column: 1;
    }

    .grid-section .card.templates {
        grid-row: 7/9;
        grid-column: 1;
    }

    .grid-section .card.blocks {
        grid-row: 9/11;
        grid-column: 1;
    }

    .grid-section .card.primeone {
        grid-row: 11/13;
        grid-column: 1;
    }

    .footer {
        margin-top: 4rem;
    }

    .footer .footer-content {
        padding-left: 4rem;
        padding-right: 4rem;
    }
}

@media (max-width: 486px) {
    .main-container {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .footer .footer-content {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .footer .footer-content .license {
        width: 10rem;
        display: flex;
    }
}

@keyframes blink {
    0% {
        -webkit-mask-position: 150%;
    }

    100% {
        -webkit-mask-position: -50%;
    }
}
</style>
