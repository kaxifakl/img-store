System.register("chunks:///_virtual/test.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"c493b3/PEZBEL/oVPVAD34J","test",void 0),console.log("bundle3 test"),t._RF.pop()}}}));

System.register("chunks:///_virtual/bundle3",["./test.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/bundle3', 'chunks:///_virtual/bundle3'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});