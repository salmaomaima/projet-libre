/* tslint:disable */
export interface UtilisateurDto {
  email?: string;
  id?: number;
  laboratoireId?: number;
  nomComplet?: string;
  numTel?: string;
  profession?: string;
  role?: 'ADMIN' | 'USER';
  signature?: string;
}
