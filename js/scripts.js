var petIDarray = [];
var availableFlag;

var newPet = function(name, age, type, description, medical, profilePic) {
  this.name = name;
  this.age = age;
  this.type = type
  this.description = description;
  this.medical = medical;
  this.id = IDarray.length + 1
  this.adopted = false;
  this.profilePic = profilePic;
}

var updateGallery = function() {
  $('#galleryAdopted div, #galleryAdopted div').empty();
  var htmlToAdd;
  var totalHTMLtoAdd;
  for (var i = 0; i < petIDarray.length; i++) {
    if (!availableFlag && (petIDarray[i].adopted === false)) {
        htmlToAdd += '<div> class="col-xs-6 col-sm-4 col-lg-3 gallery"';
        htmlToAdd += '<h2>' + this.name + '</h2>';
        htmlToAdd += '<img class="img-responsive img-thumbnail" src="' + petIDarray[i].profilePic + '">';
        htmlToAdd += '<button data-toggle="modal" data-target="#moreInfo" class="btn moreInfo" id="' + petIDarray[i].id + '">More Information</button>'
    }
  }
}
