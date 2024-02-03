// const addArrow = (x, y) => {
//    const b = x + y;
//    console.log(b);
// };
// addArrow(2,5);

// const SubArrow = (x,y) => {
//     const b = x - y;
//     console.log(b);
// };
// SubArrow(3,6);

function Counter() {
    this.value = 0;
  
    // Fonction traditionnelle
    // setInterval(function() {
    //   this.value++; // "this" est différent ici
    //   console.log(this.value);
    // }, 1000);
  
    // Fonction fléchée
    setInterval(() => {
      this.value++; // "this" fait référence à l'instance de Counter
      console.log(this.value);
    }, 1000);
}
  
const counter = new Counter();
  
