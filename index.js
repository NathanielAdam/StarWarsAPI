
$(() =>{

    let loaded = false;
//buttons that link to html to populate a table with data using hoisted functions

//people Button
    $(`#peopleButton`).click(() => {
        $('#tableBody').empty();
        $.ajax({
            type: 'GET',
            url: 'https://swapi.co/api/people'
        }).done((res) => {
            let people = res.results
            for (p of people) {
                $('#tableBody').append(createTableRowPeople(p))
                }
            peopleHeader();
        })
        loaded=true;
    
    })
//Starship Button
    $('#starshipButton').click( () =>{
        $('#tableBody').empty();
        $.ajax({
            type: 'GET',
            url: 'https://swapi.co/api/starships'
        }).done((res) => {
            $('#tableBody').empty();
            console.log(res);
            let starships = res.results;
            for (ship of starships) {
                $('#tableBody').append(createTableRowStarship(ship))
            }
            shipHeader();
        })
            
        
    })
//Planet Button

    $('#planetButton').click(() => {
        $.get('https://swapi.co/api/planets')
        .done((res) => {
            console.log(res);
            let planets = res.results;
            for(planet of planets) {
                $('#tableBody').append(createTableRowPlanets(planet))
            }
            planetHeader();
        })
    })


//Function to populate table with people
    function createTableRowPeople(person) {
        let row = $(`<tr></tr>`);
        let name = $(`<td>${person.name}</td>`);
        let height = $(`<td>${person.height}</td>`);
        let birthYear = $(`<td>${person.birth_year}</td>`);

        row.append(name);
        row.append(height);
        row.append(birthYear);

        return row;
    }
//function to populate table with ships
    function createTableRowStarship(ship){
        let row = $(`<tr></tr>`);
        let shipName = $(`<td>${ship.name}</td>`);
        let shipModel = $(`<td>${ship.model}</td>`);
        let shipManufacturer = $(`<td>${ship.manufacturer}</td>`);

        row.append(shipName);
        row.append(shipModel);
        row.append(shipManufacturer);

        return row;
    }
//fuction to populate table with planets
    function createTableRowPlanets(planet){
        let row = $(`<tr></tr>`);
        let planetName = $(`<td>${planet.name}</td>`)
        let planetClimate =$(`<td>${planet.climate}</td>`)
        let planetRotation =$(`<td>${planet.rotation_period}</td>`)

        row.append(planetName);
        row.append(planetClimate);
        row.append(planetRotation);

        return row;

    }
// button to clear data from table
    $('#clearButton').click(() => {
        $('#tableBody').empty()
        loaded=false;
    })

//Time to change the header
//header for people
    function peopleHeader(){
        $('#thA').text('height')
        $('#thB').text('Birth Year')
    }
//header for planets
    function planetHeader(){
        $('#thA').text('climate')
        $('#thB').text('length of day')
    }
//header for ships
    function shipHeader(){
        $('#thA').text('model')
        $('#thB').text('manufacturere')
    }



})