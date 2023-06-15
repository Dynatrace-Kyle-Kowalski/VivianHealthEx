import React,{useState} from "react";
import { Flex, Heading, Paragraph, FormField, TextInput, Button } from "@dynatrace/strato-components-preview";
import { ToastContainer,showToast } from "@dynatrace/strato-components-preview";
import { Data } from "./components/Data";


export const App = () => {
  //Variables to be used for this page
  const [email,setEmail] = useState('');
  const [visable,setVisable] = useState(false);

  //call back function for user lookup
  function clickEvent(e) {
    //basic text validation
    //TODO - refine and ensure that we have what we are looking for
    if (email == ''){
      //ensure Data component is not visable
      setVisable(false);
      //Display toast from Strato Design System showcasing error
      showToast({
        title: 'Error',
        type: 'warning',
        message: 'text must exisit',
        lifespan: 1000
      });
    }
    else
      setVisable(true); //Display data object as email is entered
  };
  
  //callback function for reset button
  function resetEvent (e){
    //remove data object
    setVisable(false);
    //clear email address for fresh input
    setEmail('');
  };

  return (
    <>
    {/* Added ToastContainer to help with error handling in callback functions */}
    <ToastContainer />
    <Flex flexDirection="column" alignItems="center" padding={32}>
      <img
        src="./assets/Dynatrace_Logo.svg"
        alt="Dynatrace Logo"
        width={150}
        height={150}
        style={{ paddingBottom: 32 }}
      ></img> 
      <Heading>Vivian Health Sample App</Heading>
      {/* Leverage visible variable to ensure the proper copy is displayed to the end user */}
      {!visable ? <>
      <Paragraph>
        This app is designed to assist a developer create a simple view for Application Teams
      </Paragraph>
      <Paragraph>To run the app please enter a query</Paragraph>
      </>  : <Paragraph>Click the Button to reset</Paragraph> }
      <Flex flexDirection="initial" alignItems="self-end">
          <FormField label="">
            {/* if the data is visable ensure that users cannot edit the FormField */}
            {/* Could have looked at moving the setEmail to my clickEvent handler instead of locking the field */}
            {!visable ?<TextInput placeholder="My Search Terms" value={email} onChange={setEmail} /> 
            :<TextInput readOnly value={email}/>}
          </FormField>
          {/* Change which button to use depending on if data is currently shown */}
          {!visable ? <Button onClick={clickEvent} color="primary" variant="accent">Search</Button> 
          : <Button onClick={resetEvent} color="primary" variant="accent">Reset</Button>}
      </Flex>

    </Flex>
    {visable ? <Data bizobj={email}/> : <></>}
    </>
  );
};
