<template>
              <nav class="navbar navbar-expand-lg navbar-dark darker fixed-top" id="sideNav">
            <a class="navbar-brand" href="#page-top">
                <span class="d-block d-lg-none">Saroj Belbase</span>
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../assets/img/profile.jpg"
                        alt="sarojbelbase">
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#about" v-scroll-to="'#about'">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills" v-scroll-to="'#skills'">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#interests" v-scroll-to="'#interests'">Interests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects" v-scroll-to="'#projects'">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#education" v-scroll-to="'#education'">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#experiences" v-scroll-to="'#experiences'">Experiences</a>
                    </li>
                </ul>
            </div>
        </nav>
</template>