<template>
  <div id="app">
    <Header />
    <div id="viewport1">
      <div class="background">
        <img src="~/static/images/floor.jpeg" class="back-img" alt="">
        <div class="back-color"></div>
      </div>
      <div class="bar">
        <ul>
          <li v-for="item of bar" :key="item" @click="switchImg(item)">
            <div class="back" :class="item.active ? 'active' : 'off'">
              <img src="~/static/images/brush.svg" v-if="item.active" alt="">
              <img src="~/static/images/brush-off.svg" v-else alt="">
            </div>
            <p>
              {{ item.title }}
            </p>
          </li>
        </ul>
      </div>
      <div class="centreImg">
        <img src="~/static/images/fill.png" alt="">
      </div>
    </div>
    <div class="paint">
      <img src="~/static/images/red-paint.png" alt="">
      <img src="~/static/images/blue-paint.png" alt="">
      <img src="~/static/images/yel-paint.png" alt="">
      <img src="~/static/images/blue-paint.png" alt="">
      <img src="~/static/images/circle.png" alt="">
      <img src="~/static/images/circle.png" alt="">
      <img src="~/static/images/red-paint.png" alt="">
      <img src="~/static/images/yel-paint.png" alt="">
      <img src="~/static/images/blue-paint.png" alt="">
      <img src="~/static/images/circle.png" alt="">
      <img src="~/static/images/circle.png" alt="">
    </div>
    <div id="viewport2" class="container">
      <div class="disc">
        <div class="title">
          <div class="line"></div>
          <h2>About Color Shields</h2>
        </div>
        <div class="opt">
          Color Shields is your trusted partner in creating stunning and functional epoxy and polyaspartic floors. We
          specialize in innovative flooring solutions, providing high quality, durability and aesthetic appeal.
          <br>
          <br>
          Our products are a unique combination of technology and design, allowing us to create customized coatings that
          meet the highest standards. Whether you need flooring for residential, commercial or industrial applications, we
          have solutions to meet your requirements.
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="~/static/images/bg.png" alt="">
    </div>
    <div id="viewport3" class="container">
      <div class="title">
        <div class="line"></div>
        <h2>The process of making a <br> polyaspartic floor involves several steps</h2>
      </div>
      <div class="disc">
        <img src="~/static/images/disc.svg" alt="">
      </div>
    </div>
    <div id="viewport4" class="container">
      <div class="title">
        <div class="line"></div>
        <h2>Benefits of working with color shieLDS</h2>
      </div>
      <p class="disc">
        We strive to ensure that each client receives the perfect solution for their needs. <br> Cooperation with us
        guarantees you quality, reliability and individual approach to each project.
      </p>
      <div class="sides">
        <div class="left">
          <div class="item">
            <img src="~/static/images/1.svg" alt="">
            <div class="text">
              <h2 class="title_disc">
                Customized:
              </h2>
              <p>
                We take into account the unique characteristics of each <br> project and create solutions to fit your
                needs.
              </p>
            </div>
          </div>
          <div class="item">
            <img src="~/static/images/2.svg" alt="">
            <div class="text">
              <h2 class="title_disc">
                High-quality materials:
              </h2>
              <p class="disc_title">
                We use only proven, top-quality materials to ensure the <br>longevity and durability of our floors.
              </p>
            </div>
          </div>
          <div class="item">
            <img src="~/static/images/3.svg" alt="">
            <div class="text">
              <h2 class="title_disc">
                Aesthetics and Functionality:
              </h2>
              <p>
                Our floors not only look stunning, but also offer <br> superior durability, ease of maintenance, and
                longevity.
              </p>
            </div>
          </div>
          <div class="item">
            <img src="~/static/images/4.svg" alt="">
            <div class="text">
              <h2 class="title_disc">
                Experience and Professionalism:
              </h2>
              <p>
                Our team consists of experienced professionals who are ready <br>
                to realize projects of any complexity
                with a high degree of craftsmanship.
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="~/static/images/floor.png" alt="">
        </div>
      </div>
    </div>
    <div id="viewport5" class="container">
      <div class="bg">
        <img src="~/static/images/circle.png" alt="">
      </div>
      <div class="title">
        <div class="line"></div>
        <h2>
          Difference between polyaspatic and epoxy resin
        </h2>
      </div>
      <div class="grid">
        <div class="item">
          <h2>
            Epoxy
          </h2>
          <div></div>
          <h2>
            Polyaspatic
          </h2>
        </div>
        <div class="item">
          <p>Сriterion 1</p>
          <img src="~/static/images/cross-bar.svg" alt="">
          <p>Сriterion 1</p>
        </div>
        <div class="item">
          <p>Сriterion 2</p>
          <img src="~/static/images/cross-bar-off.svg" alt="">
          <p>Сriterion 2</p>
        </div>
        <div class="item">
          <p>Сriterion 3</p>
          <img src="~/static/images/cross-bar-off.svg" alt="">
          <p>Сriterion 3</p>
        </div>
      </div>
    </div>
    <div id="viewport6" class="container">
      <div class="title">
        <div class="line"></div>
        <h2>
          our additional services
        </h2>
      </div>
      <div class="disc">
        We strive to ensure that each client receives the perfect solution for their needs. Cooperation <br> with us
        guarantees you quality, reliability and individual approach to each project.
      </div>
      <div class="grid">
        <div class="item">
          <div class="red-off">
            <img src="~/static/images/milling.png" alt="">
          </div>
          <div class="white-on">
            <h2>Installation of tiles</h2>
            <p>We take into account the unique characteristics of each project and create solutions to fit your needs.</p>
          </div>
        </div>
        <div class="item">
          <div class="red-off">
            <img src="~/static/images/wrench.png" alt="">
          </div>
          <div class="white-on">
            <h2>Painting of whole house</h2>
            <p>We take into account the unique characteristics of each project and create solutions to fit your needs.</p>
          </div>
        </div>
        <div class="item">
          <div class="red-off">
            <img src="~/static/images/paint-roller.png" alt="">
          </div>
          <div class="white-on">
            <h2>Partial design</h2>
            <p>We take into account the unique characteristics of each project and create solutions to fit your needs.</p>
          </div>
        </div>
        <div class="item">
          <div class="red-off">
            <img src="~/static/images/brush.png" alt="">
          </div>
          <div class="white-on">
            <h2>Paint</h2>
            <p>We take into account the unique characteristics of each project and create solutions to fit your needs.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="viewport7">
      <div class="top container">
        <div class="title ">
          <div class="line"></div>
          <h2>Our works</h2>
        </div>
        <button>
          View all
        </button>
      </div>
      <div class="carousel">
        <img src="~/static/images/carousel/1.png" alt="">
        <img src="~/static/images/carousel/2.png" alt="">
        <img src="~/static/images/carousel/3.png" alt="">
      </div>
      <div class="dots">
        <div class="dot" v-for="item of carousel" :key="item"></div>
      </div>
      <div class="arrows">
        <img @click="changeCarousel(0)" src="~/static/images/arrow-left.svg" alt="">
        <img @click="changeCarousel(1)" src="~/static/images/arrow-right.svg" alt="">
      </div>
    </div>
    <div id="viewport8" class="container">
      <div class="title">
        <div class="line"></div>
        <h2>Certificates</h2>
      </div>
      <div class="grid">
        <div class="images">
          <img src="~/static/images/cerft-2.png" alt="">
          <img src="~/static/images/cerft-1.png" alt="">
        </div>
        <div class="text">
          <h2>Our product:</h2>
          <p>Color Shields is your trusted partner in creating stunning and functional epoxy and polyaspartic floors. We
            specialize in innovative flooring solutions, providing high quality, durability and aesthetic appeal.</p>
        </div>
      </div>
    </div>
    <div id="viewport9">
      <div class="title container">
        <div class="line"></div>
        <h2>reviews</h2>
      </div>
      <div class="reviews">
        <div class="top opt">
          <div class="item" v-for="i of 3" :key="i">
            <img src="~/static/images/prof-img.jpg" class="prof-img" alt="">
            <div class="prof">
              <div class="stars">
                <img src="~/static/images/star.svg" v-for="i of 5" :key="i" alt="">
              </div>
              <div class="name">Jane Doe</div>
              <div class="data">2023-11-23</div>
              <div class="disc">Wonderful job, I love it! my house has been transformed with new floors!</div>
            </div>
          </div>
        </div>
        <div class="bottom opt">
          <div class="item" v-for="i of 3" :key="i">
            <img src="~/static/images/prof-img.jpg" class="prof-img" alt="">
            <div class="prof">
              <div class="stars">
                <img src="~/static/images/star.svg" v-for="i of 5" :key="i" alt="">
              </div>
              <div class="name">Jane Doe</div>
              <div class="data">2023-11-23</div>
              <div class="disc">Wonderful job, I love it! my house has been transformed with new floors!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-2">
      <img src="~/static/images/bg-2.png" alt="">
    </div>
    <div id="viewport10" class="container">
      <div class="title">
        <div class="line"></div>
        <h2>Have a question?</h2>
      </div>
      <div class="questions">
        <div class="item" @click="item.isShow = !item.isShow" v-for="item of questions" :key="item">
          <div class="show">
            <p>
              {{ item.name }}
            </p>
            <img src="~/static/images/chevron.svg" alt="">
          </div>
          <div class="hide" v-show="item.isShow">
            {{ item.disc }}
          </div>
        </div>
      </div>
    </div>
    <div id="viewport11" class="container">
      <div class="left">
        <h2>Let’s work together</h2>
        <p>Looking to take your kitchen or family room to the next level? How about a new deck or hardwood floor? Feel
          free to send us a note to set up a free estimate. We’d love to hear from you. Let’s build something together!
        </p>
        <img src="~/static/images/fill.png" alt="">
      </div>
      <div class="right">
        <form action="">
          <div class="path">
            <label for="">Name</label>
            <input type="text" placeholder="Enter your name">
          </div>
          <div class="path">
            <label for="">Email</label>
            <input type="text" placeholder="Enter your email">
          </div>
          <div class="path">
            <label for="">Phone number</label>
            <input type="number" placeholder="+1 xxx xxx xxx xxx">
          </div>
          <div class="path">
            <label for="">Project Description</label>
            <textarea style="resize: none;" dir="auto" type="text" class="disc"
              placeholder="Enter description of your project"></textarea>
          </div>
          <button>Request a qoute</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      active: true,
      isShow: false,
      questions: [
        {
          isShow: false,
          name: 'How I can send request a qoute?',
          disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam perspiciatis tempora omnis, obcaecati tempore reprehenderit iusto harum est, ipsam a? Quod atque adipisci fugiat quas nostrum minus nulla sequi?'
        },
        {
          isShow: false,
          name: 'How I can send request a qoute?',
          disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam perspiciatis tempora omnis, obcaecati tempore reprehenderit iusto harum est, ipsam a? Quod atque adipisci fugiat quas nostrum minus nulla sequi?'
        },
        {
          isShow: false,
          name: 'How I can send request a qoute?',
          disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam perspiciatis tempora omnis, obcaecati tempore reprehenderit iusto harum est, ipsam a? Quod atque adipisci fugiat quas nostrum minus nulla sequi?'
        },
        {
          isShow: false,
          name: 'How I can send request a qoute?',
          disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam perspiciatis tempora omnis, obcaecati tempore reprehenderit iusto harum est, ipsam a? Quod atque adipisci fugiat quas nostrum minus nulla sequi?'
        },
      ],
      bar: [
        {
          title: 'About Us',
          active: true
        },
        {
          title: 'Our works',
          active: false
        },
        {
          title: 'Reviews',
          active: false
        },
        {
          title: 'FAQ',
          active: false
        },
        {
          title: 'Request a quote',
          active: false
        },

      ]
    }
  },
  methods: {
    switchImg(param) {
      for (let item of this.bar) item.id == param.id ? item.active = true : item.active = false
    },
    changeCarousel(param) {
      if (process.client) {
        let carousel = document.querySelectorAll('.carousel img')
        let carouselFB = document.querySelectorAll('.carousel img')
        console.log(carousel);
        let numImg = []
        carousel[0].src.toString().split('/')[carousel[0].src.toString().split('/').length - 1].slice(0, 1)
        for (let item of carousel) {
          numImg.push(item.src.toString().split('/')[item.src.toString().split('/').length - 1].slice(0, 1))
        }
        console.log(numImg);
      }
    }
  },
  mounted() {
    for (let item of this.bar) {
      item.id = Math.random().toString().slice(2)
    }
  },
}
</script>
