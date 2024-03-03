window.onload = (event) => {
    console.log("Waiting for the process to complete...");
    let startTime = Date.now();
    doSomething().then(() => {
        let endTime = Date.now();
        let difTime = (endTime - startTime) / 1000;
        console.log(`The process completed in about ${difTime} seconds.`);
      });
  };

async function doSomething() {         
    let a = await dance(); // takes 11 seconds         
    let b = await danceAgain(); // takes 44 seconds         
    let c = await work(); // takes 4 seconds           
    await doSomethingElse();   
}             

async function doSomethingElse() {         
    let results = await Promise.all([dance(), danceAgain(), work()]);
    return results.reduce((total, value) => total * value);    
} 

async function dance() {
    let mil = 11000;
    await new Promise(resolve => setTimeout(resolve, mil));
    return mil/1000;
}

  async function danceAgain() {
    let mil = 44000;
    await new Promise(resolve => setTimeout(resolve, mil));
    return mil/1000;
  }

  async function work() {
    let mil = 4000;
    await new Promise(resolve => setTimeout(resolve, mil));
    return mil/1000;
  }