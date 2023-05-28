<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    @include('admin.css')

    <style>
        .div_center {
            text-align: center;
            padding-top: 40px;
        }

        .font_size {
            font-size: 40px;
            padding-bottom: 40px;
        }

        label {
          display: inline-block;
          width: 200px;
        }

        .div_design {
          padding-bottom: 15px;
        }
    </style>
  </head>
  <body>
    <div class="container-scroller">


      @include('admin.sidebar')
@include('admin.header')
<div class="main-panel">
    <div class="content-wrapper">

      @if(session()->has('message'))

    <div class="alert alert-success">
        
        <button type="button" class="close" data-dismiss="alert" 
        aria-hidden="true">×</button>

        {{session()->get('message')}}

    </div>

    @endif

    <div class="div_center">
            <h1 class="font_size">Add Product</h1>
            <form action="{{url('/add_product')}}" method="POST" enctype="multipart/form-data">

              @csrf

            <div class="div_design">
                <label for="title">Product Title :</label>
                <input type="text" name="title" placeholder="Write a title" required>
            </div>
            <div class="div_design">
                <label for="title">Description :</label>
                <input type="text" name="description" placeholder="Write a description" required>
            </div>
            <div class="div_design">
                <label for="title">Product Price :</label>
                <input type="number" name="price" placeholder="Write a price" required>
            </div>
            <div class="div_design">
                <label for="title">Discount Price :</label>
                <input type="text" name="dis_price" placeholder="Put a discount">
            </div class="div_design">
            <div class="div_design">
                <label for="title">Product Quantity :</label>
                <input type="number" min="0" name="quantity" placeholder="Write a quantity" required>
            </div>
            <div class="div_design">
                <label for="title">Product Category :</label>
                <select name="category" id="" required>
                    <option value="" selected="">Add a Category</option>
                    @foreach($category as $category)
                    <option>{{$category->category_name}}</option>
                    @endforeach
                </select>
            </div class="div_design">
            <div class="div_design">
                <label for="title">Product Image Here :</label>
                <input type="file" name="image" placeholder="click to add image" required>
            </div>
            <div class="div_design">
              <input type="submit" value="Add Product" class="btn btn-primary">
          </div>
        </form>
    </div>

    </div>




@include('admin.script')

  </body>
</html>