import { Injectable } from '@angular/core';

export interface IContact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Injectable()
export class Contact implements IContact{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
