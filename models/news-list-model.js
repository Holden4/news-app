
(function(exports) {
  var NewsList = function() {
    this.list = [];
  };

  NewsList.prototype.getData = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        myData = JSON.parse(this.responseText);
      }
    };
    xmlhttp.open("GET", "http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=body&api-key=aa4d0029-5dc9-4ac6-86f9-d34f382c4d8e", true);
    xmlhttp.send();
    };


  //
  // NewsList.prototype.addNews = function () {
  //   for ( var i = 0; i <  )
  //
  //   this.list.push()
  // }

exports.NewsList = NewsList;

})(this);


// {
// -response: {
// status: "ok"
// userTier: "developer"
// total: 1930143
// startIndex: 1
// pageSize: 10
// currentPage: 1
// pages: 193015
// orderBy: "newest"
// -results: [
// -{
// id: "sport/2017/feb/16/mercedes-f1-title-hopes-boosted-by-appointment-of-james-allison-technical-director"
// type: "article"
// sectionId: "sport"
// sectionName: "Sport"
// webPublicationDate: "2017-02-16T11:23:43Z"
// webTitle: "Mercedes’ F1 title hopes boosted by appointment of James Allison"
// webUrl: https://www.theguardian.com/sport/2017/feb/16/mercedes-f1-title-hopes-boosted-by-appointment-of-james-allison-technical-director
// apiUrl: https://content.guardianapis.com/sport/2017/feb/16/mercedes-f1-title-hopes-boosted-by-appointment-of-james-allison-technical-director
// isHosted: false
//     };
//   };
// };
