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
