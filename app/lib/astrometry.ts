import axios from 'axios';
import FormData from 'form-data';
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

export class Astrometry {
  private api_key: string;
  private session_key: string;
  private csrfToken: string
  constructor(api: string) {
    this.api_key = api;
    this.session_key = '';
    this.csrfToken = ''
  }

  public async login(): Promise<void> {
    const apiUrl = 'http://nova.astrometry.net/api/login';

    const jsonObject = {
      apikey: this.api_key,
    };

    const formData = new FormData();
    formData.append('request-json', JSON.stringify(jsonObject));

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      console.log('Login Response:', response.data);
      if (response.headers["set-cookie"]) {
        this.csrfToken = (response.headers["set-cookie"][0].split('=')[1].split(';')[0])
      }
      this.session_key = response.data.session || '';
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  public async uploadImage(url: string): Promise<void> {
    const apiUrl = 'http://nova.astrometry.net/api/upload_url';
  
    const headers = {
      Cookie:  `csrftoken=${this.csrfToken};`
    };

    console.log(headers)
    try {
      const response = await axios.post(
        apiUrl,
        JSON.stringify({ "session": this.session_key, "url": url }),
        { headers, withCredentials: true,  }
      );
  
      // console.log(response.data); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
}

