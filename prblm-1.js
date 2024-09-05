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

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));