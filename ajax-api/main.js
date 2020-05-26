$(function()
{
  var $orders = $('#orders');
  var $name=$('#name');
  var $drink=$('#drink');

  $.ajax
  ({
    type: 'GET',
    url: '/api/orders.json',
    success: function(orders)
    {
        $.each(orders,function(i,order){
          $orders.append('<li>name: '+ order.name+', drink: '+ order.drink +'</li>');
        });
    },
    error: function()
    {
        alert('error loading orders');
    }

  });//ajax


  $('#add-order').on('click',function(){

        var order={
            name:$name.val(),
            drink:$drink.val()
        };

        $.ajax({
            type:'POST',
            url: '/api/orders.jsonx',
            data:order,
            success: function(newOrder){
                $orders.append('<li>name: '+ newOrder.name+', drink: '+ newOrder.drink +'</li>');
            },
            error:function(){
                alert('error saving order');
            }
        });

  });
});
