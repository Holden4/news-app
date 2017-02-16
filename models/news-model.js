(function(exports) {

  var News = function(headline, body) {
    this.headline = headline;
    this.body = body;

  };

  News.prototype.viewHeadline = function(){
    return this.headline;
  };

exports.News = News;

})(this);
