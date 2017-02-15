var db = require('./../service/DataConnection');

exports.list = function(req,res){
	var sql = 'select order_id, web_order_no, email_id, order_date, '+
					'order_status, track_id, total from haastika_order';

	if(req.params.won){
		sql = sql + " where web_order_no = '" + req.params.won + "'";
		console.log(req.params.won);
	}
	
	db.query(sql, function(err, rows){
		res.json(rows);
	});
}