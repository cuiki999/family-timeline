<template>
  <div id="app">
    <div class="slide-container">
      <div id="slide0" class="slide" ref="slide0">
        <div>
          <h1>Družina nekoč in danes</h1>
          <p>Družina se je od nastanka človeka do danes neprestano spreminjala. Spreminjala se je velikost družine, pa tudi odnosi med družinskimi člani. Nekoč so prevladovale družine z veliko otroki, starši, starimi starši in drugimi sorodniki. Danes prevladujejo majhne družine.</p>
        </div>
      </div>
      <div id="slide1" class="slide" ref="slide1">
        <span class="close" @click="closeSlide()" v-show="!disable"></span>
        <figure>
          <img src="./assets/img/druzina1.jpg" />
          <p>Ljudje so živeli v večjih skupnostih, ki so poleg staršev in otrok vključevale tudi stare starše in bližnje sorodnike. Delo v družini je bilo razdeljeno. Moški so lovili živali in izdelovali orožje in orodje. Ženske so nabirale sadeže, pripravljale hrano, varovale ogenj in skrbele za otroke. Ženske so zaradi materinstva zelo cenili. Otroci so že od najzgodnejših let pomagali pri družinskih opravilih. Marsikje po svetu se je tak način življenja ohranil skoraj do danes.<br><br>
          &#8592; Prve skupnosti</p>
        </figure>
      </div>
      <div id="slide2" class="slide" ref="slide2">
        <span class="close" @click="closeSlide()" v-show="!disable"></span>
        <figure>
          <img src="./assets/img/druzina2.jpg" />
          <p>V družini so odločali moški. Ženske so bile podrejene očetu, po poroki pa možu. Največ ljudi se je preživljalo z obdelovanjem zemlje, zato je vsa družina večino časa preživela na polju. Glavna naloga žensk je bila rojevanje otrok in njihova vzgoja. Ženske v bogatih družinah so se udeleževale družabnih srečanj s svojimi prijateljicami, medtem ko so ženske na kmetijah opravljale kmečka in gospodinjska dela.<br><br>
          &#8592; Rimljanska družina</p>
        </figure>
      </div>
      <div id="slide3" class="slide" ref="slide3">
        <span class="close" @click="closeSlide()" v-show="!disable"></span>
        <figure>
          <img src="./assets/img/druzina3.jpg" />
          <p>Poroke so bile največkrat dogovorjene med starši, ko sta bila bodoča zakonca še otroka. V družini je imel oče neomejeno oblast nad vsemi člani družine. Dečke so že zgodaj vzgajali za vojake, dekleta pa za vodenje gospodinjstva. Kmečke družine, ki so prevladovale, so dneve preživljale ob delu na polju.<br><br>
          &#8592; Družina na polju</p>
        </figure>
      </div>
      <div id="slide4" class="slide" ref="slide4">
        <span class="close" @click="closeSlide()" v-show="!disable"></span>
        <figure>
          <img src="./assets/img/druzina4.jpg" />
          <p>V družinah meščanov so veliko pozornost namenili vzgoji in izobraževanju otrok. Oče je bil glavna oseba v družini, odgovorna za varnost in premoženje družine. Bil je zgled svojim sinovom. Žene so bile podrejene možem, njihova dolžnost je bila vodenje gospodinjstva in vzgoja hčera. Kmečke in delavske družine so živele skromno. Na polju in v tovarnah so delali vsi družinski člani, tudi otroci.<br><br>
          &#8592; Družina za mizo</p>
        </figure>
      </div>
      <div id="slide5" class="slide" ref="slide5">
        <span class="close" @click="closeSlide()" v-show="!disable"></span>
        <figure>
          <img src="./assets/img/druzina5.jpg" />
          <p>Položaj moškega in ženske v družbi je v večini držav po svetu enakopraven. Večina žensk je zaposlenih. Partnerji se za skupno življenje in otroke odločijo skoraj deset let kasneje kot nekoč. Otroci namenimo največ časa šoli, šolskim in obšolskim obveznostim.<br><br>
          &#8592; Družina na počitnicah</p>
        </figure>
      </div>
    </div>
    <div class="titles">
      <div class="triangle-and-title" v-show="currentPage === 1 && !disable">
        <span class="triangle"></span>
        <span class="fade-in-title">V času prvih skupnosti ...</span>
      </div>
      <div class="triangle-and-title" v-show="currentPage === 2 && !disable">
        <span class="triangle"></span>
        <span class="fade-in-title">V času Grkov in Rimljanov ...</span>
      </div>
      <div class="triangle-and-title" v-show="currentPage === 3 && !disable">
        <span class="triangle"></span>
        <span class="fade-in-title">V času gradnje gradov ...</span>
      </div>
      <div class="triangle-and-title" v-show="currentPage === 4 && !disable">
        <span class="triangle"></span>
        <span class="fade-in-title">V času gradnje prvih tovarn ...</span>
      </div>
      <div class="triangle-and-title" v-show="currentPage === 5 && !disable">
        <span class="triangle"></span>
        <span class="fade-in-title">Danes ...</span>
      </div>
    </div>
    <div class="buttons">
      <div>
        <button id="btn1" type="button" @click="!disable ? animate(1) : doNothing()">
          <span v-bind:class="{greydot: currentPage === 1}"></span>    
        </button>
        <span class="title">Pred 100 000 leti</span>
      </div>
      <span class="connecting-line"></span>
      <div>
        <button id="btn2" type="button" @click="!disable ? animate(2) : doNothing()">
          <span v-bind:class="{greydot: currentPage === 2}"></span>
        </button>
        <span class="title">Leto 100</span>
      </div>
      <span class="connecting-line"></span>
      <div>
        <button id="btn3" type="button" @click="!disable ? animate(3) : doNothing()">
          <span v-bind:class="{greydot: currentPage === 3}"></span>
        </button>
        <span class="title">Leto 1000</span>
      </div>
      <span class="connecting-line"></span>
      <div>
        <button id="btn4" type="button" @click="!disable ? animate(4) : doNothing()">
          <span v-bind:class="{greydot: currentPage === 4}"></span>
        </button>
        <span class="title">Leto 1850</span>
      </div>
      <span class="connecting-line"></span>
      <div>
        <button id="btn5" type="button" @click="!disable ? animate(5) : doNothing()">
          <span v-bind:class="{greydot: currentPage === 5}"></span>
        </button>
        <span class="title">Danes</span>
      </div>
    </div>
  </div>
