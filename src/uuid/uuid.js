import { v4 as uuidv4 } from 'uuid';

// Check if a UUID is stored in local storage
let myUUID = localStorage.getItem('myUUID');

// Generate a new UUID and store it in local storage if one is not stored
if (!myUUID) {
    myUUID = uuidv4();
    localStorage.setItem('myUUID', myUUID);
}