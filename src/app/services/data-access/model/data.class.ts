import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PodcastForm } from './data.interface';

export class DataModel {
  constructor(private formBuilder: FormBuilder) {}

  get podcastForm() {
    return this.formBuilder.group<PodcastForm>({
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      website: new FormControl(null, Validators.required),
      isExplicitContent: new FormControl(false, Validators.required),
      category: new FormControl(null, Validators.required),
      isComplete: new FormControl(false, Validators.required)
    });
  }
}
