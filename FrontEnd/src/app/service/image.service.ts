import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';

  constructor(private storage: Storage) {}

  uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `imagen/` + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("LA URL ES: " + this.url);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
