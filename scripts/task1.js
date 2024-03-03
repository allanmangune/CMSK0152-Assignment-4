window.onload = (event) => {
    console.log("The web page is fully loaded.");
    count();
  };

function count(){
    for(k=0; k<= 200; k++){
        let modulu = k % 2;
        if(modulu === 1){
            console.log(`${k} number is an odd number.`);
        }
        else{
            console.log(`${k} number is an even number`)
        }
    }
}