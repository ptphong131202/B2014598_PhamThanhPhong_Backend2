exports.create = ( req, res ) => { res.send( { message: "Create handler." } );};

exports.findAll = ( req, res ) => { res.send( { message: "Find all handlers." } );};

exports.findOne = ( req, res ) => { res.send( { message: "Find one handler." } );};

exports.update = ( req, res ) => { res.send( { message: "Update handler." } );};

exports.delete = ( req, res ) => { res.send( { message: "Delete handler." } );};

exports.deleteAll = ( req, res ) => { res.send( { message: "Delete all handlers." } );}

exports.findAllFavorite = ( req, res ) =>{ res.send( { message: "Find all favorite handlers." } );};