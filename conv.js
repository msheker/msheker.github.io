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

hex = { 'f':15,
        'e':14,
        'd':13,
        'c':12,
        'b':11,
        'a':10  }

function conv( str)
{
    str = str.toLowerCase().split("")
    str = str.map((dig)=>{
        if (dig in hex){
            return hex[dig]
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

d3.select("input").on("change", event =>
{
    var val = d3.event.target.value
    console.log(val)
    d3.select("#output").text(conv(val))
    d3.event.target.value = ""
})

d3.select("#enter").on("click", event =>
{
    console.log(d3.select("input").html());
})
