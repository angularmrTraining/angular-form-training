import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
        {       'id': 11,
                'firstName': 'Debora',
                'lastName': 'Dunnald',
                'jobPosition': 'developer',
                'company': 'lslkjl',
                'phoneNumber': '+212 (807) 553-2272',
                'fax': 'sdjks',
                'email': 'deboradunn@navir.com',
                'role': 'interne',
                'address': {
                    'lineOne': 'Frank Court',
                    'lineTwo': 'Batchelder Street, 361',
                    'city': 'Kenmar',
                    'country': 'Bangladesh',
                    'zipCode': '1821'
                }
        }
];
    return {contacts};
  }
}