</template>

<script>
import transitionMixin from './mixins/transitionMixin.js'

export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      currentPage: 0,
      pageWidth: 1024,
      pageSpeed: 32, // pageWidth has to be divisible by this number
      positionArray: [0, 1024, 2048, 3072, 4096, 5120], // x-coordinates for each of the slide within the slide container
      disable: false // this changes to true only while the slide animation is executing so as to disable all the clicks and arrow movements
    }
  },
  methods: {
    // see transitionMixin.js for animate(),
    changePage: function(num) {
      this.currentPage = num;
    },
    onkey (event) {
      // press right arrow key
      if (event.keyCode === 39 && this.currentPage > -1 && this.currentPage < 5 && this.disable == false) {
        this.animate(this.currentPage + 1);
      // press left arrow key
      } else if (event.keyCode === 37 && this.currentPage > 0 && this.currentPage < 6 && this.disable === false) {
        this.animate(this.currentPage - 1);
      }
    },
    doNothing() {
      return;
    },
    closeSlide() {
      this.currentPage = 0;
      this.positionArray = [0, 1024, 2048, 3072, 4096, 5120];
      this.$refs.slide0.style.left = '0px';
    }
  },
  created: function () {
    window.addEventListener('keyup', this.onkey)
  },
  beforeDestroy: function () {
    window.removeEventListener('keyup', this.onkey)
  },
  mixins: [transitionMixin]
}
</script>

<style lang="scss">
@import './assets/sass/_variables.scss';
@import './assets/sass/_slides.scss';
@import './assets/sass/_buttons.scss';
@import './assets/sass/_popups.scss';

#app {
  width: 1024px;
  height: 770px;
  background: #fff;
  margin: 0 auto;
}

</style>
