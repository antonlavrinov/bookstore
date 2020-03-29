export default class BookService {
    _apiBase = 'https://www.googleapis.com/books/v1/volumes?';
    _maxResults = 'maxResults=15';
    _intitle = 'intitle:';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${this._maxResults}&q=${url}`);
        if(!res.ok) {
            throw new Error('dfsfdsfdf')
        }
        return await res.json();
    }

    getAllBooks = async (url) => {
        const res = await this.getResource(url);
        // console.log(res)
        return res;
    }
}