export default function moRandomWord() {
    //@TODO eventually move the random words to a yaml or config file or something
    const words = ["an artist", 
        "a programmer",
        "a programmer", 
        "an artist", 
        "an artist",
        "a sleepyhead", 
        "a policy analyst", 
        "a collaborator",
        "a performer",  
        "an advocate",
        "a privacy pro",
        "a recovering techie",
        "a dancer", 
        "a cluster of balloons",
        "your future collaborator",
        "a dear friend",
        "a fighter for sex worker rights",
        ];
    

    const slashMax = 4;
    var numSlash = 0;

    // Utility function to pull random object from an array
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)];
    }
    

    //const randWordButton = document.getElementById('randWordButton');
    //const addSlashButton = document.getElementById('addSlashButton');
    var randWord = document.getElementById('randWord');
    var randWordNote = document.getElementById('randWordNote');


    document.getElementById('randWordButton')?.addEventListener('click', function () {
         updateRandWords(numSlash);
         document.getElementById('randWordButton')?.classList.remove('mo-glowing');
         document.getElementById('addSlashButton')?.classList.add('mo-glowing');
    });



    document.getElementById('addSlashButton')?.addEventListener('click', function (){
            numSlash += 1;
            //console.log("slash count", numSlash, "out of ", slashMax);

            if(numSlash == slashMax - 1){
                randWordNote.textContent = "How can we be so many things at once?";
            }
            if(numSlash == slashMax){
                randWordNote.textContent = "It's almost unbearable.";
                document.getElementById('randWordButton')?.classList.remove('mo-glowing');
                document.getElementById('addSlashButton')?.classList.remove('mo-glowing');
            }
            else if(numSlash > slashMax){
                numSlash = 0;
                randWordNote.textContent = "";
            }
            else{
                //console.log("added slash");
            };        

            updateRandWords(numSlash);
    });

    // Utility function to build random words with slashes between
    function updateRandWords(numSlashes) {
        // Pick the first random word and wrap it in a span
        let output = `<span>${words.sample()}</span>`;
        
        // Add additional random words with slashes, wrapping each in a span
        for (let i = 0; i < numSlashes; i++) {
            output += ` / <span>${words.sample()}</span>`;
        }

        // Update the randWord element with the generated HTML
        if (randWord) {
            randWord.innerHTML = output; // Use innerHTML to include the span tags
        }
    };
}