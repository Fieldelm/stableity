export async function statusPostFetch(url: string, payload: object): Promise<any> {


        const rawResponse = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        });

       if (rawResponse.ok) {
        return rawResponse.status
        //return rawResponse.json;
       }
       else{
        console.log('respononded with: ' + rawResponse.statusText);

        if ( rawResponse.status == 409){
            return rawResponse.status;
        }
        else {
            return rawResponse.statusText
        }
       
       // return [];
       }
    

}

