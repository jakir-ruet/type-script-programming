var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var stdInfo = function (info) {
    var id = Math.ceil(Math.random() * 10);
    return __assign(__assign({}, info), { id: id });
};
var aStudent = stdInfo({
    name: 'Jakir',
    age: 35
});
aStudent.id;
