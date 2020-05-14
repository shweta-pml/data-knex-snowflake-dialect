// @ts-ignore
import * as TableCompiler_MySQL from "knex/lib/dialects/mysql/schema/tablecompiler";

export class TableCompiler extends TableCompiler_MySQL {
  constructor(client: any, builder: any) {
    super(client, builder);
  }

  addColumns(columns) {
    if (columns.sql.length > 0) {
      // @ts-ignore
      this.pushQuery({
        // @ts-ignore
        sql: 'ALTER TABLE ' + this.tableName() + ' ' + this.addColumnsPrefix + columns.sql.join(', '),
        bindings: columns.bindings
      });
    }
  }

  index(columns, indexName, indexType) {
    // @ts-ignore
    this.client.logger.warn('Snowflake does not support the creation of indexes.');
  };

  dropIndex(columns, indexName) {
    // @ts-ignore
    this.client.logger.warn('Snowflake does not support the deletion of indexes.');
  };
}
