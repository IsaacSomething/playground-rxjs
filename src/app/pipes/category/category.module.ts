import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPipe } from './category.pipe';

@NgModule({
  declarations: [CategoryPipe],
  exports: [CategoryPipe],
  imports: [CommonModule]
})
export class CategoryModule {}
