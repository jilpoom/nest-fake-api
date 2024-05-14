import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mock } from 'jest-mock-extended';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserController } from './user.controller';
import { User as UserModel } from '@prisma/client';
import { BcryptService } from './bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDTO, UserPasswordChangeDTO } from './user.dto';
import { UserModule } from './user.module';

describe('UserController', () => {
    let userController: UserController;
    let userServiceMock: DeepMockProxy<UserService> = mock<UserService>();
    const dum: UserModel[] = [
        {
            id: 1,
            name: 'JJY',
            email: 'JJY@google.com',
            password: '1234',
        },
        {
            id: 2,
            name: 'KKY',
            email: 'KKY@google.com',
            password: '2345',
        },
    ];

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService, PrismaService, BcryptService, JwtService],
        })
            .overrideProvider(UserService)
            .useValue(userServiceMock)
            .compile();

        userController = moduleFixture.get<UserController>(UserController);
    });

    it('getAllUsers', async () => {
        userServiceMock.users.mockResolvedValueOnce(dum);

        expect(await userController.getAllUsers()).toStrictEqual(dum);
    });

    it('getUserById', async () => {
        userServiceMock.user.mockResolvedValueOnce(dum[0]);

        expect(await userController.getUserById('1')).toStrictEqual(dum[0]);
    });

    it('getFilteredUsers', async () => {
        userServiceMock.users.mockResolvedValueOnce([dum[0]]);

        expect(await userController.getFilteredUsers('JJY')).toStrictEqual([dum[0]]);
    });

    it('signupUser', async () => {
        const userCreateDTO: UserCreateDTO = {
            name: 'jjy',
            email: 'jjy@naver.com',
            password: '1234',
        };

        const userResponseDTO: UserModel = {
            id: 3,
            name: 'jjy',
            email: 'jjy@naver.com',
            password: 'crypted-password',
        };

        userServiceMock.createUser.mockResolvedValueOnce(userResponseDTO);

        expect(await userController.signupUser(userCreateDTO)).toStrictEqual(userResponseDTO);
    });

    it('change-password', async () => {
        const userPasswordChangeDTO: UserPasswordChangeDTO = {
            id: '1',
            password: '1234',
        };

        userServiceMock.updateUser.mockResolvedValueOnce(dum[0]);

        expect(await userController.changePassword(userPasswordChangeDTO)).toStrictEqual(dum[0]);
    })
});