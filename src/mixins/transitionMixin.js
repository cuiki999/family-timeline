export default {
  methods: {
    animate: function(buttonNum) {
      if (buttonNum !== this.currentPage) {
        // grab all the slide divs
        const slideArray = [this.$refs.slide0, this.$refs.slide1, this.$refs.slide2, this.$refs.slide3, this.$refs.slide4, this.$refs.slide5];
        const pageWidth = this.pageWidth;
        const pageSpeed = this.pageSpeed;
        // calculate the difference so we can deterimine the direction and control the speed of the animation
        let diff = buttonNum - this.currentPage;
        let positionArray = this.positionArray;
        // disable all the clicks and arrow movement until timeout changes it back to false
        this.disable = true;
        let movement = setInterval(function() {
          // cycle through positionArray backwards so that we deal with the item at [0] index last and so the else statement doesn't cut off too soon
          for (let p = 5; p > -1; p--) {
            if (positionArray[0] === - (buttonNum * pageWidth)) {
              clearInterval(movement);        
            } else {
              positionArray[p] -= (pageSpeed * diff);
              slideArray[p].style.left = positionArray[p] + 'px';         
            }
          }
        }, 24);
        setTimeout(() => {
          this.disable = false;
        }, 850)
      } else {
        return;
      }
      this.changePage(buttonNum);      
    },
  }
}