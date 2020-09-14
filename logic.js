var edu_i = 0
var exp_i = 0
var prof_i = 0

d3.select("#edu-btn").on("click", event => {
    d3.select("#edu").style("visibility",d => {
        edu_i += 1
        if (edu_i % 2) {
            return "visible"
        }
        else {
            return "hidden"
        }
    })
})

d3.select("#exp-btn").on("click", event => {
    d3.select("#exp").style("visibility",d => {
        exp_i += 1
        if (exp_i % 2) {
            return "visible"
        }
        else {
            return "hidden"
        }
    })
})

d3.select("#profbtn").on("click", event => {
    prof_i += 1

    d3.select("#professional").style("visibility",d => {
        if (prof_i % 2) {
            return "visible"
        }
        else {
            return "hidden"
        }
    })

    
    d3.select("#search2").style("visibility",d => {
        if (prof_i % 2) {
            return "visible"
        }
        else {
            return "hidden"
        }
    })

    d3.select("#search1").style("visibility",d => {
        if (prof_i % 2) {
            return "hidden"
        }
        else {
            return "visible"
        }
    })
})
