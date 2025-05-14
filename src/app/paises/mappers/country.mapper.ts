import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interface';


export class CountryMapper {


    // transformamos de restcountry a country solamente un registro
    static mapRestCountryToCountry( restCountry: RESTCountry ): Country {

        return {

            capital: restCountry.capital?.join(',') || '',
            cca2: restCountry.cca2,
            flagSvg: restCountry.flags.svg,
            name: restCountry.name.common,
            population: restCountry.population,

        }
    }

    /// transformar todo el array
    static mapRestCountryArrayToCountryArr( restCountries: RESTCountry[]): Country[] {

        return restCountries.map ( restCountry => {
            return this.mapRestCountryToCountry ( restCountry );
        });



    }
   

}