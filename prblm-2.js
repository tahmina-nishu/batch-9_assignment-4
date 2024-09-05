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

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(["Rashed"]));