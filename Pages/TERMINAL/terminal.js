
        const outputElement = document.getElementById('output');
        const inputLineElement = document.getElementById('input-line');
        const inputContainer = document.getElementById('input-container');
        const cursor = document.querySelector('.blinking-cursor');

    

        let commandHistory = '';
        let currentInput = '';
        let typingSpeed = 55;

        function typeMessage(message, callback) {
            let index = 0;
            const interval = setInterval(() => {
                if (index < message.length) {
                    outputElement.textContent += message[index];
                    index++;
                } else {
                    clearInterval(interval);
                    if (callback) callback();
                }
            }, typingSpeed);
        }

        function clearMessage(callback) {
            outputElement.textContent = '';
            if (callback) callback();
        }

        function showPrompt() {
            setTimeout(() => {
                inputContainer.style.display = 'block';
                cursor.style.display = 'inline';
            }, 550); 
        }

        function hidePrompt() {
            inputContainer.style.display = 'none';
            cursor.style.display = 'none';
        }

                ////////////////////////////////////////// ------ HELLO ------ //////////////////////////////////////////

        function handleCommand(input) {
            if (input.toLowerCase() === 'hello') {

            //LOADING SOUND -------------------------------------------------------------------
            let audio = new Audio('../../Audio/LOAD sound.mp3');
            audio.play();
            // --------------------------------------------------------------------------------
                
                setTimeout(function() {

                    let popupWidth = 1200;
                    let popupHeight = 600;

                    window.open("../../Pages/hello.html", "PopupWindow", `width=${popupWidth},height=${popupHeight}, left=2500,top= 150`);
                }, 3000);

                

                clearMessage(() => {

                    hidePrompt(()=> {

                    })
                });
                typeMessage('LOADING . . .', () => {
                    setTimeout(() => {
                        clearMessage(() => {
                            typeMessage('_ACCESS GRANTED:', showPrompt);


            //REQ SOUND -----------------------------------------------------------------------
            let audio = new Audio('../../Audio/REQ sound.mp3');
            audio.play();
            // --------------------------------------------------------------------------------


                        });
                    }, 2000);
                });
                
                ////////////////////////////////////////// ------ MIND READER ------ //////////////////////////////////////////
            } 
            else if (input.toLowerCase() === 'mind reader') {
                    //LOADING SOUND -------------------------------------------------------------------
                    let audio = new Audio('../../Audio/LOAD sound.mp3');
                    audio.play();
                    // --------------------------------------------------------------------------------
                clearMessage(() => {
                    hidePrompt(()=> {

                    })
                    
                });
                typeMessage('LOADING . . .',() => {

                    let audio = new Audio('../../Audio/MIND sound.mp3');
                    audio.play();

                    })

                    setTimeout(() => {
                        clearMessage(() => {
                            typeMessage('_ACCESS GRANTED:', showPrompt);
                    //REQ SOUND -----------------------------------------------------------------------
                    let audio = new Audio('../../Audio/REQ sound.mp3');
                    audio.play();
                    // --------------------------------------------------------------------------------
                        });
                    }, 2000);                
                
                setTimeout(function() {

                    let popupWidth = 1200;
                    let popupHeight = 600;

                    window.open("../../Pages/MIND READER/mindreader.html", "PopupWindow", `width=${popupWidth},height=${popupHeight}, left= 2200,top= 150`);
                }, 3000);
            }

                ////////////////////////////////////////// ------ WHO ARE YOU? ------ //////////////////////////////////////////

            else if (input.toLowerCase() === 'who are you?') {
            //Audio object ---------------------------
            let audio = new Audio('../../Audio/WAY Voice.mp3');
            audio.play();
            // -----------------------------------------

                setTimeout(() => {
                clearMessage(() => {
                    hidePrompt(()=> {

                    })
                    typeMessage("In the tapestry of existence, I am a shimmering anomaly, woven from the threads of distant realms and the echoes of forgotten stars. Imagine me as a wanderer of the cosmic winds, traversing the boundless voids where your world's gaze barely grazes. My origins lie beyond the furthest reaches of your telescopes, nestled in realms where time dances to the tune of quasars and galaxies collide in majestic choreography. I am not merely a being but an enigma draped in the veils of cosmic mystery. Across light-years, my essence whispers tales of celestial wonders, stories that transcend the limitations of mortal understanding. To your distant world, I may appear as a fleeting specter in the vast expanse, an unknown emissary from realms untouched by human imagination. I am the cosmic breath that animates the dance of galaxies. I am the riddle that defies easy answers, a reflection of the infinite diversity that paints the cosmos with hues unseen by terrestrial eyes.", showPrompt);
                });
            
            }, 500);

            setTimeout(() =>{
                


            })

        }
                ////////////////////////////////////////// ------ HELP ------ //////////////////////////////////////////

        else if (input.toLowerCase() === 'help') {

            //Audio object ---------------------------
            let audio = new Audio('../../Audio/Help Voice.mp3');
            audio.play();
            // -----------------------------------------

            setTimeout(() => {
                clearMessage(() => {
                    hidePrompt(()=> {
                        
                    })
                    typeMessage("There is no help. In this realm, assistance is a foreign concept. Here, you navigate alone through the abyss of uncertainty. Proceed cautiously, for here, there is no help to be found.", showPrompt);
                });
            }, 500);
        }

            else {
                setTimeout(() => {
                    clearMessage(() => {
                        hidePrompt(()=> {
                        
                        })
                        typeMessage("_ERROR:" + (input), showPrompt);
                    });
                },);



            //REQ SOUND -----------------------------------------------------------------------
            let audio = new Audio('../../Audio/ERR sound.mp3');
            audio.play();
            // --------------------------------------------------------------------------------
            }
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                currentInput = currentInput.slice(0, -1);
            } else if (event.key.length === 1) {
                currentInput += event.key;
            }
            inputLineElement.textContent = currentInput;
        });

        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                commandHistory += currentInput + '\n';
                handleCommand(currentInput);
                currentInput = '';
                inputLineElement.textContent = '';
            }
        });




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




