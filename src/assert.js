var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not true");
    } else {
      console.log("isTrue Test Has Passed");
    }
  }

  // isNote: function (assertionToCheck) {
  //   if (!assertionToCheck) {
  //     throw new Error("Assertion failed: " + assertionToCheck + " is not true");
  //   } else {
  //     console.log("isNote Tes Has Passed");
  //   }
  // }
};
