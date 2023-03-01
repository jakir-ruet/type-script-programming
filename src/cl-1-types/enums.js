// There are three types of enums:
// Numeric enum
// String enum
// Heterogeneous enum
// Numeric enum
var myNumericEnum;
(function (myNumericEnum) {
    myNumericEnum[myNumericEnum["LaptopComputer"] = 0] = "LaptopComputer";
    myNumericEnum[myNumericEnum["DesktopComputer"] = 1] = "DesktopComputer";
    myNumericEnum[myNumericEnum["NotebookComputer"] = 2] = "NotebookComputer";
    myNumericEnum[myNumericEnum["SmartPhone"] = 3] = "SmartPhone";
})(myNumericEnum || (myNumericEnum = {}));
console.log(myNumericEnum);
console.log(typeof (myNumericEnum));
function electronicDevices(deviceName) {
    if (deviceName === 'MacBook' || deviceName === "Lenovo") {
        return myNumericEnum.NotebookComputer;
    }
}
var deviceType = electronicDevices('Macbook');
