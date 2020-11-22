class NavBar extends HTMLElement {
    connectedCallback() {
        this.render()
    };

    set clickEvent(click) {
        this._clickEvent = click
        this.render()
    };

    get value() {
        return this.querySelector("#search-element").value
    };

    render() {
        this.innerHTML = `

        <style>
        #search-element::placeholder {
            font-size: 14px;
        }
        </style>
        <nav class="navbar navbar-dark fixed-top">
            <div class="container">
                <a class="navbar-brand">Movieku.id</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Haryy Potter..." aria-label="Search"
                        id="search-element">
                    <button class="btn btn-outline-info my-2 my-sm-0" type="button"
                        id="search-button-element">Search</button>
                </form>
            </div>
        </nav>`

        this.querySelector("#search-button-element").addEventListener("click", this._clickEvent)
    };
};

customElements.define("nav-bar", NavBar)