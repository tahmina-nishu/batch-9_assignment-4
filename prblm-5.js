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

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));