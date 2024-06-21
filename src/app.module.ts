import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UserModule } from './user/user.module';
import { BillModule } from './bill/bill.module';
import { EstimateModule } from './estimate/estimate.module';
import { WorkModule } from './work/work.module';
import { ImageModule } from './image/image.module';
import { CategoryModule } from './category/category.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [UserModule, BillModule, EstimateModule, WorkModule, ImageModule, CategoryModule, LocationModule],
  controllers: [AppController, UserControllerController],
  providers: [AppService],
})
export class AppModule {}
