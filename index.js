

// const text =() =>{
//     let admin="true";

//     let loggedin="false";

//     if(admin || loggedin){
//         console.log("Logged success");

//     }else{
//            console.log("not logged");
//         }
    
// }

// text();


const getGrade =(marks)=>{
    if(marks<35){
        return "F";
    }else if(marks<=50){
        return "D";
    }else if(marks<=70){
        return"C";
    }else if(marks<=85){
        return "B";
    }else if(marks<=100){
        return "A";
    }else if(marks>100){
        return "Invalid marks";
    }else {
        return "Enter Marks";
    }
}

console.log(getGrade(87));
