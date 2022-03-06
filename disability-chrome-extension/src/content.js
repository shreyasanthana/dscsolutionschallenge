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

            for (const [num, attributes] of Object.entries(currentLargeDiv.childNodes)) {
                for (var i = 0; i < largeDivsAndNavs.length; i++) {
                    if (currentLargeDiv == largeDivsAndNavs[i]) {
                        continue;
                    }
                    
                    if (largeDivsAndNavs[i].id == attributes.id) {
                        largeDivsAndNavs[i].style.filter = "blur(0px)";
                    }
                }
            }
        }, false);


        largeDivsAndNavs[i].addEventListener("mouseout", function(event) {
            this.style.filter = "blur(3px)";
        }, false);
    }   
}