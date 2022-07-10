const checkAge = function (current, minimum, maximum) {
    if (+current)
    {  
            if (current < minimum) {
                console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
            } 
            else if (current >= minimum && current<maximum) {
                console.log("Welcome!")
            }
            else if (current > maximum) {
                console.log("Keep calm and look Culture channel")
            }
            else {
                console.log("Technical work"+age_1+typeof(age_1))
            }
    
    }
    else { console.log("error1")}
    
}
//let numage_1 = Number.parseInt(age_1);
    
checkAge(age_1, age_2,age_3)