import { space } from "../js/spacecontent.js";

const mainContainer = document.createElement("div");
mainContainer.className = "testp";

const allCars = space.map(myCar => {
    let carsYeah = space.find(CAR => {
      return CAR.name === myCar.name;
    });
  
    return {
      mAKE: carsYeah.name,
  
    };
  });

  allCars.forEach(myCar => {
   
  
    let makeElement = document.createElement("a");
  
  
    makeElement.className = "testp1";

  
  
    makeElement.textContent = myCar.mAKE;
  
    mainContainer.appendChild(makeElement);
  });
  
  document.body.appendChild(mainContainer);
  
  console.log(space);