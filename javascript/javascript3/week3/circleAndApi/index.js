//js3w3 homework
//Paint a circle to a canvas element
        const canvas1 = document.querySelector('#circle');
        canvas1.setAttribute('height', window.innerHeight);
        canvas1.setAttribute('width', window.innerWidth);
        const drawCircle = canvas1.getContext('2d');

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    //method draw
    draw() {
        
        drawCircle.beginPath();
        drawCircle.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        drawCircle.fillStyle = this.fillColor;
        drawCircle.fill();
    }
    
}

//function to get random values of x,y,r and color
function getRandomValue() {
    const xRand = Math.floor(Math.random() * 800 + 20);
    const yRand = Math.floor(Math.random() * 300);
    const rRand = Math.floor(Math.random() * 80 + 20);
   // const colorRand = Math.floor(Math.random() * 3);

    let color = "rgba(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    ".7" +
    ")";
   /*  if (colorRand === 0) {
        color = 'red';
    } else if (colorRand === 1) {
        color = 'blue';
    } else if (colorRand === 2) {
        color = 'pink';
    } */
    return { xRand, yRand, rRand, color };
}

// to draw circle every 100 ms with random x,y,radius and color
const myInterval = setInterval(() => {
    const getRandom = getRandomValue();
    const c1 = new Circle(
        getRandom.xRand,
        getRandom.yRand,
        getRandom.rRand,
        0,
        2 * Math.PI,
        getRandom.color,
    );
    // c1.draw();
    
}, 100);

//clearInterval(myInterval); //to stop making circles

//Follow the mouse - optional

document.addEventListener('mousemove', (event) => {
    const getRandom = getRandomValue();

    const c3 = new Circle(
        event.clientX,
        event.clientY,
        getRandom.rRand,
        0,
        2 * Math.PI,
        getRandom.color,
    );
     //c3.draw();
});

// Getting into promises

const githubAPi2 =
    'https://api.github.com/search/repositories?q=user:sumanghimire79';

const githubAPi3 =
    'https://api.github.com/search/repositories?q=user:chunmeishui';

const githubAPi4 =
    'https://api.github.com/search/repositories?q=user:Mamidi001';

async function getAllApiTogether() {
    const apis = await Promise.all([
        fetch(githubAPi2),
        fetch(githubAPi3),
        fetch(githubAPi4),
    ]);

    const promiseJson = apis.map((api) => api.json());
    const result = await Promise.all(promiseJson);

    result.map((val) => {
        val.items.map((val1) => {
            const resultString = `
    Full Repo Name: ${val1.full_name}
    URL: ${val1.owner.url}
    Owner: ${val1.owner.login}`;
            console.log(resultString);
        });
    });
}

const repoInfo = getAllApiTogether();
console.log(repoInfo);

//
