const API_KEY = 'ba4cc664568461c47dee7edc8830129d'
const API_BASE = 'https://api.themoviedb.org/3'

/***
 * originais
 * recomendados (trendnding)
 * em alta (toprated)
 * ação
 * comédia
 * terror
 * romance
 * documentários
 */

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&language=pt-BR&with_networks=213`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}&language=pt-BR`)
            }
        ]
    },
    getMovieInfo: async (id, type) => {
        let info = await basicFetch(`/${type}/${id}?api_key=${API_KEY}&language=pt-BR`)

        return info
    }
}