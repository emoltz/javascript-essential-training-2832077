// eslint-disable-next-line no-unused-vars
const glass = {
  name: "My Glass",
  volume: 30,
  color: "clear",
  height: 15,
  something: {
    left: 2,
    right: 5,
  },
  topOpen: true,
  toggleTopOpen: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};
console.log("Helo! I'm a sript");
