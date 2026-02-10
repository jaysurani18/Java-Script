function one( ) {
    const username = "jay";

      function two(){
        const website = "youtube";
        console.log(username); // accessible because of closure AND THEY CAN ACCESS GLOBAL SCOPE
        
      }
      console.log(website); // not accessible because it is declared inside of the function two and it is not accessible outside of the function two

      two();
    
}

one()