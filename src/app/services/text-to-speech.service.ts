import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TextToSpeech } from '../objects/text-to-speech.interface';

@Injectable({providedIn: 'root'})

export class TextToSpeechService {
  public httpOptions: any;
  private synthesizeURL: string = "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyDvALGSWt0xrrvSM6Q52art2s1nQuglQZo";

  constructor(private httpClient: HttpClient) { }
  
  public synthesizeSpeech(text: string) {
    const body = {
      "input": {"text": text},
      "voice": {"languageCode": "en-US", "ssmlGender": "FEMALE"},
      "audioConfig": {"audioEncoding": "MP3"}
    }
    const params = new HttpParams().set('key', "AIzaSyDvALGSWt0xrrvSM6Q52art2s1nQuglQZo");

    this.httpOptions = {
      observe: body,
      params: params
    }
    return this.httpClient.post<TextToSpeech>(this.synthesizeURL, this.httpOptions);
  }
}
