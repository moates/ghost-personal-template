export default function moRandomWord() {
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
    

    const randWordButton = document.getElementById('randWordButton');
    const addSlashButton = document.getElementById('addSlashButton');
    var randWord = document.getElementById('randWord');


    randWordButton.addEventListener('click', function () {
        updateRandWords(numSlash);
    });


    addSlashButton.addEventListener('click', function (){
        numSlash += 1;
        console.log("slash count", numSlash, "out of ", slashMax);

        if(numSlash == slashMax - 1){
            addSlashButton.textContent = "How are we expected to be so many things at once?";
        }
        if(numSlash == slashMax){
            addSlashButton.textContent = "It's almost unbearable.";
        }
        else if(numSlash > slashMax){
            numSlash = 0;
            addSlashButton.textContent = "Add a slash.";
        }
        else{
            console.log("added slash");
        };        

        updateRandWords(numSlash);
    });

    // Utility function to build random words with slashes between
    function updateRandWords(numSlashes) {
        console.log("numSlashes:", numSlashes);
        let output = words.sample();
        for(let i=0; i<numSlashes; i++){
           output += " / " + words.sample();
        }

        randWord.textContent = output;
    };
}