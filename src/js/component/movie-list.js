import "./movie-item.js"

class MovieList extends HTMLElement {
    set movies(movies) {
        this._movies = movies
        this.render()
    }

    render() {
        this.innerHTML = ''
        this._movies.forEach((movie) => {
            const listMovieElement = document.createElement("movie-item")
            listMovieElement.setAttribute("class", "col-xl-3 col-lg-3 col-md-4 col-sm-6 my-3")
            listMovieElement.movie = movie
            this.appendChild(listMovieElement)
        })
    };
}
customElements.define("movie-list", MovieList)