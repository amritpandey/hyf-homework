// modify this page only

// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
const li1 = document.querySelector('li');
const li2 = document.querySelector('ul.marks li:nth-child(2)');
const li3 = document.querySelector('ul.marks li:nth-child(3)');

function displayThumbsUp() {
    const thumbsUp = document.querySelector('.thumbs-up');
    const div = document.createElement('div');
    div.innerHTML = thumbsUp.textContent;
    div.style.marginLeft = '200px';
    div.style.marginTop = '150px';
    div.style.fontSize = '80px';
    document.body.appendChild(div);
}

//using promise
function translateOneByOne() {
    moveElement(li1, { x: 20, y: 300 })
        .then(() => {
            console.log('Red element has been moved');
        })
        .then(() => {
            moveElement(li2, { x: 400, y: 300 })
                .then(() => {
                    console.log('Blue element has been moved');
                })
                .then(() => {
                    moveElement(li3, { x: 400, y: 20 })
                        .then(() => {
                            console.log('Green element has been moved');
                        })
                        .then(() => {
                            displayThumbsUp();
                        });
                });
        });
} //end of function

//translateOneByOne();

// new added way to solve translate all at once
/* function translateAllAtOnce() {
    return new Promise((resolve)=>resolve("All boxes moved at the same time"));     
  }
translateAllAtOnce()
.then((data)=>{
  moveElement(li1, { x: 20, y: 300 });
  moveElement(li2, { x: 400, y: 300 });
  moveElement(li3, { x: 400, y: 20 });
  console.log(data);
  
}).catch((e)=>console.log(e)); */

function translateAllAtOnce() {
  const promise1 = moveElement(li1, { x: 20, y: 300 }).then(() => {
      console.log('first promise');

  });
  const promise2 = moveElement(li2, { x: 400, y: 300 }).then(() => {
      console.log('second promise');
  });
  const promise3 = moveElement(li3, { x: 400, y: 20 }).then(() => {
      console.log('third promise');
  });

  Promise.all([promise1, promise2, promise3]).then(() => {
    //console.log(values);
    displayThumbsUp();
  });

  //this code is working but i am unable to put thumbsUp function, need to ask
}

//translateAllAtOnce()


//using async await
async function translateOneByOneAsync() {
    try {
        await moveElement(li1, { x: 20, y: 300 });
        console.log('Red element has been moved');

        await moveElement(li2, { x: 400, y: 300 });
        console.log('Blue element has been moved');

        await moveElement(li3, { x: 400, y: 20 });
        console.log('Green element has been moved');

        displayThumbsUp();
       
    } catch (error) {
        console.log(error);
    }
}

//translateOneByOneAsync()

//using normal async/await function
async function translateAllAtOnceAsync() {
    try {
        const red = moveElement(li1, { x: 20, y: 300 });
        console.log('Red element has been moved');

        
        const blue = moveElement(li2, { x: 400, y: 300 });
        console.log('Blue element has been moved');
        
        const green = moveElement(li3, { x: 400, y: 20 });
        console.log('Green element has been moved');

        await Promise.all([red, blue, green]);
        displayThumbsUp();
    } catch (error) {
        console.log(error);
    }
}

//translateAllAtOnceAsync()

//using arrow function
/* ;(async ()=> {
  try{
  const red = moveElement(li1, { x: 20, y: 300 });
  console.log('Red element has been moved');

  const blue = moveElement(li2, { x: 400, y: 300 });
  console.log('Blue element has been moved');

  const green = moveElement(li3, { x: 400, y: 20 });
  console.log('Green element has been moved');

  await Promise.all([red, blue, green]);
  displayThumbsUp()
  } catch(err){
    console.log(err);
  }
  
})()  */


