import { DynamicModule } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Environment } from "src/common/enum";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const DatabaseProvider :DynamicModule=TypeOrmModule.forRootAsync(
    {
        inject:[ConfigService],
        async useFactory(config:ConfigService){
            const isDevelopmentEnv = config.get('NODE_ENV') !== Environment.Production;

            const dbConfig = {
              type: 'postgres',
              host: config.get('DB_HOST'),
              port: +config.get('DB_PORT'),
              username: config.get('DB_USER'),
              password: config.get('DB_PASS'),
              database: config.get('DB_NAME'),
              autoLoadEntities: true,
              synchronize: isDevelopmentEnv,
        } as PostgresConnectionOptions;
        return dbConfig;
    }
})