var FindSum;
(function (FindSum) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.sum = function (n) {
            return n * 2;
        };
        return useful;
    }());
    FindSum.useful = useful;
})(FindSum || (FindSum = {}));
///<reference path = "compute.ts"/>
var use = new FindSum.useful();
console.log(use.sum(2));
