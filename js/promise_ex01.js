function cutUp(){
    console.log('start catup food');
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('finish catup food');
            resolve('the catuped food');
            },2000);
    })
    
    
    return p;
}

function boil() {
    console.log('start boil water');
    let p=new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('fininsh boil water')
            resolve('boiled water');
          },1000);
    });
    return p;
  }

Promise.all([cutUp(),boil()]).then((result)=>{
    console.log('prepare work over');
    console.log(result)
})