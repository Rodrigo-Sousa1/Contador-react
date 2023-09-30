import { useState } from "react"
export default function Header() {

    const [ numero, setNUmero] = useState(0)
    const MenorNumero = () =>{
        if(numero != 0) {setNUmero(numero - 1)}
    }
    const MaiorNumero = () => {
        if( numero != 10) {setNUmero( numero + 1 )}
         }

        setTimeout(() => {<audio src="https://youtu.be/Kg9KGulhSbI?si=n-3KGOPHjQO1O4nr"></audio>
            
        }, 1000);



    return(
        <>
        <body className="corpo">
            
        <header>
            <h1>Contador</h1>
        
            <section className="Container">

                <section className="Fundo">
                <h2>{numero}</h2>
                </section>

                <section className="Ps"> 
                <p className="p1">Nintendo</p>
                <p className="p2">GAME BOY</p>
                </section>

                    <div className="botao">
                        <button onClick={MaiorNumero} >+</button>
                        <button onClick={MenorNumero}>-</button>
                    </div>
            </section>
        
        </header>


            <section className="clip">

            <iframe width="360"
              height="255"
              src="https://www.youtube.com/embed/zXDPiUi9Hfg?si=LTalR2Qg9RzXJcy8&amp;controls=0" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;      picture-in-picture; web-share" 
              allowfullscreen>
                
              </iframe>
                
            </section>

        </body>

        </>

    )}