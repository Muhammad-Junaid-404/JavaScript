//------ Execution context in JS

// Two types:
-- Global Execution Context
-- Function Execution Context
-- Eval Execution Context

// Phases
-- Memory creation phase
-- Execution phase



// Explaination 

--1-- Global Execution
        ||
        ||
--2-- Memory phase
        ||
        ||
      let val1 --> undefined          
      let val2 --> undefined          
      func AddNum --> definition
      let result1 --> undefined
      let result2 --> undefined

--3-- Execution Phase 
         ||
         ||
      let val1 --> 10         
      let val2 --> 20
      func AddNum --> Function Execution Context  
                                 ||
                                 ||
                       --a-- Memory Phase
                                 ||
                    let val1 --> undefined                       
                    let val2 --> undefined        
                    let total --> undefined
                               
                      --b-- Execution Phase
                                ||
                       let val1 --> 10         
                       let val2 --> 20
                       let total --> 30
                    /
                /
            //  
        After the Execution of the function the function context is deleted             


     let result1 --> 30
     let result2 --> 50