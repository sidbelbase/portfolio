<template>
  <section class="resume-content p-3 p-lg-5 d-flex justify-content-center" id="projects">
    <div class="w-100">
      <h2 class="mb-5 text-darker">Projects</h2>
      <div
        class="repo resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(repo, index) in projects"
        :key="index"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ repo.name }}</h3>
          <div class="subheading mb-3 text-darker">
            <span>
              <i :class="getIconFrom(repo.language)"></i>
              <span class="mx-2">{{ repo.language }}</span>
            </span>
          </div>
          <p>{{ repo.description }}</p>
          <a
            :href="repo.url"
            class="links text-decoration-none font-weight-bold"
            target="_blank"
          >Github</a>
          <span v-if="repo.homepage" class="mx-1 font-weight-bold">&middot;</span>
          <a
            :href="repo.homepage"
            v-if="repo.homepage"
            class="links text-decoration-none font-weight-bold"
            target="_blank"
          >Website</a>
          <span :title="countStars(repo.stargazers_count)">
            <span class="mx-1 font-weight-bold">&middot;</span>
            <span>
              <i class="fa fa-star text-darker"></i>
            </span>
            <span class="mx-1 text-darker font-weight-bold">{{repo.stargazers_count}}</span>
          </span>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-darker font-weight-bold">{{ formatDate(repo.created_at) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import relativeTime from "dayjs/plugin/relativeTime";
import { reactive, onMounted, toRefs } from "vue";
import icons from "@/data/icons.json";
import dayjs from "dayjs";
import axios from "axios";
export default {
  name: "projects",
  setup() {
    const repo = reactive({
      projects: [],
      url: "https://api.github.com/users/sarojbelbase/repos",
    });

    // Usage : [1] pluralize(2, 'apple') >> 'apples'
    //              [2] pluralize(2, 'person', 'people') >> 'people'
    function pluralize(val, word, plural = word + "s") {
      const _pluralize = (num, word, plural = word + "s") =>
        [1, -1].includes(Number(num)) ? word : plural;
      if (typeof val === "object")
        return (num, word) => _pluralize(num, word, val[word]);
      return _pluralize(val, word, plural);
    }

    function humanize(givendate) {
      dayjs.extend(relativeTime);
      return dayjs(givendate).fromNow();
    }

    function formatDate(givendate) {
      return dayjs(givendate).format("MMMM, YYYY");
    }

    // sets font-awesome according to the provided language
    function getIconFrom(language) {
      for (let lang in icons) {
        if (icons.hasOwnProperty(lang) && language.toLowerCase() === lang) {
          return icons[lang];
        }
      }
    }

    function countStars(givenstar) {
      return `${givenstar} ${pluralize(+givenstar, "star")} on Github!`;
    }

    function fetchRepos() {
      axios
        .get(repo.url)
        .then((responses) => {
          responses.data.forEach((project) => {
            repo.projects.push({
              name: project.name,
              description: project.description,
              created_at: project.created_at,
              stargazers_count: project.stargazers_count,
              language: project.language,
              homepage: project.homepage,
              url: project.html_url,
              fork: project.fork,
            });
          });
          repo.projects = repo.projects
            .filter((project) => !project.fork && project.language)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          console.log(projects);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    onMounted(() => fetchRepos());
    return { humanize, formatDate, getIconFrom, countStars, ...toRefs(repo) };
  },
};
</script>