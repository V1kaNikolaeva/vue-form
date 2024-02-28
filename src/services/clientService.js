/**
 * @typedef Client
 * @property id {number} 
 * @property surname {string}
 * @property name {string}
 * @property patronymic {string}
 * @property birthday {string} 
 * @property phone {string} 
 * @property gender {string} 
 * @property clientGroup {array} 
 * @property doctor {string} 
 * @property message {string} 
 * @property index {number}  
 * @property country {string}  
 * @property region {string}  
 * @property city {string}   
 * @property street {string}  
 * @property houseNumber {number} 
 * @property documentType {string}
 * @property series {number}  
 * @property number {number}  
 * @property issuedBy {string}  
 * @property issueDate {string}
 */

let lastClientId = -1;
/**
 * Создает нового клиента
 * @return {Client}
 */

export function client() {
  return {
    id: lastClientId--,
    surname: '',
    name: '',
    patronymic: '',
    birthday: '',
    phone: '',
    gender: '',
    clientGroup: [],
    doctor: '',
    message: false,
    index: null,
    country: '',
    region: '',
    city: '',
    street: '',
    houseNumber: null,
    documentType: '',
    series: null,
    number: null,
    issueBy: '',
    issueDate: '',
  };
}

