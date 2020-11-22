import "../component/movie-list.js";
import "../component/nav-bar.js";
import DataSource from "./../data/data-source.js";

const main = () => {
    // ? Inisialisasi Variabel
    const btnSearch = document.querySelector("nav-bar")
    const moviesListElement = document.querySelector("movie-list")

    const onButtonSearchClick = async () => {
        try {
            const results = await DataSource.movies(btnSearch.value)
            moviesListElement.movies = results
        } catch (err) {
            console.log(err)
        };
    }

    btnSearch.clickEvent = onButtonSearchClick

    //? Movie Detail
    document.addEventListener("click", async function (e) {
        if (e.target.classList.contains("btn-detail")) {
            const id = e.target.dataset.id;
            const movieDetails = await DataSource.detailMovies(id);
            updateUIDetail(movieDetails);
        }
    })

    function updateUIDetail(movieDetails) {
        const detail = getDetailMovies(movieDetails);
        const detailContainer = document.querySelector(".modal-container");
        detailContainer.innerHTML = detail;
    }

    function getDetailMovies(m) {
        return `<div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${m.Poster}" class="card-img">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                <li class="list-group-item"><strong>Directors : </strong>${m.Director}</li>
                                <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                                <li class="list-group-item"><strong>Writers : </strong>${m.Writer}</li>
                                <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
    };

}

export default main