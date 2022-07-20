import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Movies1657893300509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movies",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name_movie",
                        type: "varchar"
                    },
                    {
                        name: "acquisition_date",
                        type: "date"
                    },
                    {
                        name: "number_times",
                        type: "smallint"
                    },
                    {
                        name: "sale_value",
                        type: "decimal"
                    },
                    {
                        name: "comments",
                        type: "varchar"
                    },
                    {
                        name: "id_user",
                        type: "uuid"
                    }
                ],

                foreignKeys: [
                    {  
                        name: "fk_purchased_movies",
                        columnNames: ["id_user"],
                        referencedTableName: "user",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movies");
    }
}
