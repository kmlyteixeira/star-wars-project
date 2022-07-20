import { MigrationInterface, QueryRunner, Table} from "typeorm"

export class actionfigure1658340464217 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "actionfigure",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "acquisition_date",
                        type: "date"
                    },
                    {
                        name: "comments",
                        type: "varchar"
                    },
                    {
                        name: "localization",
                        type: "varchar"
                    },
                    {
                        name: "id_user",
                        type: "uuid"
                    }
                ],

                foreignKeys: [
                    {  
                        name: "fk_purchased_actfig",
                        columnNames: ["id_user"],
                        referencedTableName: "user",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("actionfigures");
    }

}
