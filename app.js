const app = Vue.createApp({
  data() {
    return {
      name: "Giorgi",
      age: 26,
      pictureLink:
        "https://us.123rf.com/450wm/charnsitr/charnsitr1508/charnsitr150800147/44538287-bangkok-tailandia-agosto-30-2015-el-logo-del-real-madrid-club-de-f%C3%BAtbol-en-una-camiseta-oficial-el-3.jpg?ver=6",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
