require("spec_helper.js");
require("../../public/javascripts/application.js");

Screw.Unit(function(){
  
  describe("App", function(){
    it("should do something", function(){
      do_something()
      expect($('#something').html()).to(equal, 'something');
    });
  });
});



