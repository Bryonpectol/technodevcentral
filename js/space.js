import { space } from "../js/spacecontent.js";
import { footer } from "../js/spacecontent.js";
import { me } from "../js/spacecontent.js";


//main

const mainContainer = document.createElement("div");
mainContainer.className = "testp";


document.body.appendChild(mainContainer);

const allCars = space.map(myCar => {
    let carsYeah = space.find(CAR => {
      return CAR.name === myCar.name;
    });
  
    return {
      mAKE: carsYeah.name,
  
    };
  });

  allCars.forEach(myCar => {
   
  
    let makeElement = document.createElement("button");
  
  
    makeElement.className = "testp1";

  
  
    makeElement.textContent = myCar.mAKE;
  
    mainContainer.appendChild(makeElement);
    
  });


//footer


  const footerContainer = document.createElement("div");
  footerContainer.className = "testp2";

  document.body.appendChild(footerContainer);


  const allfooters = footer.map(myFooter => {
    let carsFooter = footer.find(Footer => {
      return Footer.name === myFooter.name;
    });
  
    return {
      FoOtEr: carsFooter.footer,
  
    };
  });

  allfooters.forEach(myFooter => {
   
  
    let footerElement = document.createElement("p");
  
  
    footerElement.className = "testfooter";

  
  
    footerElement.textContent = myFooter.FoOtEr;
  
    footerContainer.appendChild(footerElement);
    
  });


//me


  const meContainer = document.createElement("div");
  meContainer.className = "testp2";

  document.body.appendChild(meContainer);


  const allMe = me.map(myMe => {
    let carsMe = me.find(Me => {
      return Me.name === myMe.name;
    });
  
    return {
      mE: carsMe.me
  
    };
  });

  allMe.forEach(myMe => {
   
  
    let meElement = document.createElement("p");
  
    meElement.className = "testfooter";
  
    meElement.textContent = myMe.mE;
  
    footerContainer.appendChild(meElement);
    
  });
  
  
  
  
  console.log(space);
  console.log(footer);
  console.log(me);