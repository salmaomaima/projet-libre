/* tslint:disable */
export interface User {
  active?: boolean;
  email?: string;
  getfkIdLaboratoire?: number;
  id?: number;
  numTel?: string;
  password?: string;
  profession?: string;
  roles?: Array<'ADMIN' | 'USER'>;
  signature?: string;
  username?: string;
}
