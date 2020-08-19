import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../api/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss'],
})
export class DialogProductComponent implements OnInit {
  product = {
    id: '',
    name: '',
    price: '',
  };

  constructor(
    public productService: ProductService,
    public dialogRef: MatDialogRef<DialogProductComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    if (data) {
      this.product.id = data.id;
      this.product.name = data.name;
      this.product.price = data.price;
    } else {
      (this.product.name = ''), (this.product.price = '');
    }
  }

  ngOnInit(): void {}

  save() {
    this.productService.save(this.product).subscribe({
      next: (next) => console.log(next),
      error: (error) => error.toString(),
      // console.log(res);
    });
    this.dialogRef.close();
  }

  update() {
    this.productService.update(this.product).subscribe((res) => {
      console.log(res);
    });
    this.dialogRef.close();
  }
}
