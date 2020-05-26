/* var promise = new Promise(function(resolve, reject){

    const FLAG = 5;

    if(FLAG==5)
        resolve("Ok, this works");
    else
        reject("Sorry this not works :c");

    setTimeout(function(){});

});

promise.then(function(response){
    console.log(response);
}, function(error){
    console.log(error);
}); */


/* let x= 11;

const promise = new Promise(
    (resolve,reject)=>{
        if(x==10)
            resolve('x equal to 10');
        
        else
            reject('x not equal to 10');
    }
);

promise
.then(res=>{
    console.log('success: '+res);
})
.catch(error =>{
    console.log('error: '+error);
}); */


/* let x=10;

console.log('Proceso iniciado');

setTimeout(()=> {
    x=x*3+2;
    console.log('2. Proceso terminado... ');
},2000);

console.log('3. El resultado es: '+x);
 */

/* let x= 10;
const promise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        x=x*3+3;

        if (x==32){
            resolve(x);
            console.log('2. Process finished ... ');
        }
        else{
            console.log('2. Process finished ... ');
            reject(x);
        }
    },2000);

});

console.log('1. Process Started');

promise.then(res =>{
    console.log('3. The result is :'+res);
}, err => {
    console.log('3. the result is not as expected, is: '+err);
}
);
 */

 let users = [
    {
        id:1,
        name:'User1'
    },
    {
        id:2,
        name:'User2'
    }
 ];

 let phones = [
    {
        id:1,
        phone:86611111111
    },
    {
        id:2,
        phone:86622222222
    }
 ];

 const getUser = id => {

    return new Promise((resolve, reject)=>{

        if(users.find(user=>user.id)){
            console.log('User exists');
            resolve(getPhone(id));
        }
        else{
            reject('User doesnt exist');
        }
    });
 };

 const getPhone = id => {

    return new Promise((resolve, reject)=>{

        if(phones.find(user=>user.id)){
            resolve('Phone exists');
        }
        else{
            reject('Phone doesnt exist');
        }
    });
 };

getUser(3).
then(res=>{
    return(res);
})
.
then(msj=>{
    console.log(msj);
})
.
catch(error=>{
    console.log(error);

});
