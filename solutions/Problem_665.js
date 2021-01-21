// Implement a URL shortener with the following methods:

// shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
// restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.
// Hint: What if we enter the same URL twice?

class URLShortener {
    constructor() {

        this.dict = {}
    }


    shorten(url) {


        if (Object.values(this.dict).indexOf(url) > -1) return null

        let newId = this.makeId(6)
        this.dict[newId] = url;


        return newId
    }


    restore(short) {

        return this.dict[short]

    }



    makeId(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}

//let short = new URLShortner()

// URLShortener.shorten()
// URLShortener.restore()



