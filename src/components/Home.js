import { useRef, useState } from "react"; //useref is imported from React library
import Product from "./Product";

function Home() {
  //Create State variables
  var [counter, setcounter]= useState(100);

  function f2() {
    // alert();
    // console.log(typeof setcounter);
    setcounter(counter + 10);
    
  }
  // Create reference variables
  var x1 = useRef();
  var x2 = useRef();
  var x3 = useRef();

  function f1() {
    // alert();
    // console.log(x1);
    // console.log(x2);

    var data1 = x1.current.value;
    var data2 = x2.current.value;
    // console.log(data1);
    // console.log(data2);

    x3.current.innerHTML = data1 * data2;// do calculations of current entered value
  }
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <Product name="Watch" price="2000"></Product>
        </div>
        <div class="col">
          <Product name="Mobile" price="10000"></Product>
        </div>
        <div class="col">
          <Product name="Headphones" price="700"></Product>
        </div>
        <div class="col">
          <h2>Reference Variable</h2>
          <input type="text" ref={x1} /><br></br><br></br>
          <input type="text" ref={x2} /><br></br><br></br>
          <button onClick={f1}>Enter</button>
          <p ref={x3}></p>
        </div>
        <div class="col">
          <h3>State Variable</h3>
          { counter } <br></br>
          <button onClick={f2}>Enter</button>
        </div>
      </div>
    </div>
  )
}
export default Home;