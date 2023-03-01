// There are three types of enums:
// Numeric enum
// String enum
// Heterogeneous enum

// Numeric enum
enum myNumericEnum{
   LaptopComputer,
   DesktopComputer,
   NotebookComputer,
   SmartPhone
}
console.log(myNumericEnum);
console.log(typeof (myNumericEnum));

function electronicDevices(deviceName: string): myNumericEnum {
   if (deviceName === 'MacBook' || deviceName === "Lenovo") {
      return myNumericEnum.NotebookComputer;
   }
}
let deviceType: myNumericEnum = electronicDevices('Macbook');