import { FormControl } from '@angular/forms';
import { HttpString } from './data.type';

export interface Podcast {
  id: number;
  seqNo: number;
  url: string;
  uuid: string;
  name: string;
  description: string;
  imageUrl: HttpString;
  genres: string[];
  isExplicitContent: boolean;
  websiteUrl: HttpString;
  authorName: string;
  isComplete: boolean | null;
}

export interface Podcasts {
  [key: number]: Podcast;
}

export interface PodcastForm {
  name: FormControl<string | null>;
  author: FormControl<string | null>;
  description: FormControl<string | null>;
  website: FormControl<string | null>;
  imageUrl: FormControl<string | null>;
  isExplicitContent: FormControl<boolean | null>;
  isComplete: FormControl<boolean | null>;
  category: FormControl<string | null>;
}

export interface User {
  id: number;
  image: HttpString;
  first_name: string;
  last_name: string;
  job_title: string;
  email: string;
  phone: string;
  gender: string;
  ip_address: string;
  country: string;
  city: string;
}

export interface Users {
  [key: number]: User;
}

export interface Episode {
  uuid: string;
  name: string;
  description: string;
  imageUrl: HttpString | null;
  datePublished: number;
  subtitle?: string | null;
  audioUrl: HttpString;
  fileLength: number | null;
  fileType: string;
  duration: number;
  episodeNumber?: number | null;
  podcastId: number;
}

export interface Episodes {
  [key: number]: Episode;
}
