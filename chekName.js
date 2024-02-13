function checkName(name) {


    if (typeof name !== 'string') {
        return "invalid";
    }


    const lowercaseName = name.toLowerCase();

   
    const goodNamelastWord = /[ayieouw]$/i.test(lowercaseName);

    
    return goodNamelastWord ? "Good Name" : "Bad Name";
}



const name1 = "Shihab";

console.log(checkName(name1));

