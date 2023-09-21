import { User } from "@supabase/supabase-js";

export interface ExtendedUserMetadata {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
}

export interface SupaUser extends User {
  user_metadata: ExtendedUserMetadata;
}
