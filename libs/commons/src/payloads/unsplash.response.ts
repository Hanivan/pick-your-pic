export interface UnsplashReponse {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: UnsplashReponseLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: Sponsorship | null;
  topic_submissions: TopicSubmissions;
  user: User;
}

export interface UnsplashReponseLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Sponsorship {
  impression_urls: any[];
  tagline: string;
  tagline_url: string;
  sponsor: User;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: null;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string | null;
}

export interface TopicSubmissions {}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
