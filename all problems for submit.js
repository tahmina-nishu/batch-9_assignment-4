function calculateMoney(ticketSale)
{
    const fixedCost = 500 + (8 * 50);
    if(ticketSale >= 0)
    {
        const remainMoney = (ticketSale * 120) - fixedCost;
        return remainMoney;
    }
    else
        return "Invalid Number";
}




function checkName(name)
{
    if(typeof(name) === 'string')
    {
        const stringLength = name.length;
        const lastChar = name[stringLength - 1];
        if(lastChar === 'a' || lastChar === 'A' || lastChar === 'e' || lastChar === 'E' || lastChar === 'i' || lastChar === 'I' || lastChar === 'o' || lastChar === 'O' || lastChar === 'u' || lastChar === 'U')
            return "Good Name";
        else
            return "Bad Name";
    }
    else
        return "invalid";
}




function deleteInvalids(array)
{
    var newArray = [];
    if(Array.isArray(array))
    {
        for(element of array)
        {
            if(typeof(element) === 'number' && !isNaN(element))
                newArray.push(element);
        }
        return newArray;
    }
    return 'Invalid Array';
}




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




function monthlySavings(arr , livingCost)
{
    if(Array.isArray(arr) && typeof(livingCost) === 'number' && !isNaN(livingCost))
    {
        let totalPayment = 0;
        let tax = 0;

        for(payment of arr)
        {
            totalPayment += payment;
            if(payment >= 3000)
                tax += payment * 0.2;
        }
        const savings = totalPayment - (tax + livingCost);
        if(savings < 0)
            return 'earn more';
        else
            return savings;
    }
    return 'invalid input';
}