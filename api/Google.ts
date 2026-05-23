export class Google{



async getGoogleData(apiRequestContext: any)
  {
    const respone = await apiRequestContext.get('https://www.google.com/');

        console.log('Status:', respone.status());
        console.log('Status Text:', respone.statusText());  
        
        

    }

}