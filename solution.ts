
function formatValue(input : string | number | boolean){
    if(typeof input === 'string'){
        return input.toUpperCase();
    }else if(typeof input === 'number'){
        return input*10;
    }else if(typeof input === 'boolean'){
        return !input;
    }
}


function getLength(input : string | number[]){
    if(typeof input === 'string'){
        return input.length ;
    }else if(Array.isArray(input)){
        return input.length ;
    }
}


class Person{

    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    
    public getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type Books = {
    title:string;
    rating:number
}
function filterByRating(books:Books[]){
    const bookRatingAvobe4 = [];
    for(let book of books){
        if(book.rating>=4){
            bookRatingAvobe4.push(book);
        }
    }
    return bookRatingAvobe4;
}


interface User{
    id:number;
    name:string;
    email:string;
    isActive:boolean
}
function filterActiveUsers(users:User[]){
    const activeUsers = users.filter((user)=>{
        if(user.isActive == true){
            return user;
        }
    })
    return activeUsers;
}


interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean
}
function printBookDetails(book:Book){
    console.log(`"Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}"`)
}


function getUniqueValues(array1:number[]|string[], array2:number[]|string[]){
     
    const result: (number | string)[] = [];

    for(let i=0; i<array1.length; i++){
        let isDuplicate = false;

        for(let j=0; j<array1.length; j++){
            if(result[j] === array1[i]){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            result[result.length] = array1[i];
        }
    }

    for(let i=0; i<array2.length; i++){
        let isDuplicate = false;

        for(let j=0; j<array2.length; j++){
            if(result[j] === array2[i]){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            result[result.length] = array2[i];
        }
    }

    return result
}



interface Products {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
function calculateTotalPrice(products: Products[]) {
    
    const totalPrice = products.reduce((total, currVal) => {
        const discountPercent = currVal.discount ? currVal.discount / 100 : 0;
        const netPrice = currVal.price * (1 - discountPercent);
        return total + currVal.quantity * netPrice;
    }, 0);

    return totalPrice;
}