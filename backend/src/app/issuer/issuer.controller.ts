import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IssuerService } from './issuer.service';
import { CreateIssuerDto } from './dto/create-issuer.dto';
import { UpdateIssuerDto } from './dto/update-issuer.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Issuer')
@Controller('issuer')
export class IssuerController {
  constructor(private readonly issuerService: IssuerService) {}

  @Post()
  @ApiResponse({status: 201, type: CreateIssuerDto, description: "Creates an Issuer"})
  create(@Body() createIssuerDto: CreateIssuerDto) {
    return this.issuerService.create(createIssuerDto);
  }

  @Get()
  @ApiResponse({status: 200, type: CreateIssuerDto, description: "Returns all Issuers"})
  findAll() {
    return this.issuerService.findAll();
  }

  @Get(':id')
  @ApiResponse({status: 200, type: CreateIssuerDto, description: "Returns an Issuer by id with Relation"})
  findOne(@Param('id') id: string) {
    return this.issuerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssuerDto: UpdateIssuerDto) {
    return this.issuerService.update(+id, updateIssuerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issuerService.remove(+id);
  }
}
