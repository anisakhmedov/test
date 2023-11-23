<template>
  <div id="app">
    <div id="viewport1">
      <div class="left">
        <h1>
          Elias is a <span class="vio ff">web designer</span> and <br> <span class="vio ff">front-end developer</span>
        </h1>
        <p class="disc ff">
          He crafts responsive websites where technologies <br> meet creativity
        </p>
        <button class="btn">
          Contact me!!
        </button>
      </div>
      <div class="right">
        <div class="images_me">
          <img src="~/static/images/Image.png" class="me" alt="">
          <img src="~/static/images/dots.svg" class="dots" alt="">
          <img src="~/static/images/square.svg" class="square" alt="">
        </div>
        <div class="message">
          <div class="rectangle"></div>
          <p class="ff disc">
            Currently working on <span class="ff">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="messagePort">
        <div class="images">
          <img src="~/static/images/mes.svg" alt="">
          <img src="~/static/images/mes.svg" alt="">
        </div>
        <div class="disc">
          <span class="ff">
            With great power comes great electricity bill
          </span>
          <span class="ff">
            - Dr. Who
          </span>
        </div>
      </div>
    </div>
    <div class="block-first block">
      <div class="left">
        <nav class="title">
          <ul>
            <li>
              <span class="dash">#</span>
              <span>projects</span>
            </li>
          </ul>
        </nav>
        <div class="line"></div>
      </div>
      <div class="right">
        <span>
          View all ~~>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'


export default {
  name: 'IndexPage',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['Courses'])
  },
  methods: {

  }
}
</script>
