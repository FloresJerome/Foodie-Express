<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    @include('admin.css')

    <style
    type="text/css"
    >
.div_center {
    text-align: center;
    padding-top: 40px;
}

.h2_font {
    font-size: 40px;
    padding-bottom: 40px;
}

.center {
  margin: auto;
  width: 50%;
  text-align: center;
  margin-top: 30px;
  border: 3px solid white;

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
            <h2 class="h2_font">Add Category</h2>
            <form action="{{url('add_category')}}" method="POST">

                @csrf

                <input type="text" name="category" placeholder="write category name">
                <input type="submit" class="btn btn-success" name="submit" value="Add Category">
            </form>

            

            <table class="center" style="background-color: black; color: white; border-collapse: collapse; width: 100%;">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                @foreach($data as $data)
                  <tr>
                    <td>{{$data->category_name}}</td>
                    <td>
                      <a onclick="return confirm('Are you sure you want to delete the category?')" class="btn btn-danger my-2" href="{{url('delete_category',$data->id)}}">Delete</a>
                    </td>
                  </tr>
                @endforeach
              </tbody>
            </table>

            <a class="btn btn-primary my-2" href="{{ route('reset_category_id') }}">Reset Category ID</a>

          
            

        </div>
    </div>
</div>
@include('admin.script')



    </div>




  </body>
</html>