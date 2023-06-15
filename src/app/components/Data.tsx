import React from "react"
import { Flex, DataTable, DQLEditor, Heading, LoadingIndicator } from "@dynatrace/strato-components-preview"
import { useDQLQuery } from "../hooks/useDQLQuery";
import { convertToColumns } from '@dynatrace/strato-components-preview/conversion-utilities';


//Properties to pass into this component
type DataProps = {
    /**Biz Event Attribute */
    bizobj: string;
}
//Component housing all our data
export const Data = ({bizobj}:DataProps) => { 

    //passing in userEmail to the query to get account ID
    const emailToIdDQL = `fetch logs
    | parse content, "JSON:parsedContent"
    | filter isNotNull(parsedContent[query]) and parsedContent[name] == "offer.getHospitalLocationId"
    | filter matchesPhrase(content, "`+bizobj+`")
    | fields timestamp, content, parsedContent[query][facilityName], parsedContent[query][city], parsedContent[query][state], parsedContent[result]`;
    //run the query

    const [dqlReturn, isLoadingStarted] = useDQLQuery(emailToIdDQL);

       
    return(
        <Flex flexDirection="column" alignItems="center">
        { !isLoadingStarted ? <>
        <Heading>Results</Heading>
          <DataTable data={dqlReturn?.records||[]} columns={convertToColumns(dqlReturn?.types||[])} />
          <DQLEditor value={emailToIdDQL} readOnly />
          </> : <LoadingIndicator/>}
        </Flex>
    );
}