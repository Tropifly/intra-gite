
function testDates() {

var variable1 = document.getElementById("td1");
variable1.style.backgroundColor = "silver";

var variable2 = document.getElementById("td2");
variable2.style.backgroundColor = "silver";

var variable3 = document.getElementById("td3");

if (localStorage.getItem("couleur") === null) {
    variable3.style.backgroundColor = "white";
};

console.log(localStorage.getItem("couleur"));

if (localStorage.getItem("couleur") === "'white'") {
    variable3.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur") === "'green'") {
    variable3.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur") === "'red'") {
    variable3.style.backgroundColor = "red";
};

console.log(localStorage.getItem("couleur"));


variable3.addEventListener("click", function () {
    console.log("cliquer");
    if (variable3.style.backgroundColor === "white") {
        variable3.style.backgroundColor = "green";
        localStorage.setItem("couleur", "'green'");
    } else if (variable3.style.backgroundColor === "green") {
        variable3.style.backgroundColor = "red";
        localStorage.setItem("couleur", "'red'");
    } else if (variable3.style.backgroundColor === "red") {
        variable3.style.backgroundColor = "white";
        localStorage.setItem("couleur", "'white'");
    }
});

var variable4 = document.getElementById("td4");
variable4.style.backgroundColor = "white";

variable4.addEventListener("click", function () {
    console.log("cliquer");
    if (variable4.style.backgroundColor === "white") {
        variable4.style.backgroundColor = "green";
    } else if (variable4.style.backgroundColor === "green") {
        variable4.style.backgroundColor = "red";
    } else if (variable4.style.backgroundColor === "red") {
        variable4.style.backgroundColor = "white";
    }
});

var variable5 = document.getElementById("td5");
variable5.style.backgroundColor = "white";

variable5.addEventListener("click", function () {
    console.log("cliquer");
    if (variable5.style.backgroundColor === "white") {
        variable5.style.backgroundColor = "green";
    } else if (variable5.style.backgroundColor === "green") {
        variable5.style.backgroundColor = "red";
    } else if (variable5.style.backgroundColor === "red") {
        variable5.style.backgroundColor = "white";
    }
});

var variable6 = document.getElementById("td6");
variable6.style.backgroundColor = "white";

variable6.addEventListener("click", function () {
    console.log("cliquer");
    if (variable6.style.backgroundColor === "white") {
        variable6.style.backgroundColor = "green";
    } else if (variable6.style.backgroundColor === "green") {
        variable6.style.backgroundColor = "red";
    } else if (variable6.style.backgroundColor === "red") {
        variable6.style.backgroundColor = "white";
    }
});

var variable7 = document.getElementById("td7");
variable7.style.backgroundColor = "white";

variable7.addEventListener("click", function () {
    console.log("cliquer");
    if (variable7.style.backgroundColor === "white") {
        variable7.style.backgroundColor = "green";
    } else if (variable7.style.backgroundColor === "green") {
        variable7.style.backgroundColor = "red";
    } else if (variable7.style.backgroundColor === "red") {
        variable7.style.backgroundColor = "white";
    }
});

var variable8 = document.getElementById("td8");
variable8.style.backgroundColor = "white";

variable8.addEventListener("click", function () {
    console.log("cliquer");
    if (variable8.style.backgroundColor === "white") {
        variable8.style.backgroundColor = "green";
    } else if (variable8.style.backgroundColor === "green") {
        variable8.style.backgroundColor = "red";
    } else if (variable8.style.backgroundColor === "red") {
        variable8.style.backgroundColor = "white";
    }
});

var variable9 = document.getElementById("td9");
variable9.style.backgroundColor = "white";

variable9.addEventListener("click", function () {
    console.log("cliquer");
    if (variable9.style.backgroundColor === "white") {
        variable9.style.backgroundColor = "green";
    } else if (variable9.style.backgroundColor === "green") {
        variable9.style.backgroundColor = "red";
    } else if (variable9.style.backgroundColor === "red") {
        variable9.style.backgroundColor = "white";
    }
});

var variable10 = document.getElementById("td10");
variable10.style.backgroundColor = "white";

variable10.addEventListener("click", function () {
    console.log("cliquer");
    if (variable10.style.backgroundColor === "white") {
        variable10.style.backgroundColor = "green";
    } else if (variable10.style.backgroundColor === "green") {
        variable10.style.backgroundColor = "red";
    } else if (variable10.style.backgroundColor === "red") {
        variable10.style.backgroundColor = "white";
    }
});

var variable11 = document.getElementById("td11");
variable11.style.backgroundColor = "white";

variable11.addEventListener("click", function () {
    console.log("cliquer");
    if (variable11.style.backgroundColor === "white") {
        variable11.style.backgroundColor = "green";
    } else if (variable11.style.backgroundColor === "green") {
        variable11.style.backgroundColor = "red";
    } else if (variable11.style.backgroundColor === "red") {
        variable11.style.backgroundColor = "white";
    }
});

var variable12 = document.getElementById("td12");
variable12.style.backgroundColor = "white";

variable12.addEventListener("click", function () {
    console.log("cliquer");
    if (variable12.style.backgroundColor === "white") {
        variable12.style.backgroundColor = "green";
    } else if (variable12.style.backgroundColor === "green") {
        variable12.style.backgroundColor = "red";
    } else if (variable12.style.backgroundColor === "red") {
        variable12.style.backgroundColor = "white";
    }
});

var variable13 = document.getElementById("td13");
variable13.style.backgroundColor = "white";

variable13.addEventListener("click", function () {
    console.log("cliquer");
    if (variable13.style.backgroundColor === "white") {
        variable13.style.backgroundColor = "green";
    } else if (variable13.style.backgroundColor === "green") {
        variable13.style.backgroundColor = "red";
    } else if (variable13.style.backgroundColor === "red") {
        variable13.style.backgroundColor = "white";
    }
});

var variable14 = document.getElementById("td14");
variable14.style.backgroundColor = "white";

variable14.addEventListener("click", function () {
    console.log("cliquer");
    if (variable14.style.backgroundColor === "white") {
        variable14.style.backgroundColor = "green";
    } else if (variable14.style.backgroundColor === "green") {
        variable14.style.backgroundColor = "red";
    } else if (variable14.style.backgroundColor === "red") {
        variable14.style.backgroundColor = "white";
    }
});

var variable15 = document.getElementById("td15");
variable15.style.backgroundColor = "white";

variable15.addEventListener("click", function () {
    console.log("cliquer");
    if (variable15.style.backgroundColor === "white") {
        variable15.style.backgroundColor = "green";
    } else if (variable15.style.backgroundColor === "green") {
        variable15.style.backgroundColor = "red";
    } else if (variable15.style.backgroundColor === "red") {
        variable15.style.backgroundColor = "white";
    }
});

var variable16 = document.getElementById("td16");
variable16.style.backgroundColor = "white";

variable16.addEventListener("click", function () {
    console.log("cliquer");
    if (variable16.style.backgroundColor === "white") {
        variable16.style.backgroundColor = "green";
    } else if (variable16.style.backgroundColor === "green") {
        variable16.style.backgroundColor = "red";
    } else if (variable16.style.backgroundColor === "red") {
        variable16.style.backgroundColor = "white";
    }
});

var variable17 = document.getElementById("td17");
variable17.style.backgroundColor = "white";

variable17.addEventListener("click", function () {
    console.log("cliquer");
    if (variable17.style.backgroundColor === "white") {
        variable17.style.backgroundColor = "green";
    } else if (variable17.style.backgroundColor === "green") {
        variable17.style.backgroundColor = "red";
    } else if (variable17.style.backgroundColor === "red") {
        variable17.style.backgroundColor = "white";
    }
});

var variable18 = document.getElementById("td18");
variable18.style.backgroundColor = "white";

variable18.addEventListener("click", function () {
    console.log("cliquer");
    if (variable18.style.backgroundColor === "white") {
        variable18.style.backgroundColor = "green";
    } else if (variable18.style.backgroundColor === "green") {
        variable18.style.backgroundColor = "red";
    } else if (variable18.style.backgroundColor === "red") {
        variable18.style.backgroundColor = "white";
    }
});

var variable19 = document.getElementById("td19");
variable19.style.backgroundColor = "white";

variable19.addEventListener("click", function () {
    console.log("cliquer");
    if (variable19.style.backgroundColor === "white") {
        variable19.style.backgroundColor = "green";
    } else if (variable19.style.backgroundColor === "green") {
        variable19.style.backgroundColor = "red";
    } else if (variable19.style.backgroundColor === "red") {
        variable19.style.backgroundColor = "white";
    }
});

var variable20 = document.getElementById("td20");
variable20.style.backgroundColor = "white";

variable20.addEventListener("click", function () {
    console.log("cliquer");
    if (variable20.style.backgroundColor === "white") {
        variable20.style.backgroundColor = "green";
    } else if (variable20.style.backgroundColor === "green") {
        variable20.style.backgroundColor = "red";
    } else if (variable20.style.backgroundColor === "red") {
        variable20.style.backgroundColor = "white";
    }
});

var variable21 = document.getElementById("td21");
variable21.style.backgroundColor = "white";

variable21.addEventListener("click", function () {
    console.log("cliquer");
    if (variable21.style.backgroundColor === "white") {
        variable21.style.backgroundColor = "green";
    } else if (variable21.style.backgroundColor === "green") {
        variable21.style.backgroundColor = "red";
    } else if (variable21.style.backgroundColor === "red") {
        variable21.style.backgroundColor = "white";
    }
});

var variable22 = document.getElementById("td22");
variable22.style.backgroundColor = "white";

variable22.addEventListener("click", function () {
    console.log("cliquer");
    if (variable22.style.backgroundColor === "white") {
        variable22.style.backgroundColor = "green";
    } else if (variable22.style.backgroundColor === "green") {
        variable22.style.backgroundColor = "red";
    } else if (variable22.style.backgroundColor === "red") {
        variable22.style.backgroundColor = "white";
    }
});

var variable23 = document.getElementById("td23");
variable23.style.backgroundColor = "white";

variable23.addEventListener("click", function () {
    console.log("cliquer");
    if (variable23.style.backgroundColor === "white") {
        variable23.style.backgroundColor = "green";
    } else if (variable23.style.backgroundColor === "green") {
        variable23.style.backgroundColor = "red";
    } else if (variable23.style.backgroundColor === "red") {
        variable23.style.backgroundColor = "white";
    }
});

var variable24 = document.getElementById("td24");
variable24.style.backgroundColor = "white";

variable24.addEventListener("click", function () {
    console.log("cliquer");
    if (variable24.style.backgroundColor === "white") {
        variable24.style.backgroundColor = "green";
    } else if (variable24.style.backgroundColor === "green") {
        variable24.style.backgroundColor = "red";
    } else if (variable24.style.backgroundColor === "red") {
        variable24.style.backgroundColor = "white";
    }
});

var variable25 = document.getElementById("td25");
variable25.style.backgroundColor = "white";

variable25.addEventListener("click", function () {
    console.log("cliquer");
    if (variable25.style.backgroundColor === "white") {
        variable25.style.backgroundColor = "green";
    } else if (variable25.style.backgroundColor === "green") {
        variable25.style.backgroundColor = "red";
    } else if (variable25.style.backgroundColor === "red") {
        variable25.style.backgroundColor = "white";
    }
});

var variable26 = document.getElementById("td26");
variable26.style.backgroundColor = "white";

variable26.addEventListener("click", function () {
    console.log("cliquer");
    if (variable26.style.backgroundColor === "white") {
        variable26.style.backgroundColor = "green";
    } else if (variable26.style.backgroundColor === "green") {
        variable26.style.backgroundColor = "red";
    } else if (variable26.style.backgroundColor === "red") {
        variable26.style.backgroundColor = "white";
    }
});

var variable27 = document.getElementById("td27");
variable27.style.backgroundColor = "white";

variable27.addEventListener("click", function () {
    console.log("cliquer");
    if (variable27.style.backgroundColor === "white") {
        variable27.style.backgroundColor = "green";
    } else if (variable27.style.backgroundColor === "green") {
        variable27.style.backgroundColor = "red";
    } else if (variable27.style.backgroundColor === "red") {
        variable27.style.backgroundColor = "white";
    }
});

var variable28 = document.getElementById("td28");
variable28.style.backgroundColor = "white";

variable28.addEventListener("click", function () {
    console.log("cliquer");
    if (variable28.style.backgroundColor === "white") {
        variable28.style.backgroundColor = "green";
    } else if (variable28.style.backgroundColor === "green") {
        variable28.style.backgroundColor = "red";
    } else if (variable28.style.backgroundColor === "red") {
        variable28.style.backgroundColor = "white";
    }
});

var variable29 = document.getElementById("td29");
variable29.style.backgroundColor = "white";

variable29.addEventListener("click", function () {
    console.log("cliquer");
    if (variable29.style.backgroundColor === "white") {
        variable29.style.backgroundColor = "green";
    } else if (variable29.style.backgroundColor === "green") {
        variable29.style.backgroundColor = "red";
    } else if (variable29.style.backgroundColor === "red") {
        variable29.style.backgroundColor = "white";
    }
});

var variable30 = document.getElementById("td30");
variable30.style.backgroundColor = "white";

variable30.addEventListener("click", function () {
    console.log("cliquer");
    if (variable30.style.backgroundColor === "white") {
        variable30.style.backgroundColor = "green";
    } else if (variable30.style.backgroundColor === "green") {
        variable30.style.backgroundColor = "red";
    } else if (variable30.style.backgroundColor === "red") {
        variable30.style.backgroundColor = "white";
    }
});

var variable31 = document.getElementById("td31");
variable31.style.backgroundColor = "white";

variable31.addEventListener("click", function () {
    console.log("cliquer");
    if (variable31.style.backgroundColor === "white") {
        variable31.style.backgroundColor = "green";
    } else if (variable31.style.backgroundColor === "green") {
        variable31.style.backgroundColor = "red";
    } else if (variable31.style.backgroundColor === "red") {
        variable31.style.backgroundColor = "white";
    }
});

var variable32 = document.getElementById("td32");
variable32.style.backgroundColor = "white";

variable32.addEventListener("click", function () {
    console.log("cliquer");
    if (variable32.style.backgroundColor === "white") {
        variable32.style.backgroundColor = "green";
    } else if (variable32.style.backgroundColor === "green") {
        variable32.style.backgroundColor = "red";
    } else if (variable32.style.backgroundColor === "red") {
        variable32.style.backgroundColor = "white";
    }
});

var variable33 = document.getElementById("td33");
variable33.style.backgroundColor = "white";

variable33.addEventListener("click", function () {
    console.log("cliquer");
    if (variable33.style.backgroundColor === "white") {
        variable33.style.backgroundColor = "green";
    } else if (variable33.style.backgroundColor === "green") {
        variable33.style.backgroundColor = "red";
    } else if (variable33.style.backgroundColor === "red") {
        variable33.style.backgroundColor = "white";
    }
});

var variable34 = document.getElementById("td34");
variable34.style.backgroundColor = "silver";

var variable35 = document.getElementById("td35");
variable35.style.backgroundColor = "silver";

};

testDates();