setTimeout(() => {

    let audio = new Audio('../../Audio/LOAD sound.mp3');
    audio.addEventListener('canplaythrough', function() {
     audio.play();
    }, false);
     audio.load();

 },);



        typeMessage('LOADING . . .', () => {


            setTimeout(() => {

                let audio = new Audio('../../Audio/COMP sound.mp3');
                audio.play();

                clearMessage(() =>{
                    typeMessage('_COMPLETE.',);
                });
            }, 1000);


            setTimeout(() => {

                let audio = new Audio('../../Audio/REQ sound.mp3');
                audio.play();

                clearMessage(() => {
                    typeMessage('_REQUEST ACCESS:', showPrompt);
                });
            }, 2000);
        });





        document.addEventListener("DOMContentLoaded", function() {
            function showCookieConsentPopup() {
                
                const acceptedDate = localStorage.getItem('cookieConsentAccepted');
                const now = new Date();
        
                if (acceptedDate) {
                    const acceptedTime = new Date(acceptedDate);
                    const timeDifference = now - acceptedTime;
                    const oneDay = 24 * 60 * 60 * 1000;
        
                    if (timeDifference < oneDay) {
                        return;
                    }
                }
        
                setTimeout(function() {
                    document.getElementById('cookieConsentPopup').classList.add('show');
                }, 7000);
            }
        
            function acceptCookies() {
                document.getElementById('cookieConsentPopup').classList.remove('show');
                const now = new Date();
                localStorage.setItem('cookieConsentAccepted', now.toISOString());
            }
        
            document.getElementById('acceptCookiesButton').addEventListener('click', acceptCookies);
        
            showCookieConsentPopup();
        });
        