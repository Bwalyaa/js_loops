const array = () => {
    const returnArray = [];
    for (let i = 1; i <= 100; i++) {  
      if (i < 10) {
        imageArray = "image_00" + i + ".jpg";
      } else if (i < 100) {
        imageArray = "image_0" + i + ".jpg";
      } else {
        imageArray = "image_" + i + ".jpg";
      }
      returnArray.push(imageArray);
    }
    console.log(returnArray);
  };
  
  array();