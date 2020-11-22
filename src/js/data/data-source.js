const moviesUrl = "http://www.omdbapi.com/?apikey=33669e36&s=";
const detailMoviesUrl = "http://www.omdbapi.com/?apikey=33669e36&i=";
class DataSource {
    static movies(keyword) {
        return fetch(`${moviesUrl}${keyword}`)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                else {
                    return response.json();
                };
            })
            .then(responseJson => {
                if (responseJson.Response === "False") throw new Error(responseJson.Error);
                else {
                    return responseJson.Search;
                };
            });
    };

    static detailMovies(id) {
        return fetch(`${detailMoviesUrl}${id}`)
            .then(response => response.json())
            .then(m => m);
    }
};
export default DataSource;