a = {
    n: 0,
    a: 0,
    ap: 0,
    sap: 0,
    ascnd: {
        n: 0
    },
    upgrades: {
        infpu: 0
    }
}

var player = JSON.parse(localStorage.getItem("player"))
if (player !== null) {
  a = player
}

var l = window.setInterval(function() {
    if (a.n >= 10) {
        a.n = 0
        a.a += (a.ap + 1) * (a.sap + 1)
    }
    if (a.a >= 10) {
        a.a = 0
        a.ap += a.sap + 1
    }
    if (a.ap >= 10) {
        a.ap = 0
        a.sap += 1
    }
    if ((a.a >= 1) || (a.ap >= 1) || (a.sap >= 1)) {
        if ((a.ap >= 1) || (a.sap >= 1)) {
            document.getElementById("n").innerHTML = `<sup>${a.sap}</sup>a<sub>${a.a}</sub><sup>${a.ap}</sup>: ${a.n}`
        } else {
            document.getElementById("n").innerHTML = `a<sub>${a.a}</sub>: ${a.n}`
        }
    } else {
        document.getElementById("n").innerHTML = `${a.n}`
    }
}, 1)

var al = window.setInterval(function() {
    if (a.ascnd.n >= 1) {
        increasen(a.ascnd.n)
    }
    if (a.sap >= 10) {
        a.sap = 0
        a.ascnd.n += 1
        document.getElementById("an").innerHTML = a.ascnd.n
    }
}, 1)

function increasen(am) {
    a.n += (a.a + am) * (a.ap + 1)
}

function u1() {
    if (a.ap >= 1) {
        a.ap -= 1
        a.upgrades.infpu += 1
    }
}

var sl = windows.setInterval(function() {
    localStorage.setItem("player", JSON.stringify(a))
}, 15000)
