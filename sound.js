class Sound {
  static dropSound() {
    this.music = new Audio("sounds/impactWood_light_002.ogg");
    this.music.play();
  }
  static hitSound() {
    this.music = new Audio("sounds/bookClose.ogg");
    this.music.play();
  }
  static beginSound() {
    this.music = new Audio("sounds/begin.ogg");
    this.music.volume = 0.4;
    this.music.play();
  }
  static winSound() {
    this.music = new Audio("sounds/winner.ogg");
    this.music.volume = 0.4;
    this.music.play();
  }
  static fortniteSound() {
    this.music = new Audio("sounds/fortnite.mp3");
    this.music.play();
  }
  static backgroundSound() {
    this.music = new Audio("sounds/Renegade.mp3");
    this.music.volume = 0.2;
    this.music.play();
  }
}
