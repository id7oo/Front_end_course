'use strict';

var initialLocations = [{
        name: 'مشويات ميدان الشام',
        lat: 24.7869052,
        long: 46.6904863

    }, {
        name: 'مايسترو بيتزا',
        lat: 24.786613,
        long: 46.689113


    }, {
        name: 'بولفالو وينقز',
        lat: 24.7838866,
        long: 46.7038746
    }, {
        name: 'صب واي',
        lat: 24.7854354,
        long: 46.6848524
    }, {
        name: 'مطعم كرم بيروت',
        lat: 24.7854354,
        long: 46.6848524,
    }, {
        name: 'صحارى الشام',
        lat: 24.7854744,
        long: 46.6858126
    }, {
        name: 'شاورما نوك',
        lat: 24.7877277,
        long: 46.6904448
    }, {
        name: 'مطعم فلافل',
        lat: 24.7873904,
        long: 46.6895597,
    }


];

// Declaring global variable
var map;
var clientID;
var clientSecret;

    clientID = "ML3QGPOVQUCAG0E4Q3MSRSV4GEFZIE2CKFJGFYSG5K1NS1WX";
    clientSecret = "WAF1MGPVW5ZIIR13TWH01XYJDGP2PZUONI2U13JXNMKI2KTT";
var Location = function(data) {
    var self = this;
    this.name = data.name;
    this.lat = data.lat;
    this.long = data.long;
    this.URL = "";
    this.street = "";
    this.city = "";
    this.phone = "";

    this.visible = ko.observable(true);

    var foursquareURL = 'https://api.foursquare.com/v2/venues/search?ll=' + this.lat + ',' + this.long + '&client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20160118' + '&query=' + this.name;

    $.getJSON(foursquareURL).done(function(data) {
		//debugger;
		try {
        var results = data.response.venues[0];
		 self.street = results.location.formattedAddress[0];
        self.city = results.location.formattedAddress[1];
        self.phone = results.contact.phone;
		self.URL = results.url;
		}catch(err) {
			self.URL = 'undefined';
		}
       
        if (typeof self.phone === 'undefined') {
            self.phone = "";}
       
    }).fail(function() {
        alert("There is error with the Foursquare API");
    });

    this.contentString = '<div class="info-window-content"><div class="title"><b>' + data.name + "</b></div>" +
        '<div class="content"><a href="' + self.URL + '">' + self.URL + "</a></div>" +
        '<div class="content">' + self.street + "</div>" +
        '<div class="content">' + self.city + "</div>" +
        '<div class="content">' + self.phone + "</div></div>";

    this.infoWindow = new google.maps.InfoWindow({ content: self.contentString });

    this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.long),
        map: map,
        title: data.name
    });

    this.showMarker = ko.computed(function() {
        if (this.visible() === true) {
            this.marker.setMap(map);
        } else {
            this.marker.setMap(null);
        }
        return true;
    }, this);

    this.marker.addListener('click', function() {
        self.contentString = '<div class="info-window-content"><div class="title"><b>' + data.name + "</b></div>" +
            '<div class="content"><a href="' + self.URL + '">' + self.URL + "</a></div>" +
            '<div class="content">' + self.street + "</div>" +
            '<div class="content">' + self.city + "</div>" +
            '<div class="content"><a href="tel:' + self.phone + '">' + self.phone + "</a></div></div>";

        self.infoWindow.setContent(self.contentString);

        self.infoWindow.open(map, this);

        self.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            self.marker.setAnimation(null);
        }, 2100);
    });

    this.bounce = function(place) {
        google.maps.event.trigger(self.marker, 'click');
    };
};

function AppViewModel() {
    var self = this;

    this.searchTerm = ko.observable("");

    this.locationList = ko.observableArray([]);

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: { lat: 24.786806, lng: 46.6967319 }
    });

    // My private API id in foursequare


    initialLocations.forEach(function(locationItem) {
        self.locationList.push(new Location(locationItem));
    });

    this.filteredList = ko.computed(function() {
        var filter = self.searchTerm().toLowerCase();
        if (!filter) {
            self.locationList().forEach(function(locationItem) {
                locationItem.visible(true);
            });
            return self.locationList();
        } else {
            return ko.utils.arrayFilter(self.locationList(), function(locationItem) {
                var string = locationItem.name.toLowerCase();
                var result = (string.search(filter) >= 0);
                locationItem.visible(result);
                return result;
            });
        }
    }, self);

    this.mapElem = document.getElementById('map');
    this.mapElem.style.height = window.innerHeight - 50;
}

function startApp() {
    ko.applyBindings(new AppViewModel());
}

function errorHandling() {
    alert("Failed to load this map, Check your internet please");
}
