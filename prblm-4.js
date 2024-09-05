
function password(obj)
{
    // function to check the properties are same
    
    function hasExactPropertyNames(obj, expectedProperties) {
        const objKeys = Object.keys(obj);
        const result = objKeys.length === expectedProperties.length && objKeys.every((key, index) => key === expectedProperties[index]);
        return result;
    }
    
    if(typeof(obj) === 'object' && !Array.isArray(obj))
    {
        let properties = ['name', 'birthYear', 'siteName'];
        if(hasExactPropertyNames(obj,properties))
        {
            const { name, birthYear, siteName } = obj;
            if(Number.isInteger(birthYear) && birthYear.toString().length === 4)
            {
                let password = [siteName] + '#' + [name] + '@' + [birthYear];
                return password;
            }
            return 'invalid';
        }
        return 'invalid';
    }
    return 'invalid';
}

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));