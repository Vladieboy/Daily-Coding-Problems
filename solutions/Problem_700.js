// You are given a huge list of airline ticket prices between different cities around the world on a given day. These are all direct flights. 
//Each element in the list has the format (source_city, destination, price).

// Consider a user who is willing to take up to k connections from their origin city A to their destination B. 
//Find the cheapest fare possible for this journey and print the itinerary for that journey.

// For example, our traveler wants to go from JFK to LAX with up to 3 connections, and our input flights are as follows:

// [
//     ('JFK', 'ATL', 150),
//     ('ATL', 'SFO', 400),
//     ('ORD', 'LAX', 200),
//     ('LAX', 'DFW', 80),
//     ('JFK', 'HKG', 800),
//     ('ATL', 'ORD', 90),
//     ('JFK', 'LAX', 500),
// ]

// Due to some improbably low flight prices, the cheapest itinerary would be JFK -> ATL -> ORD -> LAX, costing $440.

const directFlights = [
    { source_city: 'JFK', destination: 'ATL', price: 150 },
    { source_city: 'ATL', destination: 'SFO', price: 400 },
    { source_city: 'ORD', destination: 'LAX', price: 200 },
    { source_city: 'LAX', destination: 'DFW', price: 80 },
    { source_city: 'JFK', destination: 'HKG', price: 800 },
    { source_city: 'ATL', destination: 'ORD', price: 90 },
    { source_city: 'JFK', destination: 'LAX', price: 500 },

]




const cheapestFlight = (source, dest, maxConnections) => {

    const _dF = [...directFlights]

    /**
     * STEPS
     * 1 - create array of arrays generating a path from source to dest
     * 2 - filter out any longer than maxConnections
     * 3 - sum of remaining, get smallest
     */

    let destFlights = _dF.filter(x => x.destination === dest)
    // { source_city: 'JFK', destination: 'LAX', price: 500 },
    // { source_city: 'ORD', destination: 'LAX', price: 200 },

    let connections = []
    destFlights.forEach(flight => {
        let _filteredDF = [..._dF.filter(x => x.destination !== dest)]
        let currentFlights = []
        // { source_city: 'ORD', destination: 'LAX', price: 200 },

        if (flight.source_city === source) {
            console.log('done')
            connections.push(currentFlights);
            continue;
        }


        //find all destinations at current source
        _filteredDF.forEach((_f, i, orig) => {
            if (_f.destination === flight.source_city) {
                //add to array
                let arr = [_f, flight]
                orig.splice(i, 1)
            }
        })



    })
}




