// eslint-disable-next-line no-unused-vars
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  secretVar: "hehe",
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  changeColor: function (newColor) {
    this.color = newColor;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
