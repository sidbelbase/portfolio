<template>
    <nav class="navbar navbar-expand-lg navbar-dark darker fixed-top" id="sideNav">
      <a class="navbar-brand" href="#page-top">
        <span class="d-block d-lg-none">Saroj Belbase</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../assets/img/profile.jpg" alt="Saroj Belbase | sarojbelbase" title="Saroj Belbase | sarojbelbase">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#about' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/skills', hash: '#skills' }">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/interests', hash: '#interests' }">Interests</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/projects', hash: '#projects' }">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/education', hash: '#education' }">Education</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/experiences', hash: '#experiences' }">Experiences</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  