window.onload = function() {
    console.log("Print testing");
    var divs = document.getElementsByTagName('div');
    console.log("DIV LIST");
    console.log(typeof(divs));
    console.log();

    var largeDivsAndNavs = [];

    for (const [key, value] of Object.entries(divs)) {

        if (value.offsetHeight > 400) {
            largeDivsAndNavs.push(value);
        }
    }

    for (var i = 0; i < largeDivsAndNavs.length; i++) {
        for (const [key, value] of Object.entries(largeDivsAndNavs[i].children)) {
            if (largeDivsAndNavs.includes(value)) {
                largeDivsAndNavs.splice(i, 1);
            }
        }
    }

    console.log(largeDivsAndNavs);


    for (var i = 0; i < largeDivsAndNavs.length; i++) {
        largeDivsAndNavs[i].addEventListener("mouseover", function(event) {
            currentLargeDiv = undefined;
            
            this.style.filter = "blur(0px)";
        }, false);


        largeDivsAndNavs[i].addEventListener("mouseout", function(event) {
            this.style.filter = "blur(3px)";
        }, false);
    }   
}