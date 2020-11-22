class PopUp extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({
            mode: "open",
        })
    }

    connectedCallback() {
        setTimeout((_) => {
            this.render()
        }, 3000)
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            :host{
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 40%;
                background-color: whitesmoke;
                border-radius: 8px;
                overflow: hidden;
                user-select: none;
                box-shadow: 2px 3px 10px #b1b1b154;
                animation: pop .5s ease-in-out;
                z-index: 99;
            }

            @keyframes pop {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.9);
                }
            
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }           
            
            h5 {
                background-color: #e0e0e0;
                padding: 15px 20px;
                margin: 0;
            }
            
            p {
                font-size: 14px;
                margin: 20px;
            }
            
            .from {
                font-weight: 600;
                font-size: 13px;
            }
            
            button {
                position: absolute;
                top: 17px;
                right: 15px;
                width: 17px;
                height: 17px;
                background-color: #ff4a4a;
                border-radius: 50%;
                border: none;
                outline: none;
                cursor: pointer;
            }
            
            button:focus {
                outline: none;
            }
            
            @media (max-width: 992px) {
                :host {
                    width: 60%;
                }
            }
            
            @media (max-width: 756px) {
                :host {
                    width: 80%;
                }
            }
        </style>
        
        <h5>Hai, Reviewer!</h5>
        <p>Mungkin ini bukan metode yang paling benar ( gak sopan ) hehe, tapi saya hanya ingin mengucapkan terima
            kasih untuk hal - hal yang sangat bermanfaat yang sudah saya dapat selama mengikuti kelas - kelas di Dicoding.</p>
        <p>Ada banyak hal yang baru saya ketahui dan pelajari di sini. Materi - materinya sangat informatif, yaa
            walaupun beberapa kalimat kadang harus dibaca dua - tiga kali untuk dapat saya mengerti ( tergantung
            otak LOL ), namun diluar itu, saya merasa disini adalah tempat yang tepat untuk yang ingin mengembangkan
            kemampuan dirinya, karena bukan hanya tulisan - tulisan yang disajikan, melainkan praktik, submission,
            bahkan ujian.</p>
        <p>Udah, itu aja, hehe.</p>
        <p>Terus menjadi bagian dari masa depan programmer Indonesia. :)</p>
        <p class="from">Azril Ardian Ifansyah</p>
        <button id="closeBtn"></button>
       `
        const closeBtn = this.shadowDOM.querySelector("#closeBtn")
        closeBtn.addEventListener("click", () => {
            this.remove()
        })
    }
}

customElements.define("pop-up", PopUp)