(function(){
  describe("PGx Form", (function(__this) {
    var __func = function() {
      it('should be a test', (function(__this) {
        var __func = function() {
          var foo;
          foo = 0;
          foo++;
          return expect(foo).toEqual(1);
        };
        return (function() {
          return __func.apply(__this, arguments);
        });
      })(this));
      return it("should set medication form height correctly", (function(__this) {
        var __func = function() {
          var ht, newht;
          ht = 0;
          newht = ht + 600;
          $('#main_inner').height(newht);
          return expect($('#main_inner').height()).toEqual(600);
        };
        return (function() {
          return __func.apply(__this, arguments);
        });
      })(this));
    };
    return (function() {
      return __func.apply(__this, arguments);
    });
  })(this));
})();
