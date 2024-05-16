import { Song } from "src/songs/schemas/song";

export class CreateAlbumDTO {
  title: string;
  songs: Song[];
}