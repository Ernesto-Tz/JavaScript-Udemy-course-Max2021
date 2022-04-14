import { Modal } from './UI/Modal';

// Central class which manages DOM elements
class PlaceFinder {
    constructor () {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');


        locateUserBtn.addEventListener('click', this.localUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    localUserHandler () { 
        if(!navigator.geolocation) {
            alert('Location user not supported on your browser');
            return;
        }
        const modal = new Modal('loading-modal-content', 'Loading location');
        modal.show();
        navigator.geolocation.getCurrentPosition(successResult => {
            modal.hide();
            const coordinates = {
                lat: successResult.coords.latitude, 
                lng: successResult.coords.longitude
            };

            console.log(coordinates);
        }, error => {
            modal.hide();
            alert('Could not locate you, please enter an address manually');
        });
    }

    findAddressHandler () { }
}

const placeFinder = new PlaceFinder();