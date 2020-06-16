function base_change(str, base)
{
    var result = 0
    for(var i = 0; i < str.length;i++)
    {
        result += str[i]
        result *= 16
    }
    return result/16
}

function conv( str)
{
    str = str.split("")
    str = str.map((dig)=>{
        if (dig === 'f')
        {
            return 15
        }
        else if (dig === 'e')
        {
            return 14
        }
        else if (dig === 'd')
        {
            return 13
        }
        else if (dig === 'c')
        {
            return 12
        }
        else if (dig === 'b')
        {
            return 11
        }
        else if (dig === 'a')
        {
            return 10
        }
        else {
            try {
                dig = parseInt(dig)
            } catch (e) {
                dig = 0
                console.log("invalid input")
            }
            return dig
        }
    })

    console.log(str)

    return base_change(str, 16)
}

function handleChange(event)
{
    console.log(d3.event.target.value)
    d3.select("#output").text(conv(d3.event.target.value))
}

console.log("start")
d3.select("input").on("change",handleChange)
