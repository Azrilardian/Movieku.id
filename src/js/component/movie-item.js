class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="margin">
                <div class="card">
                    <img src="${this._movie.Poster}" class="card-img-top" alt="Poster">
                    <div class="card-body d-flex flex-column justify-content-between align-items-start">
                        <div>
                            <p class="card-title text-white">${this._movie.Title}</p>
                            <p class="card-subtitle mb-2 text-muted">${this._movie.Year}</p>
                        </div>
                        <button type="button" class="btn text-white btn-detail" data-toggle="modal" data-target="#exampleModal" data-id="${this._movie.imdbID}">Detail
                        </button>
                    </div>
                </div>
            </div>`
    }
}

customElements.define("movie-item", MovieItem)