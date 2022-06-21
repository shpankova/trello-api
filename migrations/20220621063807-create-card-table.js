'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('card', {
    columns: {
      card_id: { type: 'int', primaryKey: true, autoIncrement: true },
      board_id: { type: 'int', autoIncrement: true },
      name: { type: 'text', notNull: true, },
      description: { type: 'text', notNull: true, },
      created_at: { type: 'datetime', defaultValue: new String('CURRENT_TIMESTAMP'), notNull: true },
      estimate: { type: 'text', notNull: true, },
      status: { type: 'text', notNull: true, },
      created_at: { type: 'datetime', defaultValue: new String('CURRENT_TIMESTAMP'), notNull: true },
      status: { type: 'text', notNull: true, },
    },
    ifNotExists: true
  });
};

exports.down = function (db) {
  return db.dropTable('card');
};

exports._meta = {
  "version": 1
};
