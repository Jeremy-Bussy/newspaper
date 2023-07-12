export class UserModel {
  id: number | null = null;
  name: string | null = null;
  email: string | null = null;
  password: string | null = null;
  google_id: number | null = null;
  google_token: string | null = null;
  role: number | null = null;
  remember_token: string | null = null;
  premium: boolean | null = null;
}
