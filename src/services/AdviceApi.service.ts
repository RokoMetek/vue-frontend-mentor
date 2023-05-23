import axios from 'axios';

export interface Advice {
  slip: {
    advice: string;
    id: number
  };
}

export function fetchAdvice(): Promise<Advice> {
    return axios.get('https://api.adviceslip.com/advice?t='+Math.random()).then(response => response.data)
}