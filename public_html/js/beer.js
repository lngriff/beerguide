/* 
 * Beer Tree Javascript 1.0
 * by Griffith
 * http://crush-code.tumblr.com
 */

var g = {
                nodes: [],
                edges: []
            };
            
            s = new sigma({
                graph: g,
                container: "container",
                renderer: {
                    container: document.getElementById("container"),
                    type: "canvas"
                },
                settings: {
                    borderSize: 4, 
                    defaultNodeColor: "#ec5148",
                    defaultEdgeColor: "#939393",
                    defaultNodeBorderColor: "#31302c",
                    defaultLabelColor: "#31302c",
                    defaultLabelHoverColor: "#31302c",
                    edgeColor: "default",
                    hoverFontStyle: "bold",
                    labelColor: "default",
                    labelHoverColor: "default",
                    labelThreshold: 1,
                    labelSize: "proportional",
                    labelSizeRatio: 2
                }
            });
            
            sigma.parsers.json("mega_beers.json", s, function() {
                s.refresh();
                s.startForceAtlas2();
            });

            //handles selecting nodes and changing data
            //should probably include some highlighting of the node itself
            //also helps keep track of what node is being looked at
            s.bind("clickNode", function(e) {
                showExample('style');
                document.getElementById("beerInfo").innerHTML =
                        "<b>STYLE: </b>" + JSON.stringify(e.data.node.label).replace(/\"/g, "") +
                        "<br/>" +
                        "<b>ABV: </b>" + JSON.stringify(e.data.node.ABV).replace(/\"/g, "")  +
                        "<br/>" +
                        "<b>IBU: </b>" + JSON.stringify(e.data.node.IBU).replace(/\"/g, "")  +
                        "<br/>" +
                        "<b>DESC: </b>" + JSON.stringify(e.data.node.DESC).replace(/\"/g, "");
                document.getElementById("ex1").innerHTML =
                        "<b>STYLE: </b>" + JSON.stringify(e.data.node.label).replace(/\"/g, "") +
                        "<br/>" +
                        "<b>BREW NAME: </b>" + JSON.stringify(e.data.node.EX_1).replace(/\"/g, "") +
                        "</br>" +
                        "<b>BREWERY: </b>" + JSON.stringify(e.data.node.BREWERY_1).replace(/\"/g, "") +
                        "</br>" +
                        "<b>ORIGIN: </b>" + JSON.stringify(e.data.node.REGION_1).replace(/\"/g, "") +
                        "</br>" +
                        "<b>ABV: </b>" + JSON.stringify(e.data.node.ABV_1).replace(/\"/g, "") +
                        "</br>" +
                        "<b>IBU: </b>" + JSON.stringify(e.data.node.IBU_1).replace(/\"/g, "");
                document.getElementById("ex2").innerHTML =
                        "<b>STYLE: </b>" + JSON.stringify(e.data.node.label).replace(/\"/g, "") +
                        "<br/>" +
                        "<b>BREW NAME: </b>" + JSON.stringify(e.data.node.EX_2).replace(/\"/g, "") +
                        "</br>" +
                        "<b>BREWERY: </b>" + JSON.stringify(e.data.node.BREWERY_2).replace(/\"/g, "") +
                        "</br>" +
                        "<b>ORIGIN: </b>" + JSON.stringify(e.data.node.REGION_2).replace(/\"/g, "") +
                        "</br>" +
                        "<b>ABV: </b>" + JSON.stringify(e.data.node.ABV_2).replace(/\"/g, "") +
                        "</br>" +
                        "<b>IBU: </b>" + JSON.stringify(e.data.node.IBU_2).replace(/\"/g, "");
                document.getElementById("ex3").innerHTML =
                        "<b>STYLE: </b>" + JSON.stringify(e.data.node.label).replace(/\"/g, "") +
                        "<br/>" +
                        "<b>BREW NAME: </b>" + JSON.stringify(e.data.node.EX_3).replace(/\"/g, "") +
                        "</br>" +
                        "<b>BREWERY: </b>" + JSON.stringify(e.data.node.BREWERY_3).replace(/\"/g, "") +
                        "</br>" +
                        "<b>ORIGIN: </b>" + JSON.stringify(e.data.node.REGION_3).replace(/\"/g, "") +
                        "</br>" +
                        "<b>ABV: </b>" + JSON.stringify(e.data.node.ABV_3).replace(/\"/g, "") +
                        "</br>" +
                        "<b>IBU: </b>" + JSON.stringify(e.data.node.IBU_3).replace(/\"/g, "");
            });
            
            function showExample(which) {       
                switch (which) {
                    case "ex1":
                        document.getElementById("beerInfo").style.display = "none";
                        document.getElementById("ex1").style.display = "block";
                        document.getElementById("ex2").style.display = "none";
                        document.getElementById("ex3").style.display = "none";
                        document.getElementById("styleTab").style.backgroundColor = "#806343";
                        document.getElementById("ex1Tab").style.backgroundColor = "#FFC98F";
                        document.getElementById("ex2Tab").style.backgroundColor = "#806343";
                        document.getElementById("ex3Tab").style.backgroundColor = "#806343";
                        break;
                    case "ex2":
                        document.getElementById("beerInfo").style.display = "none";
                        document.getElementById("ex1").style.display = "none";
                        document.getElementById("ex2").style.display = "block";
                        document.getElementById("ex3").style.display = "none";
                        document.getElementById("styleTab").style.backgroundColor = "#806343";
                        document.getElementById("ex1Tab").style.backgroundColor = "#806343";
                        document.getElementById("ex2Tab").style.backgroundColor = "#FFC98F";
                        document.getElementById("ex3Tab").style.backgroundColor = "#806343";
                        break;
                    case "ex3":
                        document.getElementById("beerInfo").style.display = "none";
                        document.getElementById("ex1").style.display = "none";
                        document.getElementById("ex2").style.display = "none";
                        document.getElementById("ex3").style.display = "block";
                        document.getElementById("styleTab").style.backgroundColor = "#806343";
                        document.getElementById("ex1Tab").style.backgroundColor = "#806343";
                        document.getElementById("ex2Tab").style.backgroundColor = "#806343";
                        document.getElementById("ex3Tab").style.backgroundColor = "#FFC98F";
                        break;
                    case "style":
                        document.getElementById("beerInfo").style.display = "block";
                        document.getElementById("ex1").style.display = "none";
                        document.getElementById("ex2").style.display = "none";
                        document.getElementById("ex3").style.display = "none";
                        document.getElementById("styleTab").style.backgroundColor = "#FFC98F";
                        document.getElementById("ex1Tab").style.backgroundColor = "#806343";
                        document.getElementById("ex2Tab").style.backgroundColor = "#806343";
                        document.getElementById("ex3Tab").style.backgroundColor = "#806343";
                        break;
                    case "help":
                        document.getElementById("help").style.display = "block";
                        document.getElementById("helpNav").style.display = "block";
                        break;
                    case "unhelp":
                        document.getElementById("help").style.display = "none";
                        document.getElementById("helpNav").style.display = "none";
                        break;
                    default:
                        document.getElementById("beerInfo").innerHTML =
                                "something horrible has happened";
                }
            };
            
            function getHelp(what) {
                switch(what) {
                    case "101": 
                        document.getElementById("help").innerHTML = "bleee blooo beer 101 info here";
                        document.getElementById("101").style.backgroundColor = "#FFC98F";
                        document.getElementById("vocab").style.backgroundColor = "#806343";
                        document.getElementById("glass").style.backgroundColor = "#806343";
                        document.getElementById("faq").style.backgroundColor = "#806343";
                        break;
                    case "vocab":
                        document.getElementById("help").innerHTML = "<font size=\"3\"><b>Malt</b></font> &emsp;Refers to malted grains, which are grains which have been partially allowed "
                        + "to germinate. The malt provides the starch source for fermentation. Malt in beer is "
                        + "typically malted barley."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>Hops</b></font> A type of flower used in the flavoring of beer. Hops were originally "
                        + "used for their preservative properties but have since been cultivated into hundreds of variations "
                        + "with unique flavors made to enhance beer. Hops are responsible for the bitter taste of beer."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>Adjunct</b></font> An unmalted grain (such as wheat, rye, oats, corn, or rice) which is "
                        + "added alongside the malt as a supplement. Sometimes this is done in order to cut costs "
                        + "(like in mass-produced or light beers, which often contain a lot of corn and/or rice) and in "
                        + "other cases is used to create a different flavor or change properties of the beer (as in "
                        + "wheat or rye beers.)"
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>Session</b></font> Though there is no accepted or official definition, a session beer is "
                        + "generally considered to be an \"all day drinking\" kind of beer. It is a brew that is not "
                        + "particularly bitter and has an ABV at or around 5. Session beers are supposed to be light "
                        + "and easy to drink, so that you can enjoy several during a set period of time."
                        + "</br>"
                        + "<font size=\"3\"><b>IBU</b></font> Stands for International Bittering Units (sometimes called International "
                        + "Bitterness Units), which is the measurement of actual bitterness of beer based on "
                        + "the amount of alpha acid contributed by the hops. Apparent bitterness will vary based "
                        + "on personal taste, but an IBU <20 generally corresponds to very little hop flavor "
                        + "and >45 means lots of hop taste."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>ABV</b></font> Stands for Alcohol by Volume, which indicates how much of the beer "
                        + "is alcohol. ABV is measured as a percentage and the higher the number the more alcoholic "
                        + "the beer. Beers that have high ABV are sometimes referred to as <b>high gravity</b>."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>SRM</b></font> Stands for Scientific Reference Method, the scale for determining "
                        + "the color of a beer based on how much of a certain wavelength of light passes through "
                        + "a set amount of the liquid. The colors of nodes here are based on average SRM for "
                        + "each style.";
                        document.getElementById("101").style.backgroundColor = "#806343";
                        document.getElementById("vocab").style.backgroundColor = "#FFC98F";
                        document.getElementById("glass").style.backgroundColor = "#806343";
                        document.getElementById("faq").style.backgroundColor = "#806343";
                        break;
                    case "glass":
                        document.getElementById("help").innerHTML = "Just like "
                        + "how champagne is served in a flute and wine is served in a wine glass, "
                        + "there is a proper glass for each style of beer. Though not necessary for the "
                        + "enjoyment beer, correct glassware can enhance the experience by controlling "
                        + "the carbonation, temperature, and smell of a beer."  
                        + "</br>"
                        + "Each style in this guide has an image of its most suitable glass alongside its "
                        + "description. Below is a quick and dirty guide to all the different glasses.";
                        document.getElementById("101").style.backgroundColor = "#806343";
                        document.getElementById("vocab").style.backgroundColor = "#806343";
                        document.getElementById("glass").style.backgroundColor = "#FFC98F";
                        document.getElementById("faq").style.backgroundColor = "#806343";
                        break;
                    case "faq":
                        document.getElementById("help").innerHTML = "<font size=\"3\"><b>Why was this made?</b></font>"
                        + "</br>"
                        + "The world of craft beer is big and exciting, but can be daunting to a newcomer. "
                        + "There are a bunch of different styles and knowing what to try can be tough, "
                        + "especially if you don't pick your beer up at a specialty store staffed by experts."
                        + "It's my hope that this tool helps beer newbs get a better idea of what to drink "
                        + "and how to talk about craft beer. I also hope a few beer nerds get a kick out of it!"
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>How did you pick the beers?</b></font>"
                        + "</br>"
                        + "Where applicable, I tried to use examples that I've had that I can personally "
                        + "vouch for as good beer. I avoided one-offs and seasonals and tried to get good "
                        + "brews with the widest distribution possible so the tool is applicable to people "
                        + "all over the US (sorry international beer fans!)"
                        + "</br>"
                        + "When in doubt, I consulted RateBeer.com to find well-rated and oft-drank examples "
                        + "in each style."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>What were your sources?</b></font>"
                        + "</br>"
                        + "The general information for almost all of the beers was taken from the newest "
                        + "edition of the <a href=\"http://www.bjcp.org/\">BJCP</a>. Information that was missing was filled in by myself "
                        + "and the brewers I talked to."
                        + "</br>"
                        + "Information for the beer examples was taken directly from brewery websites, where "
                        + "applicable. Missing information was estimated based on taste and/or discussion with "
                        + "copycat homebrewers."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>Why is there no cider on this tree?</b></font>"
                        + "</br>"
                        + "Though a popular fermented beverage that can be bought alongside beer on draught, in a bottle, "
                        + "or in a can, cider is not actually beer. Cider and beer actually have very little in common "
                        + "in terms of ingredients and use different brewing processes."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>Who made this?</b></font>"
                        + "</br>"
                        + "I did! I'm Griffith, an Atlanta based programmer + artist. You can find more "
                        + "info about my other projects over on my blog, <a href=\"http://crush-code.tumblr.com\">crush-code</a>."
                        + "</br>"
                        + "</br>"
                        + "<font size=\"3\"><b>I'm a brewer and I don't want my beer featured here/I found an error about my beer.</b></font>"
                        + "</br>"
                        + "Sorry about that! If you spotted an error or you want me to remove your beer as an "
                        + "example, please email me at griffithlaurenn(at)gmail";
                        document.getElementById("101").style.backgroundColor = "#806343";
                        document.getElementById("vocab").style.backgroundColor = "#806343";
                        document.getElementById("glass").style.backgroundColor = "#806343";
                        document.getElementById("faq").style.backgroundColor = "#FFC98F";
                        break;
                    case "close":
                        showExample("unhelp");
                        break;
                    default:
                        document.getElementById("help").innerHTML = "bleee blooo beer 101 info here";
              }  
            };

