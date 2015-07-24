$(function(){
	$('.del').on('click',function(){
		var that = $(this);
		var id = that.data('id');
		var tr = $('.item-id-' + id);

		$.ajax({
			type: 'delete',
			url:'/admin/list?id=' + id
		}).done(function(res){
			if(res.success === 1){
				if(tr.length > 0){
					tr.remove();
				}
			}
		})

	})
});