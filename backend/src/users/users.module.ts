import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishesService } from '../wishes/wishes.service';
import { User } from './entities/user.entity';
import { WishesModule } from '../wishes/wishes.module';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { Wish } from 'src/wishes/entities/wish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Wish]), forwardRef(() => WishesModule)],
  controllers: [UsersController],
  providers: [UsersService, WishesService, JwtStrategy],
  exports: [UsersService, WishesService],
})
export class UsersModule {}
