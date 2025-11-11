import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers(@Query('role') role?: 'INTERN' | 'ADMIN') {
    return this.usersService.getUsers(role);
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.getOne(+id);
  }

  @Post()
  createUser(
    @Body()
    body: {
      name: string;
      email: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.usersService.createUser(body);
  }
  @Patch(':id')
  editOne(@Param('id') id: string, @Body() editUserDetails: {}) {
    return this.usersService.editOne(+id, editUserDetails);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.usersService.deleteOne(+id);
  }
}
