import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { options } from './config';
import { GUARDS } from './guargs';
import { STRTAGIES } from './strategies';
import { HttpModule } from '@nestjs/axios';

@Module({
    providers: [AuthService, ...STRTAGIES, ...GUARDS],
    controllers: [AuthController],
    imports: [PassportModule, JwtModule.registerAsync(options()), UserModule, HttpModule],
})
export class AuthModule {}
