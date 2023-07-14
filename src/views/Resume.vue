<template>
    <main class="resume-page">
        <p>Click <a href="/Steven-Shi-Resume.pdf" target="_blank">here</a> to download a pdf version of my resume</p>
        <div class="resume">
            <h1>Steven Shi</h1>
            <h2>Work Experience</h2>
            <hr>
            <div class="title-parent">
                <div class="title-child">
                    <span><b>Software Engineer </b></span>
                    <span><i>Gap, </i></span>
                    <span>San Francisco, CA</span>
                </div>
                <div class="title-child">Mar 2022 - &nbsp;Present</div>
            </div>
            <div class="content">
                <ul>
                    <li>Refactored payment processing system resulting in improved performance and readability of code.
                    </li>
                    <li>Converted internal Node packages to Typescript to improve code maintainability.</li>
                    <li>Created a frontend demo of store checkout experience for headless commerce project.</li>
                    <li>Implemented an Azure App Config instance with Azure Key Vault to consolidate feature flags and
                        secrets in one centralized service.</li>
                </ul>
            </div>

            <div class="title-parent">
                <div class="title-child">
                    <span><b>Assocaite Technical Consultant </b></span>
                    <span><i>Perficient, </i></span>
                    <span>Allentown, PA</span>
                </div>
                <div class="title-child">Mar 2021 - Jan 2022</div>
            </div>
            <div class="content">
                <ul>
                    <li>Created ecommerce solutions for clients through implementation of scalable platforms using Adobe
                        Commerce.</li>
                    <li>Developed an automated script with JMeter to simulate real-life customers using a website to
                        test item checkout flow as well as server performance under high customer traffic. Script was
                        used to successfully replicate various customer usage scenarios to determine project readiness.
                    </li>
                    <li>Led a project with other new hires to collaboratively revise the company's
                        onboarding program. Updated information and included more hands-on opportunities for new hires
                        to use Adobe Commerce during onboarding. Final version was approved for incoming new hires to
                        use.</li>
                </ul>
            </div>

            <div class="title-parent">
                <div class="title-child">
                    <span><b>Cybersecurity Intern </b></span>
                    <span><i>Ernst & Young, </i></span>
                    <span>Prague, Czech Republic</span>
                </div>
                <div class="title-child">May 2019 - Jun 2019</div>
            </div>
            <div class="content">
                <ul>
                    <li>Automated benchmark processes by developing scripts in Powershell to aid clients in assessing
                        security levels.</li>
                    <li>Assisted cybersecurity department with documentation and translation of benchmark processes.
                    </li>
                    <li>Performed tests to ensure accuracy and effectiveness of Powershell scripts compared to manual
                        benchmarking.</li>
                </ul>
            </div>


            <h2>Education</h2>
            <hr>
            <div class="title-parent">
                <div class="title-child">
                    <span><b>Lehigh University </b></span>
                    <span>Bethlehem, PA</span>
                </div>
                <div class="title-child">Aug 2017 - Jan 2021</div>
            </div>
            <div class="content">
                <p>Bachelor's of Science in Computer Science and Business</p>
                <p>Minor in Economics</p>
            </div>

            <h2>Skills</h2>
            <hr>
            <p>Java, Javascript, Typescript, Node, React, HTML5, CSS, Oracle SQL, MySQL, PostgresQL, Jest, Enzyme,
                React Testing Library, JMeter, Python, Vue, Flutter, SpringBoot, Powershell, Assembly, Bash, PHP,
                Adobe Commerce/Magento, Azure, Git, Trello, Jira, Slack</p>

            <h2>Projects</h2>
            <hr>
            <div class="title-parent">
                <div class="title-child">
                    <span><b><a href="https://github.com/Verifiable-Reference-Letter" target="_blank">Decentralized
                                Reference Letter Capstone Project</a></b></span>
                </div>
                <div class="title-child">Jan 2020 - Dec 2020</div>
            </div>
            <div class="content">
                <p>Decentralized application that digitized and streamlined the process of verifying reference letters
                    for graduate school and job applications. Utilized blockchain technology to validate user identities
                    and ensure secure transfer of
                    information. Personal focus on creating frontend and user experience aspects of the project.
                    Utilized React to build application's frontend. Resulted in a fully functional application.</p>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
.resume-page {
    background-color: rgba(0, 8, 20, 0.8);
    font-family: 'Roboto Mono', monospace;
    align-items: center;
}

.resume {
    padding: 3rem 0;
    max-width: 75rem;
    margin: auto;

    .content {
        text-align: justify;
    }

    .title-parent {
        margin: auto;
        display: flex;
    }

    .title-child {
        flex: 1;
    }

    .title-child:first-child {
        flex-grow: 4;
    }

    .title-child:last-child {
        text-align: right;
    }


}

h2 {
    margin-top: 1rem;
}

hr {
    margin-bottom: 0.5rem;
}

ul {
    list-style-position: inside;
}

li {
    padding: 0;
    margin-bottom: 0.5rem;
}

a {
    text-decoration: none;
    color: rgb(255, 119, 0);
}

@media (min-width: 36rem) {
    li {
        padding: 0.5rem;
    }

    .resume {
        padding: 3rem 3rem;
    }
}
</style>